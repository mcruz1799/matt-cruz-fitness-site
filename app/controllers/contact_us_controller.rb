class ContactUsController < ApplicationController

    def create
        full_name = params[:full_name]
        email = params[:email]
        reason = params[:reason]
    
        ContactUsMailer.contact_email(full_name, email, reason).deliver_now
    
        redirect_to root_path(anchor: 'contact'), notice: 'Thank you for your message!'
    end
end
