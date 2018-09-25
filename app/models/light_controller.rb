class LightController < ApplicationRecord
  enum hueType: { light_mimic: 0, light_pattern: 1 }
end
