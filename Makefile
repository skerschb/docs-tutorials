GIT_BRANCH=$(shell git rev-parse --abbrev-ref HEAD)
USER=$(shell whoami)
STAGING_URL="https://docs-mongodborg-staging.corp.mongodb.com"
PRODUCTION_URL="https://docs.mongodb.com"
STAGING_BUCKET=docs-mongodb-org-staging
PRODUCTION_BUCKET=docs-tutorials
PROJECT=docs-tutorials

DRIVERS_PATH=source/driver-examples


# Parse our published-branches configuration file to get the name of
# the current "stable" branch. This is weird and dumb, yes.
STABLE_BRANCH=`grep 'manual' build/docs-tools/data/${PROJECT}-published-branches.yaml | cut -d ':' -f 2 | grep -Eo '[0-9a-z.]+'`

.PHONY: help html publish stage deploy deploy-search-index

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo
	@echo 'Variables'
	@printf "  \033[36m%-18s\033[0m %s\n" 'ARGS' 'Arguments to pass to mut-publish'

html: examples ## Builds this branch's HTML under build/<branch>/html
	giza make html

publish: ## Builds this branch's publishable HTML and other artifacts under build/public
	giza make publish
	if [ ${GIT_BRANCH} = master ]; then mut-redirects config/redirects -o build/public/.htaccess; fi

stage: ## Host online for review
	mut-publish build/${GIT_BRANCH}/html ${STAGING_BUCKET} --prefix=${PROJECT} --stage ${ARGS}
	@echo "Hosted at ${STAGING_URL}/${PROJECT}/${USER}/${GIT_BRANCH}/index.html"

deploy: build/public ## Deploy to the production bucket
	mut-publish build/public ${PRODUCTION_BUCKET} --prefix=${PROJECT} --deploy --redirect-prefix='bi-connector' ${ARGS}

	@echo "Hosted at ${PRODUCTION_URL}/${PROJECT}/index.html"

	$(MAKE) deploy-search-index

deploy-search-index: ## Update the search index for this branch
	@echo "Building search index"
	if [ ${STABLE_BRANCH} = ${GIT_BRANCH} ]; then \
		mut-index upload build/public/${GIT_BRANCH} -o bi-connector-current.json --aliases bi-connector-${GIT_BRANCH} -u ${PRODUCTION_URL}/${PROJECT}/current -g -s; \
	else \
		mut-index upload build/public/${GIT_BRANCH} -o bi-connector-${GIT_BRANCH}.json -u ${PRODUCTION_URL}/${PROJECT}/${GIT_BRANCH} -s; \
	fi
	
examples:
	mkdir -p ${DRIVERS_PATH}
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-python-driver/master/test/test_examples.py -o ${DRIVERS_PATH}/test_examples.py
	curl -SfL https://raw.githubusercontent.com/mongodb/motor/master/test/asyncio_tests/test_examples.py -o ${DRIVERS_PATH}/test_examples_motor.py
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-perl-driver/master/t/examples/driver-examples.t -o ${DRIVERS_PATH}/driver-examples.t
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-php-library/master/tests/DocumentationExamplesTest.php -o ${DRIVERS_PATH}/DocumentationExamplesTest.php
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-java-driver/master/driver-sync/src/examples/documentation/DocumentationSamples.java -o ${DRIVERS_PATH}/DocumentationSamples.java
	curl -SfL https://raw.githubusercontent.com/mongodb/node-mongodb-native/2.2/test/functional/examples_tests.js -o ${DRIVERS_PATH}/examples_tests.js
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-ruby-driver/master/spec/mongo/shell_examples_spec.rb -o ${DRIVERS_PATH}/shell_examples_spec.rb
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-ruby-driver/master/spec/mongo/change_stream_examples_spec.rb -o ${DRIVERS_PATH}/change_stream_examples_spec.rb
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-scala-driver/master/driver/src/it/scala/org/mongodb/scala/DocumentationExampleSpec.scala -o ${DRIVERS_PATH}/DocumentationExampleSpec.scala
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-csharp-driver/master/tests/MongoDB.Driver.Examples/DocumentationExamples.cs -o ${DRIVERS_PATH}/DocumentationExamples.cs
	curl -SfL https://raw.githubusercontent.com/mongodb/node-mongodb-native/3.0.0/test/functional/operation_changestream_example_tests.js -o ${DRIVERS_PATH}/ChangeStreamNodeExamples.js
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-csharp-driver/master/tests/MongoDB.Driver.Examples/ChangeStreamExamples.cs -o ${DRIVERS_PATH}/ChangeStreamExamples.cs
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-c-driver/master/tests/test-mongoc-sample-commands.c -o ${DRIVERS_PATH}/test-mongoc-sample-commands.c 
	curl -SfL https://raw.githubusercontent.com/mongodb/mongo-java-driver-reactivestreams/master/examples/documentation/src/DocumentationSamples.java -o ${DRIVERS_PATH}/AsyncDocumentationSamples.java
	curl -SfL https://raw.githubusercontent.com/skerschb/docs-samples/java/src/main/java/guides/examples/crud/Connect.java -o ${DRIVERS_PATH}/JavaConnectDocumentationSamples.java
	curl -SfL https://raw.githubusercontent.com/skerschb/docs-samples/python/src/connect.py -o ${DRIVERS_PATH}/connect.py
	curl -SfL https://raw.githubusercontent.com/skerschb/docs-samples/node/src/connect/connect.js -o ${DRIVERS_PATH}/connect.js
