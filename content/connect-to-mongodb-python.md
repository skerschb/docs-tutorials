+++
date = "2017-03-13T12:12:50-05:00"
title = "Connect to MongoDB via the Python Driver"

tags = [
"mongodb",
"python",
"beginner" ]
+++

# Connect to MongoDB via the Python Driver

## Introduction

[PyMongo](http://api.mongodb.com/python/current/index.html) is a Python
distribution containing tools for working with MongoDB. This tutorial 
demonstrates how to connect to MongoDB using the Pymongo driver.

## Prerequisites
* A running MongoDB instance. The instance can be running locally if 
MongoDB is [installed](https://docs.mongodb.com/manual/installation/#tutorials)
or running on a remote host where both the **hostname** and **port** are
known.
* Pymongo driver is [installed](http://api.mongodb.com/python/current/installation.html).

## Local MongoDB Instance on Default Port

Pymongo uses the [MongoClient](http://api.mongodb.com/python/current/api/pymongo/mongo_client.html#pymongo.mongo_client.MongoClient)
for connecting to a MongoDB instance, replica set, or
sharded cluster.

If your MongoDB instance is running on the default host (**localhost**)
and port (**27017**), you can instantiate a `MongoClient` without
specifying any parameters:

~~~python
import pymongo
from pymongo import MongoClient

client = MongoClient()

# Get the sampleDB database
db = client.sampleDB
~~~

## Connect Using Host and Port Parameters

The **host** and **port** can be specified explicitly by passing their
respective values as parameters to the `MongoClient`. The following
operation connects to a MongoDB instance running on a remote host using
the **host** and **port** parameters:

~~~python
import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb0.tutorials.com', 27017)

# Get the sampleDB database
db = client.sampleDB
~~~

The default **host** and **port** can also be specified explicitly:

~~~python
import pymongo
from pymongo import MongoClient

client = MongoClient('localhost', 27017)

# Get the sampleDB database
db = client.sampleDB
~~~

## Connect Using a URI

Pymongo also accepts a
[URI](https://docs.mongodb.com/manual/reference/connection-string/)
to connect to MongoDB:

~~~python
import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')

# Get the sampleDB database
db = client.sampleDB
~~~

## Connect with Authentication Credentials

To connect to a MongoDB instance with authentication enabled, specify a
[URI](https://docs.mongodb.com/manual/reference/connection-string/)
in the following format:

~~~sh
mongodb://[username:password@]host1[:port1]
~~~

The following operation connects the user **alice** with password
**abc123** to a MongoDB instance on the default host and port:

~~~python
import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb://alice:abc123@localhost:27017')

# Get the sampleDB database
db = client.sampleDB
~~~

## References
* [PyMongo API Documentation](https://api.mongodb.com/python/current/)
