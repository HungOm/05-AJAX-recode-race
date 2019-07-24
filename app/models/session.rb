class Session < ActiveRecord::Base
    has_many :games



    def self.generate_session_id
        base58 ="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".scan(/./)
        return base58.sample(4).join("")
    end

    
end