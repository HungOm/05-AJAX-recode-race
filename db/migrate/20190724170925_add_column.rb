class AddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :sessions, :session_token, :string
    add_column :games, :session_id, :string
  end
end
