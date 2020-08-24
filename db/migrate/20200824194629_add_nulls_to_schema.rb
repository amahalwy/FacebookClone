class AddNullsToSchema < ActiveRecord::Migration[5.2]
  def change
    change_column_null :friend_requests, :requestor_id, false
    change_column_null :friend_requests, :receiver_id, false
    change_column_null :friendships, :user_id, false
    change_column_null :friendships, :friend_id, false
    change_column_null :posts, :user_id, false
    change_column_null :users, :session_token, false
  end
end
