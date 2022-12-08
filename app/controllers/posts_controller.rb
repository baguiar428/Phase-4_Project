class PostsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :request_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :request_invalid_response


    before_action :find_post, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: [:index, :show]

    def index 
        render json: Post.all, status: :ok
    end

    def show
        render json: @post, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def update
        @post.update!(post_params)
        render json: @post, status: :accepted
    end

    def destroy
        @post.destroy
        head :no_content
    end

    private

    def find_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.permit(:description, :flair_id, :user_id)
    end

    def request_not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end

    def request_invalid_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
