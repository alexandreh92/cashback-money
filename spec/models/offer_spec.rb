require 'rails_helper'

RSpec.describe Offer, type: :model do
  describe 'validations' do
    it 'presence' do
      is_expected.to validate_presence_of :advertiser_name
      is_expected.to validate_presence_of :url
      is_expected.to validate_presence_of :description
      is_expected.to validate_presence_of :starts_at
    end

    it 'allow values' do
      is_expected.to allow_value('https://foo.com').for(:url)
      is_expected.not_to allow_value('foo.com').for(:url)
    end

    it 'length' do
      is_expected.to validate_length_of(:description).is_at_most(500)
      is_expected.not_to validate_length_of(:description).is_at_most(501)
    end
  end

  describe 'scopes' do
    describe '#enabled' do
      subject { Offer.enabled }

      context 'when the offer did not started yet' do
        context 'when enabled' do
          let!(:offer) { create(:offer, :waiting) }

          it 'returns no offers' do
            expect(subject.count).to eq(0)
          end
        end

        context 'when disabled' do
          let!(:offer) { create(:offer, :waiting, :disabled) }

          it 'returns no offers' do
            expect(subject.count).to eq(0)
          end
        end
      end

      context 'when the offer just started' do
        context 'with delimitation date' do
          context 'when enabled' do
            let!(:offer) { create(:offer, :active_with_delimitation) }

            it 'return enabled offer' do
              expect(subject.count).to eq(1)
              expect(subject.first.id).to eq(offer.id)
            end
          end

          context 'when disabled' do
            let!(:offer) { create(:offer, :active_with_delimitation, :disabled) }

            it 'returns no offers' do
              expect(subject.count).to eq(0)
            end
          end
        end

        context 'without delimitation' do
          context 'when enabled' do
            let!(:offer) { create(:offer, :active_without_delimitation) }

            it 'return enabled offer' do
              expect(subject.count).to eq(1)
              expect(subject.first.id).to eq(offer.id)
            end
          end

          context 'when disabled' do
            let!(:offer) { create(:offer, :active_without_delimitation, :disabled) }

            it 'returns no offers' do
              expect(subject.count).to eq(0)
            end
          end
        end
      end

      context 'when the offer already ended' do
        context 'when enabled' do
          let!(:offer) { create(:offer, :ended) }

          it 'returns no offers' do
            expect(subject.count).to eq(0)
          end
        end

        context 'when disabled' do
          let!(:offer) { create(:offer, :ended, :disabled) }

          it 'returns no offers' do
            expect(subject.count).to eq(0)
          end
        end
      end
    end
  end

  describe 'methods' do
    describe '#status' do
      subject { offer.status }

      context 'when the offer did not started yet' do
        context 'when enabled' do
          let!(:offer) { create(:offer, :waiting) }

          it 'returns status false' do
            expect(subject).to eq(false)
          end
        end

        context 'when disabled' do
          let!(:offer) { create(:offer, :waiting, :disabled) }

          it 'returns status false' do
            expect(subject).to eq(false)
          end
        end
      end

      context 'when the offer just started' do
        context 'with delimitation date' do
          context 'when enabled' do
            let!(:offer) { create(:offer, :active_with_delimitation) }

            it 'return status true' do
              expect(subject).to eq(true)
            end
          end

          context 'when disabled' do
            let!(:offer) { create(:offer, :active_with_delimitation, :disabled) }

            it 'returns status false' do
              expect(subject).to eq(false)
            end
          end
        end

        context 'without delimitation' do
          context 'when enabled' do
            let!(:offer) { create(:offer, :active_without_delimitation) }

            it 'return status true' do
              expect(subject).to eq(true)
            end
          end

          context 'when disabled' do
            let!(:offer) { create(:offer, :active_without_delimitation, :disabled) }

            it 'returns status false' do
              expect(subject).to eq(false)
            end
          end
        end
      end

      context 'when the offer already ended' do
        context 'when enabled' do
          let!(:offer) { create(:offer, :ended) }

          it 'returns status false' do
            expect(subject).to eq(false)
          end
        end

        context 'when disabled' do
          let!(:offer) { create(:offer, :ended, :disabled) }

          it 'returns status false' do
            expect(subject).to eq(false)
          end
        end
      end
    end
  end

  describe '#can_use_offer?' do
    let(:offer) { create(:offer) }

    subject { offer.can_use_offer? }

    it { subject }
  end
end
