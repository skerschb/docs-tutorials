
Before you connect to MongoDB, whether it is a standalone instance or an instance on the Cloud,
you need to determine what the connection string is for your access. Check out our `connection string
discoverer <http://docs.mongodb.com/connectionStringStuffHere>`__ to get the string you need, and replace the references
to CONNECTION_STRING below with the appropriate string.

.. tabs-drivers::

   tabs:
     - id: shell
       content: |
         If you have properly installed mongo, you should be able to access your mongod
         instance locally or on the cloud by running:
           .. cssclass:: copyable-code
           .. code-block:: sh

              mongo --username user --pwd password CONNECTION_STRING
              
         Alternatively you can authenticate once you run the shell command
           
           .. cssclass:: copyable-code
           .. code-block:: sh
              
              mongo CONNECTION_STRING
              
         With
        
           .. cssclass:: copyable-code
           .. code-block:: sh
              
              db.auth(user:"username", pwd:"password"})
        
           
     - id: compass
       content: |
         If you have properly installed ::compass::, you will be able to `connect
         <https://docs.mongodb.com/compass/current/connect/#connect>`__

     - id: python
       content: |
         .. class:: copyable-code
         .. code-block:: javascript

            from pymongo import MongoClient
            
            connection_string = 'mongodb://testuser:password@localhost:27017/test?authSource=admin'
	        
	        client = MongoClient(connection_string)
         
     - id: motor
       content: |
         Motor doesn't connect to MongoDB until it runs an operation against the database.
         So "creating" a connection merely creates a handle to the connection object.
         

     - id: java-sync
       content: |
         .. cssclass:: copyable-code
         .. code-block:: java
         
            final String uriString = "mongodb://testuser:password@localhost:27017/test?authSource=admin";
            	MongoClientURI uri = new MongoClientURI(uriString);
		    //note that java connections are not initialized unless an operation such as a find() or count() is
		    //executed
		    MongoClient mongoClient = new MongoClient(uri);
	
   
     - id: nodejs
       content: |
         .. cssclass:: copyable-code
         .. code-block:: javascript
            
            const MongoClient = require('mongodb').MongoClient;
            const f = require('util').format;
            const assert = require('assert');

            const user = encodeURIComponent('testuser');
            const password = encodeURIComponent('password');

            // Connection URL
            const url = f('mongodb://%s:%s@localhost:27017/test?authSource=admin', user, password);

            // Use connect method to connect to the Server
            MongoClient.connect(url, function(err, client) {
               console.log(url);
               assert.equal(null, err);

               console.log("Connected correctly to server");

               client.close();
            });
         
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
  