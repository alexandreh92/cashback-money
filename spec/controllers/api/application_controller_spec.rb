require 'rails_helper'

RSpec.describe ApplicationController do
  controller do
    def test_record_not_found
      raise ActiveRecord::RecordNotFound
    end

    def test_rescue_pundit_unauthorized
      raise Pundit::NotAuthorizedError
    end
  end

  before :each do
    routes.draw do
      get 'test_record_not_found' => 'anonymous#test_record_not_found'
      get 'test_rescue_pundit_unauthorized' => 'anonymous#test_rescue_pundit_unauthorized'
    end
  end

  it 'rescues from ' do
    get :test_record_not_found
    expect(response).to have_http_status(400)
  end

  it 'rescues from da' do
    get :test_rescue_pundit_unauthorized
    expect(response).to have_http_status(401)
  end
end
