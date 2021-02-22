require 'rails_helper'

RSpec.describe 'SessionsController', type: :request do
  describe 'POST #create' do
    let(:url) { '/api/sessions' }
    let(:user) { create :user }
    let(:params) do
      {
        email: user.email,
        password: user.password
      }
    end

    context 'when login sucessfull' do
      before do
        post url, params: params
      end

      it 'returns status 200 and body' do
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)['email']).to eq(user.email)
      end

      it 'returns valid JWT token' do
        expect(response.headers['Authorization']).to be_present
        token_from_request = response.headers['Authorization'].split(' ').last
        decoded_token = JWT.decode(token_from_request,
                                   ENV['JWT_SECRET'], true)
        expect(decoded_token.first['sub']).to be_present
      end
    end

    context 'with invalid params' do
      before { post url }

      it 'returns status 400' do
        expect(response).to have_http_status(400)
      end
    end
  end
end
