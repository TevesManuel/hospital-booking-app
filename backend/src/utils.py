from flask import request
import jwt
from database import users

def verify_token(app):
    token = request.headers.get('Authorization', '').split(" ")[1]
    if not token:
        return None, {"error": "Token is missing"}, 401

    try:
        data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
        current_user = users.find_one({"email": data["email"]})
        if not current_user:
            return None, {"error": "User not found"}, 401
    except jwt.ExpiredSignatureError:
        return None, {"error": "Token has expired"}, 401
    except jwt.InvalidTokenError:
        return None, {"error": "Invalid token"}, 401

    return current_user, None, None