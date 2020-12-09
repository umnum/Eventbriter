json.key_format! camelize: :lower
@events.each do |event|
    json.set! event.id do
        json.extract! event, :id, :name, :location, :latitude, :longitude
        json.extract! event, :event_type, :description, :organizer_id, :tickets_sold
        json.extract! event, :category_id, :start_date, :end_date, :timezone
        json.extract! event, :capacity, :status, :is_sold_out, :start_sales_date
        json.photoUrl url_for(event.event_image)
    end
end