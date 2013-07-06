
![](https://dl.dropbox.com/u/30162278/ember-select.png)

Install
---

```component install kelonye/ember-select```

Usage
---

```javascript
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

Example
---

    $ make example

License
---

MIT