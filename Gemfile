source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.2'


gem 'rails', '~> 6.0.3', '>= 6.0.3.4'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'bootsnap', '>= 1.4.2', require: false

gem 'rack-cors'
gem 'dotenv-rails', '~> 2.7.5'
gem 'devise'
gem 'devise-jwt'
gem 'foreman'
gem 'faker'
gem 'will_paginate', '~> 3.1.0'
gem "pundit"
gem "rolify"
gem 'factory_bot_rails'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rubocop'
  gem 'rubocop-rails'
  gem 'pry'
  gem 'better_errors'
  gem 'bullet'
  gem 'rswag'
  gem 'vcr'
  gem 'rspec'
  gem 'webmock'
  gem 'rspec-rails'
  gem 'rspec-json_expectations'
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers', '~> 4.0'
  gem 'shoulda-matchers'
  gem 'database_cleaner'
  gem 'simplecov', '0.16.1'
  gem 'rubocop-rspec', require: false
  gem 'rails-controller-testing'
end

group :development do
  gem 'rails-erd'
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
