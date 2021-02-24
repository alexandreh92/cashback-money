module Api
  module Backoffice
    class OffersController < BackofficeController
      def index
        offers = Offer.all.search(params[:search]).paginate(
          page: params[:page],
          per_page: params[:per_page]
        ).order(created_at: :desc)

        render json: {
          offers: offers,
          current_page: offers.current_page,
          total_pages: offers.total_pages
        }
      end

      def create
        offer = Offer.new(offer_params)

        if offer.save
          render json: {
            offer: offer,
            message: 'Offer successfully created'
          }
        else
          render json: {
            message: 'Cannot create Offer',
            errors: offer.errors.full_messages
          }, status: :bad_request
        end
      end

      def update
        offer = Offer.find(offer_params[:id])

        if offer.update(offer_params)
          render json: {
            offer: offer,
            message: 'Offer successfully created'
          }
        else
          render json: {
            message: 'Cannot update Offer',
            errors: offer.errors.full_messages
          }, status: :bad_request
        end
      end
    end
  end
end
