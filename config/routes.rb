Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :appointments, only: [:index, :show, :create, :update, :destroy]
    resource :user, only: [:create]
  end
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
