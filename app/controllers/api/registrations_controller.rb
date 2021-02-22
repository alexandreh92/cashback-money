module Api
  class RegistrationsController < Devise::RegistrationsController
    def create
      user = User.create(user_params)

      if user.present? && user.errors.none?
        sign_in(user)
        render json: user.as_json(methods: :roles)
      else
        render json: {
          message: I18n.t(
            'controllers.messages.save_failure',
            model: User.model_name.human
          ),
          errors: user.errors.full_messages
        }, status: :bad_request
      end
    end

    private

      def user_params
        params.permit(:name, :email, :password, :password_confirmation)
      end
  end
end
