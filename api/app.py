from flask import Flask
from db import initialize_db
from api.routes.lugar_routes import lugar_routes

app = Flask(__name__)
app.register_blueprint(lugar_routes)

initialize_db(app)

if __name__ == '__main__':
    app.run(debug=True)
