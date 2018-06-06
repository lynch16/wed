Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :api do
      resources :contact, only: [:create]
  end
  get "/rehearsal" => redirect("/#/rehearsal")
  root to: 'application#index'
end
