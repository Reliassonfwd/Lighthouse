class PostPolicy < ApplicationPolicy
  def index?
    true  # Todos pueden ver la lista de posts
  end

  def show?
    true  # Todos pueden ver un post individual
  end

  def create?
    user.admin?  # Solo el admin puede crear nuevos posts
  end

  def update?
    user.admin?  # Solo el admin puede actualizar posts
  end

  def destroy?
    user.admin?  # Solo el admin puede eliminar posts
  end
end