json.key_format! camelize: :lower
json.purchased_ticket do
    json.extract! purchased_ticket, :id, :quantity, :user_id, :ticket_id
end
json.ticket do
    json.extract! purchased_ticket.ticket_type, :id, :price, :currency, :quantity
    json.extract! purchased_ticket.ticket_type, :name, :event_id, :tickets_sold
end