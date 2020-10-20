class RemovePhotoFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :post_photo
  end
end
