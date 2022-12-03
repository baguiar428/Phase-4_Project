class ApplicationController < ActionController::API
    include ActionController::Cookies

    # Test Code for checking that cookies and rails are working
    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    # end
end
