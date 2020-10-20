class FixPostsTable2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :body
    add_column :posts, :body, :text
  end
end
