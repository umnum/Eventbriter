class Api::PurchasedTicketsController < ApplicationController
    def index
        @purchased_tickets = PurchasedTicket.where(user_id: params[:user_id])
        render :index
    end

    def show
        @purchased_ticket = PurchasedTicket.find_by(id: params[:id])
        if @purchased_ticket
            render :show
        else
            render json: {errors: "Ticket does not exist."}, status: 422
        end
    end

    def create
        @purchased_ticket = PurchasedTicket.new(purchased_ticket_params)
        if @purchased_ticket.save
            render :show
        else
            render json: @purchased_ticket.errors.full_messages, status: 422
        end
    end

    def destroy
        @purchased_ticket = PurchasedTicket.find_by(id: params[:id])

        if @purchased_ticket.destroy
            #render :show
        else
            render json: @purchased_ticket.errors.full_messages, status: 422
        end
    end

    private
        def purchased_ticket_params
            params.require(:purchased_ticket).permit(:id, :quantity, :user_id, :ticket_id)
        end
end
