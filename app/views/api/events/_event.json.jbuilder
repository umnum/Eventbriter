json.extract! event, :id, :name, :location, :event_type, :description
json.extract! event, :start_date, :end_date, :timezone, :capacity, :status
json.extract! event, :start_sales_date, :organizer_id, :category_id
json.photoUrl url_for(event.event_image)