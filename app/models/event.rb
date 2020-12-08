class Event < ApplicationRecord
    validates :name, :location, :event_type, :description, presence: true
    validates :start_date, :end_date, :timezone, :status, presence: true

    #validate :ensure_image

    belongs_to :organizer,
        primary_key: :id,
        foreign_key: :organizer_id,
        class_name: :User

    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category

    has_many :tickets,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Ticket

    has_one_attached :event_image

    def ensure_image
        unless self.event_image.attached?
            errors[:event_image] << "must be attached"
        end
    end
end
