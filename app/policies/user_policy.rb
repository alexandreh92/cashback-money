class UserPolicy < ApplicationPolicy
  def backoffice?
    user.has_role?(:admin)
  end
end
