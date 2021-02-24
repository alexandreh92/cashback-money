module Api
  class OffersController < ApiController
    def index
      offers = Offer.enabled.search(params[:search]).paginate(
        page: params[:page],
        per_page: params[:per_page]
      ).order(premium: :desc)

      render json: {
        offers: offers,
        current_page: offers.current_page,
        total_pages: offers.total_pages,
        total_entries: offers.total_entries,
        per_page: offers.per_page
      }
    end
  end
end
