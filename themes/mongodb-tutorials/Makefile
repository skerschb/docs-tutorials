SASS_LINT=./node_modules/.bin/sass-lint
SASS=./node_modules/.bin/sass
CLEANCSS=./node_modules/.bin/cleancss

.PHONY: sass

sass:
	$(SASS_LINT) -v ./src/styles/*.scss
	$(SASS) ./src/styles/app.scss | $(CLEANCSS) --source-map -O2 -o static/css/app.min.css
	$(SASS) ./src/styles/navbar.scss | $(CLEANCSS) --source-map -O2 -o static/css/navbar.min.css
	$(SASS) ./node_modules/font-awesome-scss/scss/font-awesome.scss ./src/styles/feedback.scss | $(CLEANCSS) --source-map -O2 -o static/css/feedback.min.css
