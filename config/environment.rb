# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Configuración de action_mailer.default_url_options
Rails.application.configure do
  config.action_mailer.default_url_options = { host: 'localhost', port: 3001 }
end
