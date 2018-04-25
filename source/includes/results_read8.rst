.. tabs-drivers::

   tabs:
     - id: shell
       content: |

         By default, the shell will only show the first set of documents
         and return a cursor. This is adequate when the result set only
         contains a few documents.

         If your result set is larger, to see *all* of the results of
         your query, iterate the cursor.
         
         .. code-block:: sh

            while (myCursor.hasNext()) {
                print(tojson(myCursor.next()));
            }

         .. note:: You can also manually iterate through the results by
            typing ``it`` when prompted by the shell.

     - id: compass
       content: |

         You will see a list of all of the documents that match your
         criteria in the query window.

     - id: python
       content: |
         
         .. code-block:: sh
            {u'_id': ObjectId('5ada625baea65088bf0aa131'),
             u'item': u'journal',
             u'qty': 25,
             u'size': {u'h': 14, u'uom': u'cm', u'w': 21},
             u'status': u'A'}
            {u'_id': ObjectId('5ada625baea65088bf0aa135'),
             u'item': u'postcard',
             u'qty': 45,
             u'size': {u'h': 10, u'uom': u'cm', u'w': 15.25},
             u'status': u'A'}

     - id: motor
       content: |
         
         .. code-block:: sh

            async for doc in cursor:
                print doc

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

     - id: nodejs
       content: |
         .. class:: copyable-code
         .. code-block:: sh
            
            cursor.each(function(err, doc) {
                console.log(doc);
            });

            
     - id: php
       content: |
         .. code-block:: sh
            
            foreach ( $cursor as $id => $value )
            {
                var_dump( $value );
            }

     - id: perl
       content: |
         .. code-block:: sh
         
            while (my $doc = $cursor->next) {
                print $doc ."\n";
            } 

     - id: ruby
       content: |
         .. code-block:: sh
            
            cursor.each do |doc|
               puts doc
            end

     - id: scala
       content: |
         .. code-block:: sh
            
            collection.find().subscribe((doc: Document) => println(doc.toJson()))
           

     - id: csharp
       content: |
         .. code-block:: sh
           
            foreach (var doc in result) {
                Console.WriteLine(doc.toJson());
            }