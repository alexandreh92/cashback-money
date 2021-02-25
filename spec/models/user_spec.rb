require 'rails_helper'

RSpec.describe User, type: :model do
  describe '#rolify' do
    let(:user) { create(:user, :admin) }

    it 'have role' do
      user.has_role?(:admin)
    end
  end
end
