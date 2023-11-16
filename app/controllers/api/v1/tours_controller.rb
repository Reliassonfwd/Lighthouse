class Api::V1::ToursController < ApplicationController
  before_action :set_tour, only: [:show, :edit, :update, :destroy]

  def index
    @tours = Tour.all
    render json: @tours
  end

  def show
    render json: @tour
  end

  def new
    @tour = Tour.new
  end

  def edit;end

  def create
    @tour = Tour.new(tour_params)
    if @tour.save
      redirect_to @tour, notice: 'Tour was successfully created.'
    else
      render :new
    end
  end

  def update
    if @tour.update(tour_params)
      redirect_to @tour, notice: 'Tour was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @tour.destroy
    redirect_to tours_url, notice: 'Tour was successfully destroyed.'
  end

  private
    def set_tour
      @tour = Tour.find(params[:id])
    end

    def tour_params
      params.require(:tour).permit(:name, :description, :duration, :price, :availability, :company_id)
    end
end
