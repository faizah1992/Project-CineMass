class User < ApplicationRecord
    has_many :comments
    has_many :movies, through: :comments
    has_many :watchlists
    has_many :movies,through: :watchlists
    # change user password to digest and validate user login details
    has_secure_password()
    validates :username, presence: true, uniqueness: true
    #validates :password, presence: true
end
