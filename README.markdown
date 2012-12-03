
  ![](https://dl.dropbox.com/u/30162278/ember-select.png)

### Usage

app.coffee

```
App.FiltersController = Em.ArrayController.extend
  selected: 'all'
  content: [
    'all'
    'completed'
    'uncompleted'
  ]

App.FilterItemView = require "ember-select"

App.FiltersView = Em.CollectionView.extend
    tagName: "ul"
    itemViewClass: App.FilterItemView

```

index.handlebars

```
{{
  collection App.FiltersView
  tagName="ul"
  contentBinding="App.router.filtersController.content"
  selectedBinding="App.router.filtersController.selected"
}}
```
