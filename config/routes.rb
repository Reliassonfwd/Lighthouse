  Rails.application.routes.draw do
    devise_for :users, path: '', path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }

  namespace :api do
    namespace :v1 do
      resources :bookings, only: [:index, :show]
      resources :comments, only: [:index, :show]
      resources :companies, only: [:index, :show]
      resources :payment_methods, only: [:index, :show]
      resources :tours, only: [:index, :show]
      resources :users, only: [:index, :show]
      root to: 'api#index'
    end
  end

  namespace :private do
    get 'test', to: 'private#test'
  end
  
end
