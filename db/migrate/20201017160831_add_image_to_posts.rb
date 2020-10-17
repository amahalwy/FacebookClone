class AddImageToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :post_image, :string

    create_table :likes do |t|
      t.integer :post_id
      t.integer :owner_id
      t.timestamps
    end
  end

  def up
  change_column :posts, :owner_id, :integer
  end

  def down
    change_column :posts, :owner_id, :string
  end
end
