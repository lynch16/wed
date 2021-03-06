require_relative 'boot'

# require 'rails/all'
require "active_model/railtie"
require "active_job/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"
require 'dotenv'
if (ENV["RAILS_ENV"] == 'production')
  Dotenv.load('production.env')
else
  Dotenv.load('development.env')
end

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Wedding
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
