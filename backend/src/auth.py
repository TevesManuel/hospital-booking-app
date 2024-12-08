from flask import Blueprint, request, jsonify
from __init__ import bcrypt
import jwt
import os
from database import users
from utils import verify_token

from app import app

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/register', methods=['POST'])
def register():
    data = request.json

    print(data)

    if (
        not data.get("email")       or
        not data.get("password")    or
        not data.get("names")       or
        not data.get("lastNames")   or
        not data.get("dni")         or
        not data.get("phoneNumber") or
        not data.get("locality")    or
        not data.get("zipCode")     or
        not data.get("address")      or
        not data.get("dateBirth")
        ):
        return jsonify({"error": "Mandatory fields are missing"}), 400

    if users.find_one({"email": data["email"]}):
        return jsonify({"error": "User already exists"}), 400
    
    hashed_password = bcrypt.generate_password_hash(data["password"]).decode('utf-8')

    users.insert_one({
        "email": data["email"],
        "password": hashed_password,
        "names": data["names"],
        "lastNames": data["lastNames"],
        "dni": data["dni"],
        "phoneNumber": data["phoneNumber"],
        "locality": data["locality"],
        "zipCode": data["zipCode"],
        "address": data["address"],
        "dateBirth": data["dateBirth"],
    })

    token = jwt.encode(
        {
            "email": data["email"],
            "names": data['names'],
            "lastNames": data['lastNames'],
            "dateBirth": data['dateBirth'],
            "type": "patient"
        },
        os.getenv("JWT_SECRET_KEY"),
        algorithm="HS256"
    )
    
    return jsonify({
        "names": data["names"],
        "lastNames": data["lastNames"],
        "token": token
    }), 201

@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.json

    if not data.get("email") or not data.get("password"):
        return jsonify({"error": "Mandatory fields are missing"}), 400

    dbUser = users.find_one({"email": data["email"]})
    if not dbUser:
        return jsonify({"error": "User and/or password are wrong"}), 401

    if not bcrypt.check_password_hash(dbUser["password"], data["password"]):
        return jsonify({"error": "User and/or password are wrong"}), 401

    token = jwt.encode(
        {
            "email": data["email"],
            "names": dbUser['names'],
            "lastNames": dbUser['lastNames'],
            "dateBirth": dbUser['dateBirth'],
            "type": "patient"
        },
        os.getenv("JWT_SECRET_KEY"),
        algorithm="HS256"
    )

    return jsonify({
        "names": dbUser["names"],
        "lastNames": dbUser["lastNames"],
        "token": token
    }), 200