# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


User.destroy_all
Flair.destroy_all
Post.destroy_all

#User Salman has a password of SalmansPassword


User.create(username: "User1", password_digest: BCrypt::Password.create('Password1'))
User.create(username: "User2", password_digest: BCrypt::Password.create('Password2'))
User.create(username: "User3", password_digest: BCrypt::Password.create('Password3'))
User.create(username: "User4", password_digest: BCrypt::Password.create('Password4'))
User.create(username: "User5", password_digest: BCrypt::Password.create('Password5'))
User.create(username: "User6", password_digest: BCrypt::Password.create('Password6'))
User.create(username: "User7", password_digest: BCrypt::Password.create('Password7'))

Flair.create(name: "Code Snippet")
Flair.create(name: "Meme")

# Post.create!(description: Faker::Lorem.sentence, flair_id: 1, user_id: 1)
# Post.create!(description: Faker::Lorem.sentence, flair_id: Flair.all.ids.sample, user_id: User.all.ids.sample)
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))
# Post.create!(description: Faker::Lorem.sentence, flair_id: rand(1..2), user_id: rand(1..7))


10.times do 
      Post.create!(description: Faker::Lorem.sentence, flair_id: Flair.all.ids.sample, user_id: User.all.ids.sample)
end

