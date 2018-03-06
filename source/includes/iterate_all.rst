.. tabs-drivers::

   tabs:
     - id: shell
       content: |
          
         .. class:: copyable-code
         .. code-block:: sh

            while (myCursor.hasNext()) {
                print(tojson(myCursor.next()));
            }

     - id: compass
       content: |

     - id: python
       content: |
         
         .. class:: copyable-code
         .. code-block:: sh
          
            from pprint import pprint
                
            for inventory in cursor:
                 pprint(inventory)   

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
         Create a method to print the results of the iteration 
         
         .. class: copyable-code
         .. code-block:: sh
         
            Block<Document> printBlock = new Block<Document>() {
                @Override
                public void apply(final Document document) {
                    System.out.println(document.toJson());
                }
            };
         
         
            
         Then query the collection for documents.
         
         .. class: copyable-code
         .. code-block:: sh
       
            findIterable.forEach(printBlock);

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
         .. code-block:: sh
            
            cursor.each(function(err, doc) {
                console.log(doc);
            });

            
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
