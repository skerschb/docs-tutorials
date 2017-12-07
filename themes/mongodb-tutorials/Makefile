SASS_LINT=node_modules/.bin/sass-lint
SASS=node_modules/.bin/sass
CLEANCSS=node_modules/.bin/cleancss
ROLLUP=node_modules/.bin/rollup

CSS_DEPENDENCIES=src/styles/*.scss node_modules/font-awesome-scss/scss/*
JS_DEPENDENCIES=src/*.js rollup.config.js package-lock.json

.PHONY: sass lint-sass js watch clean

all: sass js

sass: lint-sass static/css/app.min.css static/css/navbar.min.css static/css/feedback.min.css

lint-sass:
	$(SASS_LINT) -v src/styles/*.scss

static/css/app.min.css: $(CSS_DEPENDENCIES)
	$(SASS) src/styles/app.scss | $(CLEANCSS) --source-map -O2 -o $@

static/css/navbar.min.css: $(CSS_DEPENDENCIES)
	$(SASS) src/styles/navbar.scss | $(CLEANCSS) --source-map -O2 -o $@

static/css/feedback.min.css: $(CSS_DEPENDENCIES)
	$(SASS) node_modules/font-awesome-scss/scss/font-awesome.scss src/styles/feedback.scss | $(CLEANCSS) --source-map -O2 -o $@

js: static/js/home.min.js static/js/landing.min.js static/js/navbar.min.js static/js/single.min.js

static/js/home.min.js: $(JS_DEPENDENCIES)
	$(ROLLUP) -c rollup.config.js -m -i src/home.js -o $@

static/js/landing.min.js: $(JS_DEPENDENCIES)
	$(ROLLUP) -c rollup.config.js -m -i src/landing.js -o $@

static/js/navbar.min.js: $(JS_DEPENDENCIES)
	$(ROLLUP) -c rollup.config.js -m -i src/navbar.js -o $@

static/js/single.min.js: $(JS_DEPENDENCIES)
	$(ROLLUP) -c rollup.config.js -m -i src/single.js -o $@

watch:
	while true; do find src/ layouts/ -type f | entr -d make || break; done

clean:
	-rm static/js/* static/css/*
