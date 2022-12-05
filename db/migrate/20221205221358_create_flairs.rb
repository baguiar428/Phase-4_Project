class CreateFlairs < ActiveRecord::Migration[7.0]
  def change
    create_table :flairs do |t|
      t.string :name

      t.timestamps
    end
  end
end
