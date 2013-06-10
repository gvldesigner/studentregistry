class StudentsController < ApplicationController

    def index
      @students = Student.all
      render :json => @students
    end

    def show
      @student = Student.find(params[:id])
      render :json => @student
    end

    def create
      @student = Student.new(params[:student])
      if @student.save
        render :json => @student
      end
   end

   def destroy
      @student = Student.find(params[:id])
      if @student.destroy
        render :text => "Success"
      end
   end

   def update
    @student = Student.find(params[:id])
    @student[:first_name] = params[:student][:first_name]
    @student[:last_name] = params[:student][:last_name]
    @student[:info] = params[:student][:info]
    
    if @student.save
      render :json => @student
    end
   end

end
