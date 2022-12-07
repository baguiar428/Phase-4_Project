class FlairsController < ApplicationController

rescue_from ActiveRecord::RecordNotFound, with: :request_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :request_invalid_response

before_action :find_flair, only: [:show]
skip_before_action :authorized, only: [:index, :show, :create]

def index
    render json: Flair.all, status: :ok
end

def show
    render json: @flair, status: :ok
end

def create
    flair = Flair.create!(flair_params)
    render json: flair, status: :created
end

private

def find_flair
    @flair = Flair.find(params[:id])
end

def flair_params
    params.permit(:name)
end

def request_not_found_response(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
end 

def request_invalid_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
end

end
