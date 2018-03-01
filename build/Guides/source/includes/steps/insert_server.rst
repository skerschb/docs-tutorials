.. only:: html or dirhtml or singlehtml

   .. raw:: html
   
      <div class="sequence-block"><div class="bullet-block"><div class="sequence-step">1</div></div>

   Switch to the test database
   ```````````````````````````

   Make sure you have followed the prerequisites above to connect to the MongoDB instance and bind
   to the 'test' database.
   

   .. raw:: html
   
      </div>

.. only:: not(html or dirhtml or singlehtml)

   Step 1: Switch to the test database
   ```````````````````````````````````

   Make sure you have followed the prerequisites above to connect to the MongoDB instance and bind
   to the 'test' database.
   

.. only:: html or dirhtml or singlehtml

   .. raw:: html
   
      <div class="sequence-block"><div class="bullet-block"><div class="sequence-step">2</div></div>

   Insert a Single Document
   ````````````````````````

   Now you are ready to insert your first data into MongoDB.
   MongoDB uses JSON documents to populate the database,
   which are stored internally as BSON, a binary form of JSON. JSON stands
   for JavaScript Object Notation, and it's a great way to
   store rich data.
   
   The data is stored in a kind of table called
   a collection. Like SQL tables, you can have many collections
   in a database.
   
   .. include:: /includes/insert_one.rst
   .. include:: /includes/driver-example-insert-1.rst
   
   
   

   .. raw:: html
   
      </div>

.. only:: not(html or dirhtml or singlehtml)

   Step 2: Insert a Single Document
   ````````````````````````````````

   Now you are ready to insert your first data into MongoDB.
   MongoDB uses JSON documents to populate the database,
   which are stored internally as BSON, a binary form of JSON. JSON stands
   for JavaScript Object Notation, and it's a great way to
   store rich data.
   
   The data is stored in a kind of table called
   a collection. Like SQL tables, you can have many collections
   in a database.
   
   .. include:: /includes/insert_one.rst
   .. include:: /includes/driver-example-insert-1.rst
   
   
   

