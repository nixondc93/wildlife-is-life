class Api::V1::AnimalsController < Api::V1::BaseController

  def index
    respond_with Animal.paginate(:page => params[:page])
  end

  def show
    respond_with Animal.find(params[:id])
  end

  def create
    respond_with :api, :v1, Animal.create(animal_params)
  end

  def destroy
   respond_with Animal.destroy(params[:id])
  end

  def update
    animal = Animal.find(params["id"])
    animal.update_attributes(animal_params)
    respond_with animal,   json: animal
  end

#this is good!
  def find
    result = Animal.search do
      fulltext params[:species]["name"] do
        fields(:taxonname, :scientific_name)
      end
    end
    respond_with result.results, json: result.results
  end

private

  def animal_params
    params.require(:animal).permit()
  end

end
