class MonstersController < ApplicationController
  before_action :set_pokemon, only: [:show, :destroy]
  def index
    @pokemon = Monster.all
    render json: @pokemon
  end
  def show
    render json: @pokemon
  end
  def create
    @pokemon = Monster.new
    if @pokemon.create(poke_params)
      redirect_to root_path
    else
      flash[:alert] = 'Create Error!'
    end
  end
  def destroy
    if @pokemon.destroy
      redirect_to root_path
    else
      flash[:alert] = 'Delete Error!'
    end
  end
  private
  def set_pokemon
    @pokemon = Monster.find(params[:id])
  end
  def poke_params
    params.require(:monster).permit(:name, :sprite, :user_id)
  end
end
