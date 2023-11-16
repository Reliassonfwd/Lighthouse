    class RenameDecimalInComments < ActiveRecord::Migration[7.0]
      def change
        rename_column :comments, :decimal, :rating
      end
    end
    
