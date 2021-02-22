require 'rails_helper'

RSpec.describe 'RegistrationsController', type: :request do
  describe 'POST #create' do
    let(:user) { build(:user) }
    let(:url) { '/api/registrations' }

    let(:params) do
      {
        name: user.name,
        email: user.email,
        password: '123456',
        password_confirmation: '123456'
      }
    end

    context 'with success' do
      before do
        post url, params: params
      end

      it 'returns user and status 200' do
        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)['email']).to eq(params[:email])
      end

      it 'returns valid JWT token' do
        expect(response.headers['Authorization']).to be_present
        token_from_request = response.headers['Authorization'].split(' ').last
        decoded_token = JWT.decode(token_from_request,
                                   ENV['JWT_SECRET'], true)
        expect(decoded_token.first['sub']).to be_present
      end
    end

    context 'invalid parameters' do
      before do
        post url, params: {
          name: user.name,
          email: user.email,
          password: '123456',
          password_confirmation: '1234567'
        }
      end

      it 'returns status 400' do
        expect(response).to have_http_status(400)
      end
    end
  end
end
