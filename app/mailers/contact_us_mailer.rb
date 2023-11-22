class ContactUsMailer < ApplicationMailer
    def contact_email(full_name, email, reason)
      @full_name = full_name
      @email = email
      @reason = reason
  
      mail(to: 'mattcruzfitness@gmail.com', subject: 'MCF Website Form Submission')
    end
  end
