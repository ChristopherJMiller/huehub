class LightController < ApplicationRecord
  enum hueType: { light_mimic: 0, light_schedule: 1 }
end
