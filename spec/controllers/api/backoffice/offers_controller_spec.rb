require 'rails_helper'

RSpec.describe Api::Backoffice::OffersController, type: :controller do
  let(:user) { create(:user, :admin) }

  before do
    sign_in(user)
  end

  describe 'GET #show' do
    let(:offer) { create(:offer) }

    before do
      get :show, params: { id: offer.id }
    end

    it 'returns offer and status 200' do
      expect(response).to have_http_status(200)
      parsed_body = JSON.parse(response.body)
      expect(parsed_body['id']).to eq(offer.id)
      expect(parsed_body).to include_json(offer.as_json)
    end
  end

  describe 'GET #index' do
    let!(:offers) { create_list(:offer, 3, :active_with_delimitation) }

    before do
      get :index
    end

    it 'returns array of offers and status 200' do
      expect(response).to have_http_status(200)
      parsed_body = JSON.parse(response.body)
      expect(parsed_body['offers'].count).to eq(3)
      expect(parsed_body).to include_json(
        {
          offers: be_kind_of(Array),
          current_page: be_kind_of(Integer),
          total_pages: be_kind_of(Integer)
        }
      )
    end
  end

  describe 'POST #create' do
    context 'with success' do
      let(:params) do
        {
          advertiser_name: 'John Doe',
          description: 'Foo bar',
          starts_at: Time.zone.now,
          ends_at: nil,
          premium: true,
          enabled: false,
          url: 'http://foobar.com'
        }
      end

      before do
        post :create, params: params
      end

      it 'returns status 200 and created offer' do
        expect(response).to have_http_status(200)
        parsed_body = JSON.parse(response.body)
        expect(parsed_body['offer']['advertiser_name']).to eq(
          params[:advertiser_name]
        )
        expect(parsed_body).to include_json(
          {
            offer: be_kind_of(Hash),
            message: be_kind_of(String)
          }
        )
      end
    end

    context 'with failure' do
      context 'when params are wrong' do
        let(:params) do
          {
            advertiser_name: 'John Doe',
            description: 'Foo bar',
            starts_at: nil,
            ends_at: nil,
            premium: true,
            enabled: false,
            url: 'http://foobar.com'
          }
        end

        before do
          post :create, params: params
        end

        it 'returns error 400' do
          expect(response).to have_http_status(400)
        end
      end
    end
  end

  describe 'PATCH #update' do
    let!(:offer) { create(:offer, :active_with_delimitation) }
    context 'with success' do
      let(:params) do
        {
          id: offer.id,
          advertiser_name: 'John Doe',
          description: 'Foo bar',
          ends_at: nil,
          enabled: false
        }
      end

      before do
        patch :update, params: params
      end

      it 'updates offer and returns status 200' do
        expect(response).to have_http_status(200)
        parsed_body = JSON.parse(response.body)
        expect(parsed_body['offer']['advertiser_name']).to eq(
          offer.reload.advertiser_name
        )
      end
    end

    context 'with failure' do
      context 'when params are wrong' do
        let(:params) do
          {
            id: offer.id,
            advertiser_name: nil,
            description: 'Foo bar',
            ends_at: nil,
            enabled: false
          }
        end

        before do
          patch :update, params: params
        end

        it 'returns error 400' do
          expect(response).to have_http_status(400)
        end
      end

      context 'when offer doesnt exists' do
        let(:params) do
          {
            id: offer.id + 1,
            advertiser_name: 'John Doe',
            description: 'Foo bar',
            ends_at: nil,
            enabled: false
          }
        end

        before do
          patch :update, params: params
        end

        it 'returns error 400' do
          expect(response).to have_http_status(400)
        end
      end
    end
  end

  describe 'POST #toggle_status' do
    let(:offer) { create(:offer, :disabled) }

    before do
      post :toggle_status, params: { id: offer.id }
    end

    it 'returns offer with toggled status' do
      parsed_body = JSON.parse(response.body)
      expect(parsed_body['id']).to eq(offer.id)
      expect(parsed_body['enabled']).to eq(!offer.enabled)
      expect(offer.reload.enabled).to eq(true)
      expect(parsed_body).to include_json(offer.as_json(methods: :status))
    end
  end
end
