class Api::EventsController < ApplicationController

    def index
        @events = Event.all
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end

end
