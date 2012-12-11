
  ![](https://dl.dropbox.com/u/30162278/ember-select.png)

### Usage

  See [demo](http://kelonye.github.com/ember-select)

  app.coffee

  ```
  App.ListController = Em.ArrayController.extend
    selected: 'Our Services'
    content: [
      'Our Services'
      'About Us'
    ]

  App.FilterItemView = require "ember-select"

  App.ListView = Em.CollectionView.extend
      tagName: "ul"
      itemViewClass: App.FilterItemView

  ```

  index.handlebars

  ```
  {{
    collection App.ListView
    tagName="ul"
    contentBinding="App.router.listController.content"
    selectedBinding="App.router.listController.selected"
  }}
  ```
