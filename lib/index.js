require('ember');

module.exports = Em.Mixin.create({
  tagName: 'li',
  classNameBindings: ['active'],
  active: (function() {
    var content = this.get('content');
    var selected = this.get('parentView.selected');
    var checked = this.get('parentView.checked');
    if (content === selected) {
      return true;
    } else if (checked != null ? checked.contains(content) : undefined) {
      return true;
    }
  }).property('parentView.selected', 'parentView.checked.length'),
  click: function() {
    var content = this.get('content');
    var selected = this.get('parentView.selected');
    var checked = this.get('parentView.checked');
    this.set('parentView.selected', content);
    if (content.indexOf(checked) >= 0) {
      return checked.removeObject(content);
    } else {
      return checked != null ? checked.pushObject(content) : undefined;
    }
  },
  template: Em.Handlebars.compile('<a href="javascript:">{{view.content}}</a>')
});
