class AddTicketsSoldToTickets < ActiveRecord::Migration[5.2]
  def change
    add_column :tickets, :tickets_sold, :integer
  end
end
