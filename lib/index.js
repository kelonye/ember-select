require('ember');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create({
  classNameBindings: ['active'],
  active: (function() {
    var content = this.get('item');
    var selected = this.get('items.selected');
    return content === selected;
  }).property('items.selected'),
  click: function(e) {
    var content = this.get('item');
    this.set('items.selected', content);
  }
});
