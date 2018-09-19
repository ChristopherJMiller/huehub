class LightController < ApplicationRecord
  enum hueType: { light: 0, lightMimic: 1, lightSchedule: 2, lightGroup: 3 }
end
