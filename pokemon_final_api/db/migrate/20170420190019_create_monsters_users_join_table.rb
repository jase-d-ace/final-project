class CreateMonstersUsersJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_table :monsters_users, id: false do |t|
      t.integer :monster_id
      t.integer :user_id
  end
      add_index :monsters_users, :user_id
    add_index :monsters_users, :monster_id
  end
end
