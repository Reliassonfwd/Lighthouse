class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|

      t.string :name
      t.string :description
      t.string :address
      t.string :contact_info

      t.timestamps
    end
  end
end
