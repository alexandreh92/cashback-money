class Offer < ApplicationRecord
  # Validations
  validates :advertiser_name, :url, :description, :starts_at, presence: true
  validates :url, format: URI::DEFAULT_PARSER.make_regexp(%w[http https])
  validates :description, length: { maximum: 500 }

  # Scopes/Singleton methods
  scope :enabled, lambda {
                    lt_now = arel_table[:starts_at].lteq(Time.zone.now)
                    gt_now = arel_table[:ends_at].gt(Time.zone.now)
                    end_nil = arel_table[:ends_at].eq(nil)

                    where(enabled: true).where(lt_now.and(gt_now.or(end_nil)))
                  }

  # Methods
  def status
    enabled && (
      Time.zone.now >= starts_at &&
      (Time.zone.now.to_i < ends_at.to_i) || ends_at.nil?
    )
  end

  def can_use_offer?
    status
  end
end
