# frozen_string_literal: true

if ENV['RAILS_ENV'] == 'test'
  require 'simplecov'
  SimpleCov.start 'rails' do
    puts 'required simplecov'

    add_group 'Services', 'app/services'
    add_group 'Presenters', 'app/presenters'
  end
end
