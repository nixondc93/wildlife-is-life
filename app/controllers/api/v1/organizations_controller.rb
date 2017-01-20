class Api::V1::OrganizationsController < Api::V1::BaseController

  def index
    respond_with Organization.all
  end

  def show
    respond_with Organization.find(params[:id])
  end

  def create
    respond_with :api, :v1, Organization.create(organization_params)
  end

  def destroy
   respond_with Organization.destroy(params[:id])
 end

 def update
   organization = Organization.find(params["id"])
   organization.update_attributes(organization_params)
   respond_with organization,   json: organization
 end

private

 def organization_params
   params.require(:organization).permit(:id)
 end
end
