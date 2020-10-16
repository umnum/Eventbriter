class Api::EventsController < ApplicationController

    def index
        @events = Event.all
    end

    def show
        @event = Event.find_by(id: params[:id])
        if @event
            render :show
        else
            render json: {errors: "Event does not exist."}, status: 422
        end
    end

    def create
    end

    def update
    end

    def destroy
    end

    private
        def event_params
            params.require(:event).permit(:name, :location, :event_type,
                :description, :start_date, :end_date, :timezone, :capacity,
                :status, :start_sales_date, :organizer_id, :category_id)
        end
end
