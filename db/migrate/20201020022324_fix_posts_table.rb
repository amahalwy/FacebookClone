class FixPostsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :owner_id
    add_column :posts, :owner_id, :integer, null: false
  end
end
