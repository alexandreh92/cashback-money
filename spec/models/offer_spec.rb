require 'rails_helper'

RSpec.describe Offer, type: :model do
  describe 'validations' do
    it 'presence' do
      is_expected.to validate_presence_of :advertiser_name
      is_expected.to validate_presence_of :url
      is_expected.to validate_presence_of :description
      is_expected.to validate_presence_of :starts_at
    end

    it 'uniqueness' do
      is_expected.to validate_uniqueness_of :advertiser_name
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

    describe '#search' do
      let!(:offer) { create(:offer, advertiser_name: name) }
      let(:name) { 'Testing' }

      context 'when name matches' do
        subject { Offer.search(name) }

        it 'returns matching offer' do
          expect(subject.first.id).to eq(offer.id)
        end
      end

      context 'when name matches' do
        subject { Offer.search('No Match') }

        it 'returns matching offer' do
          expect(subject).to be_empty
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

    describe '#can_use_offer?' do
      let(:offer) { create(:offer) }

      subject { offer.can_use_offer? }

      it { subject }
    end

    describe '#end_date_gt_than_start_date' do
      context 'with success' do
        context 'when starts_at <= ends_at' do
          let(:offer) do
            build(:offer, starts_at: Time.zone.now, ends_at: Time.zone.now + 1.hour)
          end

          subject { offer.save }

          it 'saves record' do
            expect(subject).to eq(true)
          end
        end

        context 'when ends_at = nil' do
          let(:offer) do
            build(:offer, starts_at: Time.zone.now, ends_at: nil)
          end

          subject { offer.save }

          it 'saves record' do
            expect(subject).to eq(true)
          end
        end
      end

      context 'with failure' do
        let(:offer) do
          build(:offer, starts_at: Time.zone.now + 1.hour, ends_at: Time.zone.now)
        end

        subject { offer.save }

        it 'saves record' do
          expect(subject).to eq(false)
        end
      end
    end
  end
end
