class UserPolicy < ApplicationPolicy
  def index?
    true  # Todos pueden ver la lista de usuarios
  end

  def show?
    true  # Todos pueden ver un usuario
  end

  def create?
    user.admin?  # Solo los administradores pueden crear usuarios
  end

  def update?
    user.admin?  # Solo los administradores pueden actualizar usuarios
  end

  def destroy?
    user.admin?  # Solo los administradores pueden eliminar usuarios
  end
end
