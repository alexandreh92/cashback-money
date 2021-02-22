module Api
  module Backoffice
    class BackofficeController < ::Api::ApiController
      before_action do
        authorize :user, :backoffice?
      end
    end
  end
end
