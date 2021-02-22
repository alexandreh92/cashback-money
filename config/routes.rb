Rails.application.routes.draw do
  namespace :api do
  end

  scope :api do
    devise_for :users, skip: :all
    as :user do
      post 'sessions', to: 'api/sessions#create', as: :user_session
      post 'registrations', to: 'api/registrations#create', as: :user_registration
      delete 'sign_out', to: 'api/sessions#destroy', as: :destroy_user_session
    end
  end
end
