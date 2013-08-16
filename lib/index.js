require('ember');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create({
  classNameBindings: ['active'],
  active: (function() {
    var content = this.get('content');
    var selected = this.get('controller.selected');
    return content === selected;
  }).property('controller.selected'),
  click: function(e) {
    var content = this.get('content');
    this.set('controller.selected', content);
  }
});
