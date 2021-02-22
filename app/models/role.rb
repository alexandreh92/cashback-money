class Role < ApplicationRecord
  # Enums
  ROLES = {
    user: 'Usuário',
    admin: 'Administrador'
  }.freeze

  # Methods
  def self.availables
    ROLES.map do |k, _v|
      k.to_s
    end
  end

  # Associations
  has_and_belongs_to_many :users, join_table: :users_roles

  belongs_to :resource,
             polymorphic: true,
             optional: true

  # Validations
  validates :resource_type,
            inclusion: { in: Rolify.resource_types },
            allow_nil: true

  validates :name, inclusion: { in: Role.availables }

  scopify
end
