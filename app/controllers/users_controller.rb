class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :request_invalid_response
  rescue_from ActiveRecord::RecordNotFound, with: :request_not_found_response

    skip_before_action :authorized, only: [:index, :create, :show, :user_posts, :search]

    def index
      render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
         render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def search
      user = User.find_by(username: params[:username])
      render json: user.posts, status: :ok
    end

    def user_posts 
      user = User.find(params[:id])
      render json: user.posts, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def request_not_found_response(exception)
      render json: {error: "#{exception.model} not found"}, status: :not_found
    end 

    def request_invalid_response(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
