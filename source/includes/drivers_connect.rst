.. tabs-drivers::

   tabs:
     - id: shell
       content: |        
         
         .. cssclass:: copyable-code urilistener
         .. code-block:: sh

            mongo <URISTRING>
              
         Alternatively you can authenticate username and password once you run the ``mongo`` command
         and execute the shell.
           
         .. cssclass:: copyable-code
         .. code-block:: sh
              
            mongo <hostname>:<port>
              
         with
        
         .. cssclass:: copyable-code
         .. code-block:: sh
              
            use admin
            db.auth(user:"<username>", pwd:"<password>"})
           
           
     - id: compass
       content: |  
         Hit the copy button on the URI below.
         
         .. cssclass:: copyable-code
         .. code-block:: sh

            <URISTRING>
         
         Then follow the instructions to `connect
         <https://docs.mongodb.com/compass/current/connect/#connect>`__

     - id: python
       content: |
         It's a good idea to put your connection code in a class so
         that it can be reused.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connect.py
            :language: python
            :dedent: 0
            :start-after: Start Connect
            :end-before: End Connect
         
         Now add a caller, and you've got a python executable
         that will connect to mongodb.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connecttest.py
            :language: python
            :dedent: 0
            :start-after: Start Caller Connect
            :end-before: End Caller Connect
         
     - id: motor
       content: |
         Motor doesn't connect to MongoDB until it runs an operation against the database.
         So "creating" a connection merely creates a handle to the connection object.
         

     - id: java-sync
       content: |
         This example uses a static utility method.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/JavaConnectDocumentationSamples.java
            :language: java
            :dedent: 4
            :start-after: Start Connect
            :end-before: End Connect
            
         The caller
            
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/JavaConnectTest.java
            :language: java
            :dedent: 4
            :start-after: Start Call Example
            :end-before: End Call Example
		    
	
   
     - id: nodejs
       content: |
         Note that you will need to modify the URI string
         manually below, as it requires URI encoding.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connect.js
            :language: javascript
            :dedent: 0
            :start-after: Start Connect
            :end-before: End Connect     
         
     - id: php
       content: |
         The connection code has been separated into a class
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connect.php
            :language: php
            :dedent: 0
            :start-after: Start Connect
            :end-before: End Connect
            
         A php test script makes the call
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/phpconnecttest.phpt
            :language: php
            :dedent: 0
            :start-after: Start Connect Call
            :end-before: End Connect Call
            
             
  
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
  