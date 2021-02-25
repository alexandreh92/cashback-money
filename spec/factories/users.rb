FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "User #{n}" }
    email { Faker::Internet.email }
    password { '123456' }
    password_confirmation { '123456' }

    trait :admin do
      after(:create) do |user, _evaluator|
        user.add_role(:admin)
      end
    end
  end
end
