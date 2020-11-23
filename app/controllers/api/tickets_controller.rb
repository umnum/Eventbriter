class Api::TicketsController < ApplicationController
    def index
        @tickets = Ticket.where(user_id: params[:user_id])
        render :index
    end

    def show
        @ticket = Ticket.find_by(id: params[:id])
        if @ticket
            render :show
        else
            render json: {errors: "Ticket does not exist."}, status: 422
        end
    end

    def create
        @ticket = Ticket.new(ticket_params)
        if @ticket.save
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @ticket = Ticket.find_by(id: ticket_params[:id])

        if @ticket.update(ticket_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @ticket = Ticket.find_by(id: params[:id])

        if @ticket.destroy
            render :show
        else
            render json: @ticket.errors.full_messages, status: 422
        end
    end

    private
        def ticket_params
            params.require(:ticket).permit(:id, :price, :currency, :quantity, :user_id, :event_id)
        end
end
