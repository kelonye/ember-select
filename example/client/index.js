var select = require('ember-select');

Em.TEMPLATES.index = Em.HTMLBars.template(require('./template'));

App = Em.Application.create();

App.MenuItemComponent = Em.Component.extend(select, {
  tagName: 'li',
  optionSelectPath: 'name',
  actions: {
    onselect: function(){
      console.log('on select');
    },
  },
});


App.IndexRoute = Em.Route.extend({
  model: function(){
    return [
      'TJ',
      'Guille',
      'N8',
      'Mojombo',
      'Izs',
      'Substack'
    ].map(function(name){
      return {
        name: name
      }
    });
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('selected', model[2]);
  }
});
