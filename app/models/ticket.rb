class Ticket < ApplicationRecord
    validates :price, :currency, :quantity, :name, presence: true

    belongs_to :event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
