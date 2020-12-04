json.key_format! camelize: :lower
json.ticket do
    json.extract! ticket, :id, :price, :currency, :quantity
    json.extract! ticket, :name, :event_id
end
json.event do
    json.extract! ticket.event, :id, :name, :location, :event_type, :status
    json.extract! ticket.event, :start_date, :end_date, :timezone, :capacity
    json.extract! ticket.event, :start_sales_date, :organizer_id, :category_id
end
json.purchased_tickets do
    ticket.purchased_tickets.each do |purchased_ticket|
        json.set! purchased_ticket.id do
            json.extract! purchased_ticket, :id, :quantity, :user_id, :ticket_id
        end
    end
end