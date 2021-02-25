return unless ENV['RAILS_ENV'] == 'test' || ENV['RAILS_ENV'] == 'development'

require 'simplecov'
require 'coveralls'

SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter.new(
  [SimpleCov::Formatter::HTMLFormatter,
   Coveralls::SimpleCov::Formatter,
   SimpleCov::Formatter::SimpleFormatter]
)

SimpleCov.start 'rails' do
  puts 'required simplecov'

  add_group 'Services', 'app/services'
  add_group 'Presenters', 'app/presenters'

  add_filter %w[channels jobs mailers]
end
