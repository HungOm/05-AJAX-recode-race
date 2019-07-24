class Game < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :winner
      t.string :status
      t.string :elapsed_time
      t.integer :player_one
      t.integer :player_two
      t.timestamps
    end

  end
end
