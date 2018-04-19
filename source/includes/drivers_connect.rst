.. tabs-drivers::

   tabs:
     - id: shell
       content: | 
       
         Since ``mongo`` is often run from a unix shell or windows
         command line, it's not a good idea to put the password in your
         URI string. This is because an ill-intentioned user might be
         able to view your command history and steal your password.

         We have included a space for a password in the URI string
         because the URI string does accommodate a password. However, in
         the case of the ``mongo`` shell, you should remove the password
         field from the URI and pass the --password option as the last
         option to the shell and leave out the password. This will cause
         the shell to prompt you for the password.
         
         .. cssclass:: copyable-code urilistener
         .. code-block:: sh

            mongo <URISTRING>
              
         Alternatively you can skip the URI and authenticate username
         and password once you run the ``mongo`` command and execute the
         shell. Pass in a hostname and port to the mongo shell in order
         to direct the shell to the server.
           
         .. cssclass:: copyable-code
         .. code-block:: sh
              
            mongo <hostname>:<port>
              
         Once you see the mongo prompt, you will need to authenticate in
         order to conduct any database operations. First, direct the
         shell to the admin database which is the default user
         permissions database, and then call the authenticate function.
        
         .. cssclass:: copyable-code
         .. code-block:: sh
              
            use admin
            db.auth(user:"<username>", pwd:"<password>"})

           
     - id: compass
       content: |  

         MongoDB Compass can detect whether you have a MongoDB URI
         connection string in your system clipboard and auto-populate
         the connection dialog from the URI. In this step you will open
         MongoDB Compass with a URI connection string in your clipboard.
  
         Hit the copy button on the URI below.
         
         .. cssclass:: copyable-code
         .. code-block:: sh

            <URISTRING>

         Copy the URI locally and replace the password with the password
         associated with the MongoDB username you are using, then copy
         it into your clipboard again. Once you start Compass it will be
         able to access the URI and use it for the connection.

         If you've followed the Compass installation instructions, you
         will have started your Compass process with:

         .. cssclass:: copyable-code
         .. code-block:: sh
            
            sudo DEBUG=* mongodb-compass;

         Once Compass starts, click :guilabel:`Yes` when prompted to auto-
         populate the connection dialog.

         If Compass was already running when you copied the URI string,
         click the :guilabel:`NEW CONNECTION` button.

         .. figure:: /images/connect-to-host.png
            :scale: 100 %

         You will see the prompt to populate the connection dialog.
         Click :guilabel:`Yes`.

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

         Now add code to call the class you just created.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connecttest.py
            :language: python
            :dedent: 0
            :start-after: Start Caller Connect
            :end-before: End Caller Connect

         The connection here is *lazy*. When a connection is lazy, it
         means it's not actually communicating with the server until you
         try to do something with it. As a result, you won't really know
         if this connection is working properly until you attempt to use
         the connection. You'll have a chance to use this connection in
         the next guide.
         
     - id: motor
       content: |
         Motor doesn't connect to MongoDB until it runs an operation against the database.
         So "creating" a connection merely creates a handle to the connection object.
         

     - id: java-sync
       content: |
        
         This example uses a static utility method to make a connection.
         This will make it easier to reuse your code, and in fact you
         will see this code repeated throughout the CRUD guides.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/JavaConnectDocumentationSamples.java
            :language: java
            :dedent: 4
            :start-after: Start Connect
            :end-before: End Connect
            
         The code below statically calls the static utility method above
         to return a connection.
            
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/JavaConnectTest.java
            :language: java
            :dedent: 4
            :start-after: Start Call Example
            :end-before: End Call Example
		    
	
   
     - id: nodejs
       content: |
         
         Note that you will need to modify the URI string
         manually below, as node requires URI encoding.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connect.js
            :language: javascript
            :dedent: 0
            :start-after: Start Connect
            :end-before: End Connect     
         
     - id: php
       content: |
         
         The connection code has been separated into a class.
         
         .. class:: copyable-code
         .. literalinclude:: /driver-examples/connect.php
            :language: php
            :dedent: 0
            :start-after: Start Connect
            :end-before: End Connect
            
         And the caller script:
         
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
  