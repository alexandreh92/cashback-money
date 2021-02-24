Rails.application.routes.draw do
  namespace :api do
    resources :offers, only: [:index]

    namespace :backoffice do
      resources :offers, only: [:index] do
        post :toggle_status, on: :collection
      end
    end
  end

  scope :api do
    devise_for :users, skip: :all
    as :user do
      post 'sessions', to: 'api/sessions#create', as: :user_session
      post 'registrations', to: 'api/registrations#create', as: :user_registration
      delete 'sign_out', to: 'api/sessions#destroy', as: :destroy_user_session
    end
  end

  # Fallback Routes to React
  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
