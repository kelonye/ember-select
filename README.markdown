
![](https://dl.dropbox.com/u/30162278/ember-select.png)

Usage
-------

See [demo](http://kelonye.github.com/#/pages/select)

javascript

```
App.ListController = Em.ArrayController.extend({
  selected: "ember",
  content: [
      "ember",
      "redis",
      "express",
      "mocha"
  ]
});
App.ListView = Em.CollectionView.extend({
  tagName: "ul",
  itemViewClass: require("ember-select").extend()
});
```

handlebars

```
{{
  collection App.ListView
  tagName="ul"
  contentBinding="App.router.listController.content"
  selectedBinding="App.router.listController.selected"
}}
```

License
-------------

MIT