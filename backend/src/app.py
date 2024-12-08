from __init__ import create_app, bcrypt

app = create_app()
bcrypt.init_app(app)

if __name__ == '__main__':
    from auth import auth_bp
    app.register_blueprint(auth_bp)

    app.run(debug=True)