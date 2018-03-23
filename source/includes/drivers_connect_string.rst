
Before you connect to MongoDB, whether you are connecting to a standalone instance or the Cloud (Atlas),
you need to determine what the connection string is for your client. The connection string is how
you identify the server you are connecting to, as well as your identity and the database hosted on that
server with which you'd like to work.

Select the environment you
are working with below to determine your connection string, and use this in the procedure wherever ``<connection_string>`` is indicated below.

.. tabs::
   
   tabs:
     - id: MongoDB
       name: MongoDB (standalone)
       content: |
         To connect to a MongoDB instance that is standalone, locally or on another server.
          
         for example, for a user named ``testuser`` with a password of ``password`` and a servername of ``localhost``,
         a port of ``27017``, a database called ``test`` which has authorization stored in the ``admin`` database,
         the connection string would be
         
         .. cssclass:: copyable-code
         .. code-block:: sh
         
            <URISTRING>
      
           
     - id: Atlas
       name: Cloud/Cluster (Atlas)
       content: |
         Follow the instructions on how to connect to an :doc: `Atlas Cluster<https://docs.atlas.mongodb.com/connect-to-cluster/#connect-to-your-cluster>`.
       
     - id: MongoDBReplicaSet
       name: MongoDB Replica Set (non-cloud)
       content: |

For more details and examples of connection strings see `Connection String Examples
<https://docs.mongodb.com/manual/reference/connection-string>`__