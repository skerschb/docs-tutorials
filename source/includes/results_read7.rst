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
            {u'_id': ObjectId('5ada8c109b267e9d1ade9038'),
             u'item': u'journal',
             u'qty': 25,
             u'size': {u'h': 14, u'uom': u'cm', u'w': 21},
             u'status': u'A'}
            {u'_id': ObjectId('5ada8c109b267e9d1ade903c'),
             u'item': u'postcard',
             u'qty': 45,
             u'size': {u'h': 10, u'uom': u'cm', u'w': 15.25},
             u'status': u'A'}

     - id: motor
       content: |
         
         .. code-block:: sh

            {'_id': ObjectId('5ade276281031b2005294976'),
             'item': 'postcard',
             'qty': 45,
             'size': {'h': 10, 'uom': 'cm', 'w': 15.25},
             'status': 'A'}
            {'_id': ObjectId('5ade261a9270d01f8c3d2750'),
             'item': 'journal',
             'qty': 25,
             'size': {'h': 14, 'uom': 'cm', 'w': 21},
             'status': 'A'}

     - id: java-sync
       content: |
             
         .. class: copyable-code
         .. code-block:: sh
         
            { "_id" : { "$oid" : "5ada8c109b267e9d1ade9038" }, "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
            { "_id" : { "$oid" : "5ada8c109b267e9d1ade903c" }, "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }

     - id: nodejs
       content: |
         .. class:: copyable-code
         .. code-block:: sh
            
            [ { _id: 5adedb5ffa97c643763556e8,
                item: 'journal',
                qty: 25,
                size: { h: 14, w: 21, uom: 'cm' },
                status: 'A' },
              { _id: 5adedb5ffa97c643763556ec,
                item: 'postcard',
                qty: 45,
                size: { h: 10, w: 15.25, uom: 'cm' },
                status: 'A' } ]

            
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
           
            { "_id" : ObjectId("5ade276281031b2005294972"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
            { "_id" : ObjectId("5ade276281031b2005294976"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }