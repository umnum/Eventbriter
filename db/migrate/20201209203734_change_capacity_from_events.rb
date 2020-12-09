class ChangeCapacityFromEvents < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :capacity, 'integer USING CAST(capacity AS integer)'
  end
end
