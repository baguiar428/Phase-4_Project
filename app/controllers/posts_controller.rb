class PostsController < ApplicationController
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
        params.permit(:description, :flair_id)
    end


end
