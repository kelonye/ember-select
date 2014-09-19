require('ember');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create({
  
  classNameBindings: ['active'],

  active: (function() {
    var value = this.getItemValue(this.get('value'));
    var selected = this.getItemValue(this.get('selected'));
    return value === selected;
  }).property('selected', 'value'),

  click: function(e) {
    this.set('selected', this.get('value'));
  },

  getItemValue: function(item){
    var path = this.get('optionValuePath');
    if (!path) return item;
    return item.get(path);
  },

});
