class PostSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at, :updated_at

  has_one :user 
  has_one :flair
end
