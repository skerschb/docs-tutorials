.. tabs-drivers::

   tabs:
     - id: shell
       content: |
         .. class:: copyable-code
         .. code-block:: javascript

            db.inventory.find( {} )

     - id: compass
       content: |

         .. figure:: /images/compass-select-all.png

     - id: python
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/test_examples.py
            :language: python
            :dedent: 8
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: motor
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/test_examples_motor.py
            :language: python
            :dedent: 8
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: java-sync
       content: |
         First, bind a collection object to the collection you wish to query.
         
         .. class: copyable-code
         .. code-block:: sh
         
            private final MongoCollection<Document> collection = database.getCollection("inventory");
          
         Then query the collection for all documents by passing an empty document
         to the find() method.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/DocumentationSamples.java
            :language: java
            :dedent: 8
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: java-async
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/AsyncDocumentationSamples.java
            :language: java
            :dedent: 8
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: nodejs
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/examples_tests.js
            :language: javascript
            :dedent: 8
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: php
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/DocumentationExamplesTest.php
            :language: php
            :dedent: 8
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: perl
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/driver-examples.t
            :language: perl
            :dedent: 4
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: ruby
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/shell_examples_spec.rb
            :language: ruby
            :dedent: 8
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: scala
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/DocumentationExampleSpec.scala
            :language: scala
            :dedent: 4
            :start-after: Start Example 7
            :end-before: End Example 7

     - id: csharp
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/DocumentationExamples.cs
            :language: c#
            :dedent: 12
            :start-after: Start Example 7
            :end-before: End Example 7
