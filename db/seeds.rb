# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.destroy_all
Post.destroy_all

User.create(username: "Bruno", password_digest: BCrypt::Password.create('isAwesome'))


# 5.times do 
#     Post.create()
# end

