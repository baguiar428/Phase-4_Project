class ApplicationController < ActionController::API
    include ActionController::Cookies

before_action :authorized


rescue_from ActiveRecord::RecordNotFound, with: :request_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :request_invalid_response

def authorized
    return render json:{error: "Not Authorized"}, status: :unauthorized 
    unless session.include? :user_id
end

  def request_not_found_response(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def request_invalid_response(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end

    

    # Test Code for checking that cookies and rails are working
    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end
end
