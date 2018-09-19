Rails.application.routes.draw do
  resources :light_controller, only: [:index]

  root to: 'app#index'
end
