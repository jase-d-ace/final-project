class AddBallsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :pokeballs, :integer, :default => 0
    add_column :users, :greatballs, :integer, :default => 0
    add_column :users, :ultraballs, :integer, :default => 0
    add_column :users, :masterballs, :integer, :default => 0
  end
end
