require 'factory_bot'
require 'faker'

admin_user = User.find_or_create_by(
  name: 'Admin User',
  email: 'admin@admin.com',
  password: '123123',
  password_confirmation: '123123'
)

admin_user.add_role(:admin)

User.find_or_create_by(
  name: 'John Doe',
  email: 'user@user.com',
  password: '123123',
  password_confirmation: '123123'
)

FactoryBot.create_list(20, :offer, :active_without_delimitation, :sampled)
FactoryBot.create_list(20, :offer, :active_with_delimitation, :sampled)
