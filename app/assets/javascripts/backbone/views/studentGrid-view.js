StudentGridView = Backbone.View.extend({

  tagName: 'li',

  initialize: function() {

    // rendering the .grid-container below

    this.render()
  },

  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el)
    $('.grid-container').append(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(studentGridTemplate(this.model.attributes) );
    
  },
// hiding viewTable list when you click on gridView
  viewTable: function () {
    // remove contents of .grid-container
    $('.table-container tbody').html('')
    $('.table-container').html('')

    // loop through each student in collection,
    // and each into the StudentListView
    myStudents.each(function(student){
      new StudentListView({
        model: student
      });
    })
  } 

});


