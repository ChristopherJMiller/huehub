class LightControllerController < ApplicationController
  respond_to :json

  def index
    @light_controllers = LightController.all
    respond_with @light_controllers
  end

  def create
    if @light_controller.save(create_params)
      head :created
    else
      render json: { error: @light_controller.errors }, status: :bad_request
    end
  end

  def update
    if @light_controller.update(update_params)
      head :ok
    else
      render json: { error: @light_controller.errors }, status: :bad_request
    end
  end

  def destroy
    @light_controller.destroy
    head :ok
  end

  private

  def create_params
    params.require(:light_contoller).permit(:name, :hueType, :hueID)
  end

  def update_params
    params.require(:light_contoller).permit(:name, :hueType, :hueID)
  end
end
