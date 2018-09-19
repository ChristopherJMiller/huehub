class LightControllerController < ApplicationController
  respond_to :json

  def index
    @light_controllers = LightController.all
    respond_with @light_controllers
  end
end
