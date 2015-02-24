require('ember');
var compile = Em.Handlebars.compile;

module.exports = Em.Mixin.create({
  
  classNameBindings: ['active'],

  active: (function() {
    var value = this.getItemValue(this.get('value'));
    var selected = this.getItemValue(this.get('selected'));
    return value === selected;
  }).property('selected', 'value'),

  onSelect: function(e) {
    this.set('selected', this.get('value'));
    Em.run.next(this, function(){
      this.send('onselect');
    });
  }.on('click'),

  getItemValue: function(item){
    if (!item) return;
    var path = this.get('optionValuePath');
    if (!path) return item;
    return Em.get(item, path);
  },

});
