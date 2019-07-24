class Player < ActiveRecord::Base
    belongs_to :game
    validates :name, presence: { strict: true }


end