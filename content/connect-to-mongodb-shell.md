+++
date = "2017-03-13T12:12:50-05:00"
title = "Connect to MongoDB via Mongo Shell"

tags = [
"mongodb",
"shell",
"beginner" ]
+++

# Connect to MongoDB via Mongo Shell

## Introduction

The [mongo](https://docs.mongodb.com/manual/reference/program/mongo/)
shell is an interactive JavaScript interface to MongoDB. This tutorial
demonstrates how to connect to MongoDB via the **mongo** shell. Once
connected to MongoDB, you can use the **mongo** shell to query and
update data as well as perform administrative operations.

## Prerequisites

* MongoDB is [installed](https://docs.mongodb.com/manual/installation/#tutorials).
The **mongo** shell is a component of the
[MongoDB distributions](http://www.mongodb.org/downloads>).
* A running MongoDB instance. The instance can be running locally or 
on a remote host where both the **hostname** and **port** are known.

## Local MongoDB Instance on Default Port

To connect to a MongoDB instance running on **localhost** with **default
port 27017**:

1. At a prompt in a terminal window (or a command prompt for Windows),
go to your `<mongodb installation dir>`:

~~~sh
cd <mongodb installation dir>
~~~

2. Type **./bin/mongo** to start **mongo**:

~~~sh
./bin/mongo
~~~

Alternatively, if you added the `<mongodb installation dir>/bin` to
your `PATH` you can run `mongo` instead of `./bin/mongo`:

~~~sh
mongo
~~~

## Local MongoDB Instance on a Non-default Port

Use the `--port <port>` command-line option to connect to a MongoDB instance
running on **localhost** with a **non-default port 28015**:


~~~sh
mongo --port 28015
~~~

## MongoDB Instance on a Remote Host

Use the `--host <host>:<port>` command-line option to connect to a MongoDB instance
running on a remote host machine:

~~~sh
mongo --host mongodb0.tutorials.com:28015
~~~

Alternatively, pass the **host** and **port** parameters separately:

~~~sh
mongo --host mongodb0.tutorials.com --port 28015
~~~

## MongoDB Instance using Authentication

Use the `--username <user>` and `--password <pass>` command-line options to
connect to a MongoDB instance that is using authentication:

~~~sh
mongo --username alice --password abc123 --host mongodb0.tutorials.com --port 28015
~~~

## References
* [Mongo Shell Documentation](https://docs.mongodb.com/manual/reference/program/mongo/)
