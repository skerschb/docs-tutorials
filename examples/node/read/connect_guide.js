const MongoClient = require('mongodb').MongoClient;
const f = require('util').format;
const assert = require('assert');

const user = encodeURIComponent('testuser');
const password = encodeURIComponent('password');

var co = require('co');

// Connection URL
const url = f('mongodb://%s:%s@localhost:27017/test?authSource=admin', user, password);


// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
   
   console.log(url);
   
   assert.equal(null, err);
 
   const dbName = "test";
   
   const db = client.db(dbName);

   var promise = db.collection('inventory').insertMany([
  { item: "journal",
    qty: 25,
    size: { h: 14, w: 21, uom: "cm" },
    status: "A"},
  { item: "notebook",
    qty: 50,
    size: { h: 8.5, w: 11, uom: "in" },
    status: "A"},
  { item: "paper",
    qty: 100,
    size: { h: 8.5, w: 11, uom: "in" },
    status: "D"},
  { item: "planner",
    qty: 75, size: { h: 22.85, w: 30, uom: "cm" },
    status: "D"},
  { item: "postcard",
    qty: 45,
    size: { h: 10, w: 15.25, uom: "cm" },
    status: "A"}
])
.then(function(result) {


})

 yield promise;

 console.log("Example 2");

 var cursor = db.collection('inventory').find({ status: "D" });

 console.log(yield cursor.toArray());

 console.log("Example 3");

 var cursor = db.collection('inventory').find({ 
  size: { h: 14, w: 21, uom: "cm" }
 });
 
 console.log(yield cursor.toArray());


 console.log("Example 4");
 
 var cursor = db.collection('inventory').find({ 
  "size.uom": "in"
 });  

 console.log(yield cursor.toArray());

 console.log("read Example 5");

 var cursor = db.collection('inventory').find({ 
  "size.h": { $lt: 15 }
 });

 console.log(yield cursor.toArray());
 
 console.log("read Example 6");

 var cursor = db.collection('inventory').find({ 
  status: "A", 
  qty: { $lt: 30 }
 });

 console.log(yield cursor.toArray());
 
 console.log("Read example 7");

 var cursor7 = db.collection('inventory').find({ 
   $or: [ {status: "A" }, { qty: { $lt: 30 } } ]
 })

 console.log(yield cursor.toArray());

 console.log("Read example 8")

 var cursor = db.collection('inventory').find({ 
  status: "A",
  $or: [ { qty: { $lt: 30 } }, { item: { $regex: "^p" } } ]
});

  console.log(yield cursor.toArray());
  

}).then(function(value) {});
});
