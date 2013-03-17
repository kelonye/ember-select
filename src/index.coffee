
get = Em.get
set = Em.set

module.exports = Em.Mixin.create

  tagName: 'li'
  classNameBindings: ['active']

  active: (->

    content = get @, 'content'
    selected = get @, 'parentView.selected'
    checked = get @, 'parentView.checked'

    if content is selected
      true
    else if checked?.contains content
      true

  ).property 'parentView.selected', 'parentView.checked.length'

  click: ->
    content = get @, 'content'
    selected = get @, 'parentView.selected'
    checked = get @, 'parentView.checked'
    
    set @, 'parentView.selected', content

    if content in checked?
      checked.removeObject content
    else 
      checked?.pushObject content

  template: Em.Handlebars.compile require('./template')
