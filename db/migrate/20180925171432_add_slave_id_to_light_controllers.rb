class AddSlaveIdToLightControllers < ActiveRecord::Migration[5.1]
  def change
    add_column :light_controllers, :slaveID, :integer
  end
end
