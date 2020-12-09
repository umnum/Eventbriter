json.key_format! camelize: :lower
json.purchased_tickets do
    @purchased_tickets.each do |purchased_ticket|
        json.set! purchased_ticket.id do
            json.extract! purchased_ticket, :id, :quantity, :user_id, :ticket_id
        end
    end
end
json.tickets do
    @purchased_tickets.each do |purchased_ticket|
        json.set! purchased_ticket.ticket_id do
            json.extract! purchased_ticket.ticket_type, :id, :price, :currency, :quantity
            json.extract! purchased_ticket.ticket_type, :name, :event_id, :tickets_sold
        end
    end
end