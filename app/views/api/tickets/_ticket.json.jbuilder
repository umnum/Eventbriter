json.key_format! camelize: :lower
json.ticket do
    json.extract! ticket, :id, :price, :currency, :quantity
    json.extract! ticket, :user_id, :event_id
end
json.user do
    json.extract! ticket.purchaser, :id, :username, :email
end
json.event do
    json.extract! ticket.event, :id, :name, :location, :event_type, :status
    json.extract! ticket.event, :start_date, :end_date, :timezone, :capacity, 
    json.extract! ticket.event, :start_sales_date, :organizer_id, :category_id
end