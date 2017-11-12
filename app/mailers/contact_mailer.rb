class ContactMailer < ApplicationMailer
    default from: 'contact@letsbelynches.com'
    def contact(email, name, message, phone)
      @email = email
      @name = name
      @message = message
      @phone = phone
      mail to: [ENV["WILL_EMAIL"], ENV["JENNA_EMAIL"]], subject: "New Question from LetsBeLynches!"
    end
end
