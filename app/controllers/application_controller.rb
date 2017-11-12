class ApplicationController < ActionController::Base
  protect_from_forgery
  after_filter :set_csrf_cookie_for_ng

  def index
    render 'layouts/application'
  end
  private
    def set_csrf_cookie_for_ng
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
    end
    # In Rails 4.2 and above
    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end
end
