#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./collections
#= require_tree ./views
#= require_tree ./routers

window.StudentRegistry =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}


$(document).ready ->
  student = new AppView()