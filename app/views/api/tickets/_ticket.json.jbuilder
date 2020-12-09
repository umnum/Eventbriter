json.key_format! camelize: :lower
json.ticket do
    json.extract! ticket, :id, :price, :currency, :quantity
    json.extract! ticket, :name, :event_id, :tickets_sold
end
json.event do
    json.extract! ticket.event, :id, :name, :location, :event_type, :status
    json.extract! ticket.event, :start_date, :end_date, :timezone, :capacity
    json.extract! ticket.event, :start_sales_date, :organizer_id, :category_id
    json.extract! ticket.event, :description, :event_image, :is_sold_out, :tickets_sold
end