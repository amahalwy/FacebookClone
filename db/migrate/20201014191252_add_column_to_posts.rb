class AddColumnToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :owner_id, :string
    change_column_null :posts, :owner_id, false
  end
end
