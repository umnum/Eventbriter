class AddTicketsSoldToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :tickets_sold, :integer
  end
end
