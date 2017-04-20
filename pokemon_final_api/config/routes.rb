Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: redirect("http://localhost:8080/")

  get "/monsters", to: "monsters#index"
  get "/monsters/:id", to: "monsters#show"
  post "/monsters", to: "monsters#create"
  delete "/monsters/:id", to: "monsters#destroy"
end
