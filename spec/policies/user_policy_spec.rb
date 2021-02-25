require 'rails_helper'

RSpec.describe UserPolicy do
  describe '#backoffice?' do
    subject { described_class.new(user, Role) }

    context 'for a legacy user' do
      let(:user) { create(:user) }

      it 'not allow backoffice policy' do
        expect(subject.backoffice?).to eq(false)
      end
    end

    context 'for an admin' do
      let(:user) { create(:user, :admin) }

      it 'allows backoffice policy' do
        expect(subject.backoffice?).to eq(true)
      end
    end
  end

  describe '#scope' do
    let(:user) { create(:user, :admin) }
    let(:scope) { described_class::Scope.new(user, Role).resolve }
    it { scope }
  end
end
