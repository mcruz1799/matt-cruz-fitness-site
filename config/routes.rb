Rails.application.routes.draw do
  root 'home#home'
  # get 'about', to: 'static_pages#about'
  # get 'static_pages/blog'
  # get 'static_pages/testimonials'
  post 'contact_us/create', to: 'contact_us#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
