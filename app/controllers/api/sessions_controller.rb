module Api
  class SessionsController < Devise::SessionsController
    def create
      user = User.find_by_email(user_params[:email])
      if user.present? && user.valid_password?(user_params[:password])
        sign_in(user)
        render json: user
      else
        render json: {
          message: I18n.t('controllers.messages.login_failure'),
          errors: [I18n.t('controllers.messages.invalid_login_params')]
        }, status: :bad_request
      end
    end

    private

      def user_params
        params.permit(:email, :password)
      end
  end
end
