class ContactController < ApplicationController
    def create
        ContactMailer.contact(params[:email], params[:name], params[:message], params[:phone]).deliver_now
        render json: {status: 200}
    end
    private
    def contact_params
      params.require(:contact).permit(:name, :message, :email, :phone)
    end
end
