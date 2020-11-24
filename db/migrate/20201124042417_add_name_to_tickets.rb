class AddNameToTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :name, :string
  end
end
