class Ticket < ApplicationRecord
    validates :price, :currency, :quantity, :name, presence: true

    belongs_to :organizer,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event

    has_many :purchased_tickets,
        primary_key: :id,
        foreign_key: :ticket_id,
        class_name: :PurchasedTicket,
        dependent: :destroy
end
