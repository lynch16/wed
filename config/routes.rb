correct_url = "http://www.letsbelynches.com"
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  constraints(:host => /letsbelynches.com/) do
    root to: redirect("#{correct_url}")
    get '*/path' => redirect {|p| "#{correct_url}/#{p[:path]}"}
  end
  scope :api do
      resources :contact, only: [:create]
  end
  get "/rehearsal" => redirect("/#/rehearsal")
  root to: 'application#index'
end
