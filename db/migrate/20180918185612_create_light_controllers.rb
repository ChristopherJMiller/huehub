class CreateLightControllers < ActiveRecord::Migration[5.1]
  def change
    create_table :light_controllers do |t|
      t.string :name
      t.integer :hueType
      t.integer :hueID

      t.timestamps
    end
  end
end
