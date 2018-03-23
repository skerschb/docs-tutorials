.. tabs-drivers::

   tabs:
     - id: shell
       content: |
         If you have properly installed mongo, you should be able to access your mongod
         instance locally or on the cloud by running ``mongo``.
         
         Use this connection string widget to construct the connection string required.
         
         .. uriwriter::
 
         .. cssclass:: copyable-code urilistener
         .. code-block:: sh

            mongo <URISTRING>
              
         Alternatively you can authenticate once you run the shell command
           
           .. cssclass:: copyable-code
           .. code-block:: sh
              
              mongo <hostname>:<port>
              
         With
        
           .. cssclass:: copyable-code
           .. code-block:: sh
              
              use admin
              db.auth(user:"username", pwd:"password"})
           
           
     - id: compass
       content: |
         If you have properly installed ::compass::, you will be able to `connect
         <https://docs.mongodb.com/compass/current/connect/#connect>`__

     - id: python
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connect.py
            :language: python
            :dedent: 0
            :start-after: Start Connect
            :end-before: End Connect     
         
     - id: motor
       content: |
         Motor doesn't connect to MongoDB until it runs an operation against the database.
         So "creating" a connection merely creates a handle to the connection object.
         

     - id: java-sync
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/JavaConnectDocumentationSamples.java
            :language: java
            :dedent: 4
            :start-after: Start Connect
            :end-before: End Connect
		    
	
   
     - id: nodejs
       content: |
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connect.js
            :language: javascript
            :dedent: 0
            :start-after: Start Connect
            :end-before: End Connect     
         
     - id: php
       content: |
         .. cssclass:: copyable-code
         .. code-block:: php
         
   	        <?php

            use MongoDB\Database;
 
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
  