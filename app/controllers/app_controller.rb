class AppController < ApplicationController
  def index
    render react_component: 'App'
  end
end
