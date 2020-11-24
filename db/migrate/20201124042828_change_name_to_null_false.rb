class ChangeNameToNullFalse < ActiveRecord::Migration[5.2]
  def change
    remove_column :tickets, :name, :string
  end
end
