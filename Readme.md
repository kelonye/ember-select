
![](https://dl.dropbox.com/u/30162278/ember-select.png)

Install
---

    $ component install kelonye/ember-select

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
  itemViewClass: Em.View.extend(require("ember-select"))
});
```

handlebars

```
{{
  collection App.ListView
  contentBinding="controller.content"
  selectedBinding="controller.selected"
}}
```

Example
---

    $ make example

License
---

MIT