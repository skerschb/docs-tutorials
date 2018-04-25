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

     - id: motor
       content: |
         
         .. code-block:: sh
            {'_id': ObjectId('5adb5140aea650d18e402f17'),
             'item': 'journal',
             'qty': 25,
             'size': {'h': 14, 'uom': 'cm', 'w': 21},
             'status': 'A'}

     - id: java-sync
       content: |
         
         .. code-block:: sh
            
            { "_id" : { "$oid" : "5ada88359b267e9b5bd393b9" }, "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }

     - id: nodejs
       content: |
         .. class:: copyable-code
         .. code-block:: sh
            
            { _id: 5ade424c84c9ca2d56d31697,
              item: 'journal',
              qty: 25,
              size: { h: 14, w: 21, uom: 'cm' },
              status: 'A' }

            
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
           { "_id" : ObjectId("5ade26de3d3a851fcd9c95da"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }