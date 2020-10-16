class Api::EventsController < ApplicationController

    def index
        @events = Event.all
    end

    def show
        @event = Event.new(event_params)
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 401
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
