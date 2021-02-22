require 'rails_helper'

RSpec.describe Api::OffersController, type: :controller do
  let(:user) { create(:user) }
  describe 'GET #index' do
    let!(:offer) { create(:offer, :active_with_delimitation) }
    let!(:second_offer) { create(:offer, :active_with_delimitation) }
    let!(:premium_offer) { create(:offer, :active_with_delimitation, :premium) }

    before do
      sign_in(user)
      get :index
    end

    it 'returns status 200 and offers' do
      expect(response).to have_http_status(200)
      expect(response.body).to include_json(
        {
          offers: (be_kind_of Array),
          current_page: (be_kind_of Integer),
          total_pages: (be_kind_of Integer),
          total_entries: (be_kind_of Integer),
          per_page: (be_kind_of Integer)
        }
      )
    end

    it 'orders offers by premium first' do
      parsed_body = JSON.parse(response.body)
      expect(parsed_body['offers'].first['premium']).to eq(true)
    end
  end
end
