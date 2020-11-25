class PurchasedTicket < ApplicationRecord
    validates :quantity, presence: true

    belongs_to :purchaser,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :ticket_type,
        primary_key: :id,
        foreign_key: :ticket_id,
        class_name: :Ticket
end