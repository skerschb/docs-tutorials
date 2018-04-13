.. tabs-drivers::

   tabs:
     - id: shell
       content: |
         To bind to the ``test`` database in the shell, type          
         
         .. cssclass:: copyable-code
         .. code-block:: sh
              
            use test
 
     - id: compass
       content: |
         If you have properly installed Compass, you will be able to `connect
         <https://docs.mongodb.com/compass/current/connect/#connect>`__

     - id: python
       content: |
         Connect to the MongoDB instance and authenticate.
         
         .. cssclass:: copyable-code
         .. code-block:: sh

	        db = client.test
         
     - id: motor
       content: |
         Motor doesn't connect to MongoDB until it runs an operation against the database.
         So "creating" a connection merely creates a handle to the connection object.
         

     - id: java-sync
       content: |
         .. code-block:: java
         
		    MongoDatabase mongoDB = mongoClient.getDatabase("test");
		    
	
   
     - id: nodejs
       content: |
         Within the connect block, bind to the database
         
         .. cssclass:: copyable-code
         .. code-block:: javascript
            
            const dbName = "test";
            const db = client.db(dbName);
         
     - id: php
       content: |
         TODO:: figure out which PHP libraries we are supporting?????
         .. cssclass:: copyable-code
         .. code-block:: php
         
            $db = $manager->test;


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
  