Rails.application.routes.draw do

  root to: 'site#index'

  namespace :api do
    namespace :v1 do
      get 'animals/find' => 'animals#find'
    end
  end

  namespace :api do
    namespace :v1 do
      resources :animals, only: [:index, :show, :create, :destroy, :update]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :organizations, only: [:index, :show, :create, :destroy, :update]
    end
  end
end
