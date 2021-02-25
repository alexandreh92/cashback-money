require 'factory_bot'
require 'faker'

admin_user = User.find_or_initialize_by(
  email: 'admin@admin.com'
)
admin_user.name = 'Admin User'
admin_user.password = '123123'
admin_user.password_confirmation = '123123'

admin_user.save
admin_user.add_role(:admin)

dummy_user = User.find_or_initialize_by(
  email: 'user@user.com'
)
dummy_user.name = 'John Doe'
dummy_user.password = '123123'
dummy_user.password_confirmation = '123123'

dummy_user.save

FactoryBot.create_list(:offer, 20, :active_without_delimitation, :sampled)
FactoryBot.create_list(:offer, 20, :active_with_delimitation, :sampled)
