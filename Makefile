COFFEE = $(shell find -name "*.coffee")
JS = $(COFFEE:.coffee=.js)

build:	$(JS)

%.js: %.coffee
	coffee -bc $^

clean:
	rm -rf $(JS)

.PHONY: clean