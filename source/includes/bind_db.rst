.. tabs-drivers::

   tabs:
     - id: shell
       content: |       
         
         To switch to the ``test`` database in the shell, type          
         
         .. code-block:: sh
              
            use test
 
     - id: compass
       content: |
         
         If the database has not been created already, click the
         :guilabel:`Create Database` button.
         
         .. figure:: /images/compass-create-database.png
            :alt: Screeenshot after connecting with the "Create Database" button.
            :figwidth: 750px
     
     - id: python
       content: |
           
         .. code-block:: sh

	          db = client.test
         
     - id: motor
       content: |
         
         .. code-block:: sh
            
            import motor.motor_asyncio
            import asyncio
            import pprint

            client = motor.motor_asyncio.AsyncIOMotorClient('<URISTRING>')
            db = client.test

            collection = db.inventory
         

     - id: java-sync
       content: |
         
         .. code-block:: sh
         
		        MongoDatabase mongoDB = mongoClient.getDatabase("test");
		    
	
   
     - id: nodejs
       content: |
         
         Within the connect block, switch to the database

         .. code-block:: javascript
            
            const dbName = "test";
            const db = client.db(dbName);
         
     - id: php
       content: |

         .. code-block:: php
         
            $db = $manager->test;


     - id: perl
       content: |
         
         .. code-block:: sh
            
            use MongoDB;

            my $client = MongoDB->connect('<URISTRING>');

            my $db = $client->get_database('test');
            

     - id: ruby
       content: |
         
         If you specified `test` as your database in your URI string, you should already be connected to the `test` database.
  
     - id: scala
       content: |
         
         .. code-block:: sh
         
            val database: MongoDatabase = mongoClient.getDatabase("test")


     - id: csharp
       content: |
         
         .. code-block:: sh
            
            using System;
            using MongoDB.Bson;
            using MongoDB.Driver;

            namespace csharptest
            {
               class Program
               {
                   static void Main(string[] args)
                   {
                      var client = new MongoClient("mongodb://testuser:password@localhost:27017/test?authSource=admin");
                      var database = client.GetDatabase("test");
                      var collection = database.GetCollection<BsonDocument>("inventory");
                 }
               }
            }
  