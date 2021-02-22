class ApplicationController < ActionController::API
  include Pundit

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  respond_to :json
  around_action :handle_exceptions

  # React HTML Fallback
  def fallback_index_html
    render file: 'public/index.html'
  end

  def handle_exceptions
    yield
  rescue ActiveRecord::RecordNotFound => e
    render json: { message: e }, status: :bad_request
  end

  def user_not_authorized(exception)
    policy_name = exception.policy.class.to_s.underscore
    render json: {
      message: I18n.t(
        "#{policy_name}.#{exception.query}",
        scope: 'pundit',
        default: :default
      )
    }, status: :unauthorized
  end
end
