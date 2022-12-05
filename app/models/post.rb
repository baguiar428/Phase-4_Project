class Post < ApplicationRecord
  belongs_to :flair
  belongs_to :user
end
