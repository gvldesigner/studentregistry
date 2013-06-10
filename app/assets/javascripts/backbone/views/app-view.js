AppView = Backbone.View.extend({

  events:{
    'click .add': 'add',
    'click .view-table': 'viewTable',
    'click .view-grid': 'viewGrid',
  },

  initialize: function() {
    /*create the collection of students*/
    myStudents = new Students();
    

    myStudents.fetch()
    
    /*myStudents.add([
      {first_name: 'Andrew', last_name: 'Mcintee', age: '19', email: 'me@andrewmcintee.com', course: 'Front-end Engineering', image: '/assets/50X50.jpg'},
      {first_name: 'Daniel', last_name: 'Jeffords', age: '29', email: 'daniel.jeffords@gmail.com', course: 'Front-end Engineering', image: '/assets/50X50.jpg'},
      {first_name: 'Jennifer', last_name: 'Ngetich', age: '25', email: 'mjennifer.ngetich@gmail.com', course: 'Front-end Engineering', image: '/assets/50X50.jpg'}
    ]);*/

    /*store references to underscore templates*/
    appViewTemplate = JST['backbone/templates/appView']

    studentListEditTemplate = JST['backbone/templates/student_list_edit_template']

    studentGridTemplate = JST['backbone/templates/student_grid_template']
    
    studentListViewTemplate = JST['backbone/templates/student_list_view_template']
    
    studentNewTemplate = JST['backbone/templates/student_new_template']
    

    /*Listen for new students in the collection,
      and instantiate a view for each*/
    this.listenTo(myStudents, 'change', function(newStudent){
      this.viewTable();
    });

    this.render()
  },

 
  
// Clearing page new student view
// hiding tableview
  add:function (){
    $('.table-container').hide()
    $('.grid-container').html('')
    new StudentNewView()
  },
  
  render: function () {
    //Render the StudentView injecting empty div into the container = (this.el)
   // the view will always remember (this.el) default display all the time
    $('.btn-container').html(this.el);
    // studentListTemplate is inserted into the empty div
    this.$el.html(appViewTemplate() );
    
  },

  viewGrid: function () {
    // remove contents of .grid-container
    $('.grid-container').html('')
    $('.table-container').hide()

    // loop through each student in collection,
    // and each into the StudentGridView
    myStudents.each(function(student){
      new StudentGridView({
        model: student
      });
    })
  },

  viewTable: function () {
    // remove contents of .table-container tbody
    // show the table container
    $('.table-container tbody').html('')
    $('.table-container').show()

    // loop through each student in collection,
    // and each into the StudentListView
    myStudents.each(function(student){
      new StudentListView({
        model: student
      });
    })
  }, 

});






