class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render :show
        else
            render json: {errors: "Invalid username or password"}, status: 401
        end
    end

end
