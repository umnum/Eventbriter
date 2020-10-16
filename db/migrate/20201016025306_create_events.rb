class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.float :longitude
      t.float :latitude
      t.string :type, null: false
      t.text :description, null: false
      t.integer :organizer_id, null: false
      t.integer :category_id, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.string :timezone, null: false
      t.string :capacity
      t.string :status, null: false
      t.boolean :is_sold_out
      t.datetime :start_sales_date
      t.timestamps
    end

    add_index :events, :organizer_id
  end
end
