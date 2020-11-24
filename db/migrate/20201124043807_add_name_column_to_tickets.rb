class AddNameColumnToTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :name, :string, null: false, default: ""
  end
end
