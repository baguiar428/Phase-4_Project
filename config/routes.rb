Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  
  #Test route to make sure cookies and rails are working
  # get '/hello', to: 'application#hello_world'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :users, only:[:index, :show, :create]
  resources :posts
  resources :flairs, only:[:index, :show, :create]

  # Route for login session
  post "/login", to: "sessions#create"

  #Route for Auth
  get "/auth", to: "users#show"

  #Route for staying logged in
  get "/me", to: "users#show"

  #Route for logging out
  delete "/logout", to: "sessions#destroy"

  get "users/:id/posts", to: "users#user_posts"

  # Testing
  get "/search/:username", to: "users#search"

end
