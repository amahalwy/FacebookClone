class ChangePostImageColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :post_image
    add_column :posts, :post_photo, :string
  end
end
