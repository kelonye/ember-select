index.js: index.coffee
	coffee -bc $<

clean:
	rm -rf index.js

.PHONY: clean