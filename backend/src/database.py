from pymongo import MongoClient
import os

DB_USER = str(os.getenv("DB_USERNAME"))
DB_PASS = str(os.getenv("DB_PASSWORD"))

uri = "mongodb+srv://" + DB_USER + ":" + DB_PASS + "@cluster0.ythuy5f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

print(uri)

client = MongoClient(uri)
db = client["hospital-booking"]
users = db["users"]