StudentListView = Backbone.View.extend({

  tagName: 'tr',

  events: {
    'click .edit': 'edit',
    'click .delete': 'delete',
  },

  initialize: function() {

  /*Listen for new students in the collection,
      and instantiate a view for each*/
    this.listenTo(myStudents, 'add', function(newStudent){
      this.render();
    });

    this.render()
  },

  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.table-container tbody').append(this.el);

    // studentListTemplate is inserted into the empty div
    this.$el.html(studentListViewTemplate(this.model.attributes) );
    
    // remove contents of .grid-container
    $('.grid-container').html('')
    console.log('disappear');

  },

 
  delete: function(){
    /*destroys the model from the database*/
    this.model.destroy()
    /*remove destroys from the view*/
    this.remove();
  },

  edit: function(){
    view = new StudentEditView({
      model: this.model
    })
/*    this.$el.html( studentListEditTemplate(this.model.attributes) )
*/  },

  save: function() {
    myStudents.add({ 
      first_name: this.$el.find('.name-input').val(),
      last_name: this.$el.find('.surname-input').val(),
      email: this.$el.find('.email-input').val(),
      age: this.$el.find('.age-input').val(),
      course: this.$el.find('.course-input').val()
      
    });
    console.log('tryme')
  }

});


