class DropUserTypes < ActiveRecord::Migration[6.0]
  def up
    drop_table :user_types
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
