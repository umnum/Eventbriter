class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
      t.float :price, null: false
      t.string :currency, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
  end
end
