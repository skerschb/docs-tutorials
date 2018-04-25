
If you connected to the MongoDB server without specifying a database, you need to do that first. In this example
you will tell the client to use the 'test' database. This is the database you will use to create your first
MongoDB data.

.. tabs-drivers::

   tabs:
     - id: shell
       content: |
         In the mongo shell, type
           .. cssclass:: copyable-code
           .. code-block:: sh

              use test
          
     - id: compass
       content: |
         If you have properly installed ::compass::, you will be able to `connect
         <https://docs.mongodb.com/compass/current/connect/#connect>`__

     - id: python
       content: |
         Where :client: is the name of the variable assigned to the MongoClient.
         
         .. code-block:: javascript

            db = client.test
         
     - id: motor
       content: |
         Motor doesn't connect to MongoDB until it runs an operation against the database.
         So "creating" a connection merely creates a handle to the connection object.
         

     - id: java-sync
       content: |
         .. cssclass:: copyable-code
         .. code-block:: java
         
            MongoDatabase database = mongoClient.getDatabase("test");
	
   
     - id: nodejs
       content: |
         .. cssclass:: copyable-code
         .. code-block:: javascript
              
            const db = client.db(dbName);

     - id: php
       content: |
         .. cssclass:: copyable-code
         .. code-block:: php
         
            <?php

            // Manager Class
            $manager = new MongoDB\Driver\Manager("mongodb://testuser:password@localhost:27017/test?authSource=admin");
         
         
  
     - id: perl
       content: |
         Make sure you have `installed the perl driver
         <https://github.com/mongodb/mongo-perl-driver/blob/master/INSTALL.md>`__

     - id: ruby
       content: |
         Make sure you have `installed the Ruby driver
         <https://docs.mongodb.com/ruby-driver/master/installation/>`__
  
     - id: scala
       content: |
         Make sure you have `installed the Scala driver
         <http://mongodb.github.io/mongo-scala-driver/2.1/getting-started/installation-guide/>`__
  
     - id: csharp
       content: |
         Make sure you have `installed the csharp driver
         <http://mongodb.github.io/mongo-csharp-driver/2.2/getting_started/installation/>`__
  