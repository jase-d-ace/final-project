class AddReferenceToMonsters < ActiveRecord::Migration[5.0]
  def change
    add_reference :monsters, :users, index:true
  end
end
