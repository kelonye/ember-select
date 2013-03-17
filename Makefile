all: node_modules lib lib/index.js lib/template.js

node_modules: package.json
	@npm install

lib:
	@mkdir -p lib

lib/index.js: src/index.coffee
	coffee -bcj $@ $<

lib/template.html: src/template.jade
	jade -P < $< --path $< > $@

lib/template.js: lib/template.html
	component convert $<

clean:
	@rm -rf lib

.PHONY: clean