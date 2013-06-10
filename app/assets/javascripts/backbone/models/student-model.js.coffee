
window.Student = Backbone.Model.extend
  paramRoot: 'student'

  defaults:
    first_name: ""
    last_name: ""
    info: {}
    photo: "http://placehold.it/350x350"

