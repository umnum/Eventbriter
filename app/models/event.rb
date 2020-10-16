class Event < ApplicationRecord
    validates :name, :location, :event_type, :description, presence: true
    validates :start_date, :end_date, :timezone, :capacity, presence: true
    validates :status, :start_sales_date, presence: true

    belongs_to :organizer,
        primary_key: :id,
        foreign_key: :organizer_id,
        class_name: :User

    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category

    has_one_attached :event_image
end
