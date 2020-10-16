Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  resources :categories, only: [:create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :events, only: [:index, :show, :create, :update, :destroy]
    resources :categories, only: [:index, :show]
  end
end
