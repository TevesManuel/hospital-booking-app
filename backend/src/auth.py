from flask import Blueprint, request, jsonify
from __init__ import bcrypt
import jwt
import os
from database import users
from utils import verify_token

from app import app

auth_bp = Blueprint('auth', __name__)



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