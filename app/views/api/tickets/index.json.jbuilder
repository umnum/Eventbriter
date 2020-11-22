json.key_format! camelize: :lower
@tickets.each do |ticket|
    json.set! ticket.id do
        json.extract! ticket, :id, :price, :currency, :quantity
        json.extract! ticket, :user_id, :event_id
    end
end