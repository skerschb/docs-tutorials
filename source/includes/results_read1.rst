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
          
            {u'_id': ObjectId('5ada5bdeaea650851c715601'),
            u'item': u'canvas',
            u'qty': 101,
            u'size': {u'h': 28, u'uom': u'cm', u'w': 35.5},
            u'tags': [u'cotton']}

     - id: motor
       content: |
         
         .. code-block:: sh

            {'_id': ObjectId('5adb4ee0aea650d05134bf62'), 'item': 'canvas', 'qty': 100, 'tags': ['cotton'], 'size': {'h': 28, 'w': 35.5, 'uom': 'cm'}}

     - id: java-sync
       content: |
         
         .. class: copyable-code
         .. code-block:: sh
         
            { "_id" : { "$oid" : "5ada85ae9b267e9ac4d84105" }, "item" : "canvas", "qty" : 100, "tags" : ["cotton"], "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" } }

     - id: nodejs
       content: |
         .. class:: copyable-code
         .. code-block:: sh
            
            { _id: 5ade4124aac4f92cf89f53aa,
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
           
            { "_id" : ObjectId("5ade1ebd9299811bc223e797"), "item" : "canvas", "qty" : 100, "tags" : ["cotton"], "size" : { "h" : 28, "w" : 35.5, "uom" : "cm" } }