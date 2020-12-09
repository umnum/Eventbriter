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
        @event = Event.new(event_params)
        if @event.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find_by(id: params[:id])

        if @event.update(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find_by(id: params[:id])

        if @event.destroy
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    private
        def event_params
            params.require(:event).permit(:name, :location, :event_type, :is_sold_out,
                :description, :start_date, :end_date, :timezone, :capacity,
                :status, :start_sales_date, :organizer_id, :category_id, :event_image)
        end
end
