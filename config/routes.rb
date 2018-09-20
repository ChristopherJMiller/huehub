Rails.application.routes.draw do
  scope '/api' do
    resources :light_controller, only: [:index]
  end

  root to:'app#index'
  match '*path', to: 'app#index', via: [:get]
end
