Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 

    resources :users, only: [:index, :create, :show, :update] do
      resources :friend_requests, only: [:index]
      resources :friendships, only: [:index]
      resources :posts, only: [:index]
    end
    resources :posts, only: [:show, :create, :update, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :destroy]
    resources :friend_requests, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end