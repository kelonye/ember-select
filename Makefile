JADE = $(shell find lib -name "*.jade")
HTML = $(JADE:.jade=.js)

COFFEE 	= $(shell find lib -name "*.coffee") index.coffee
JS 			= $(COFFEE:.coffee=.js)

STYL 	= $(shell find lib -name "*.styl")
CSS 	= $(STYL:.styl=.css)

build: $(HTML) $(CSS) $(JS)

%.css: %.styl
	stylus -u nib $<

%.html: %.jade
	jade -P < $< --path $< > $@

%.js: %.html
	component convert $<

%.js: %.coffee
	coffee -bc $<

clean:
	rm -rf $(HTML) $(CSS) $(JS)

.PHONY: clean