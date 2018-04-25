# Start Connection
from pymongo import MongoClient

connection_string = "mongodb://testuser:<PASSWORD>@localhost:27017/test?authSource=admin"
client = MongoClient(connection_string)
# End Connection

# Start DatabaseBind
db = client.test
# End DatabaseBind

client.close();
