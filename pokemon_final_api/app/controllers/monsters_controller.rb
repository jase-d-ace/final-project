class MonstersController < ApplicationController
  before_action :set_pokemon, only: [:show, :destroy]
  def index
    @pokemon = Monster.all
    render json: @pokemon
  end
  def show
  end
  def destroy
    if @pokemon.destroy
      redirect_to
  end
end
