from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

DB_FILE = "db.json"

def read_db():
    with open(DB_FILE, "r") as f:
        return json.load(f)

def write_db(data):
    with open(DB_FILE, "w") as f:
        json.dump(data, f, indent=2)

# ---------------- LOGIN ----------------
@app.route("/login", methods=["POST"])
def login():
    data = request.json
    db = read_db()

    for user in db["users"]:
        if user["email"] == data["email"] and user["password"] == data["password"]:
            return jsonify(user)

    return jsonify({"message": "Invalid login"}), 401