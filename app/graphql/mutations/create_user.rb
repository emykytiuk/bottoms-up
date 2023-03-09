module Mutations
  class CreateUser < BaseMutation
    argument :name, String
    argument :email, String
    argument :password, String

    field :user, Types::UserType
    field :errors, Types::ErrorType

    def resolve (name:, email:, password:)
      puts name
      user =
        User.new(
        name: name,
        email: email,
        password: password,
        password_confirmation: password
      )

      if user.save
        { user: user, errors: nil }
      else
        { user: nil, errors: { messages: user.errors.full_messages} }
      end
    end
  end
end