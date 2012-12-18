ESCAPE = 'includes\|extends\|git\|hg\|components\|node_modules'

JADE = $(shell find -L -name "*.jade" | grep -v $(ESCAPE) )
HTML = $(JADE:.jade=.html)

TEMPLATES_JADE = $(shell find -L -path "*templates/**.jade" | grep -v $(ESCAPE) )
TEMPLATES_HTML = $(TEMPLATES_JADE:.jade=.html)
TEMPLATES = $(TEMPLATES_JADE:.jade=.js)

COFFEE = $(shell find -L -name "*.coffee" | grep -v $(ESCAPE) )
JS = $(COFFEE:.coffee=.js)

build: $(HTML) $(JS) $(TEMPLATES)
	@component build --dev

%.html: %.jade
	jade -P < $< --path $< > $@

%.js: %.html
	component convert $<

%.js: %.coffee
	coffee -bc $<

clean:
	rm -rf $(HTML) $(JS) $(TEMPLATES_HTML) $(TEMPLATES)

.PHONY: clean