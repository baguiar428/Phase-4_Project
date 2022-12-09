class Post < ApplicationRecord
  belongs_to :flair
  belongs_to :user

  validates :description, presence: true
  validates :flair_id, presence: true
  validates :description, length: { minimum: 3 }
end
