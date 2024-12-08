from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from dotenv import load_dotenv
import os

def create_app():
    app = Flask(__name__)
    CORS(app)
    load_dotenv()
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
    return app

bcrypt = Bcrypt()