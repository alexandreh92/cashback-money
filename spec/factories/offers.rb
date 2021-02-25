FactoryBot.define do
  factory :offer do
    sequence(:advertiser_name) { |n| "Offer #{n}" }
    url { Faker::Internet.url }
    description { Faker::Lorem.paragraph_by_chars(number: 128, supplemental: false) }
    starts_at { Time.zone.now }

    trait :waiting do
      enabled { true }
      starts_at { Time.zone.now + 2.minutes }
      ends_at { Time.zone.now + 5.minutes }
    end

    trait :active_with_delimitation do
      enabled { true }
      starts_at { Time.zone.now - 1.minutes }
      ends_at { Time.zone.now + 5.minutes }
    end

    trait :active_without_delimitation do
      enabled { true }
      starts_at { Time.zone.now - 1.minutes }
      ends_at { nil }
    end

    trait :ended do
      enabled { true }
      starts_at { Time.zone.now.at_beginning_of_day }
      ends_at { Time.zone.now.at_beginning_of_day + 5.minutes }
    end

    trait :disabled do
      enabled { false }
    end

    trait :premium do
      premium { true }
    end

    trait :sampled do
      enabled { [true, false].sample }
      premium { [true, false].sample }
    end
  end
end
