class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render :show
        else
            render json: {errors: "Invalid email or password"}, status: 401
        end
    end

    def destroy
        if !logged_in?
            render json: { error: "No logged in user" }, status: 404
        else
            logout!
            render json: {}
        end
    end

end
