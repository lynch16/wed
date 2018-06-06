correct_url = "http://www.letsbelynches.com"
Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  constraints(host: /^(?!www\.)/i) do
#     get '(*any)' => redirect { |params, request|
#       URI.parse(request.url).tap { |uri| uri.host = "www.#{uri.host}" }.to_s
#     }
    match "/(*path)" => redirect {|params, request| 
      URI.parse(request.url).tap { |uri| uri.host = "www.#{uri.host}/#{params[:path]}" }.to_s
    },  via: [:get, :post]
  end
  scope :api do
      resources :contact, only: [:create]
  end
  get "/rehearsal" => redirect("/#/rehearsal")
  root to: 'application#index'
end
