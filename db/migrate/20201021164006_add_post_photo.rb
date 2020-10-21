class AddPostPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :post_photo, :string
  end
end
