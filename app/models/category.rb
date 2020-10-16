class Category < ApplicationRecord
    validates :name, presence: true, uniqueness: true
end
