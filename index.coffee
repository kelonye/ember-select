
module.exports = Em.View.extend
    
  tagName: "li"
  classNameBindings: ["active"]

  template: Em.Handlebars.compile(
    """<a href="javascript:">{{view.content}}</a>"""
  )

  active: (->
    if @get("parentView.selected") is @get("content")
      true
  ).property "parentView.selected"

  click: ->
    @set "parentView.selected", @get("content")
