Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 

    resources :users, only: [:index, :create, :show] do
      resources :friend_requests, only: [:index]
      resources :friendships, only: [:index]
      resources :posts, only: [:index]
    end
    resources :posts, only: [:create, :update, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create]
    resources :friend_requests, only: [:create, :destroy]
    resources :friendships, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end