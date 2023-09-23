from flask import Flask
from dotenv import load_dotenv
from db import init_db
from routes.lugar_routes import lugar_blueprint

load_dotenv()  # Carga las variables de entorno desde .env

app = Flask(__name__)
app.register_blueprint(lugar_blueprint, url_prefix='/api')

init_db(app)

if __name__ == '__main__':
    app.run(debug=True)
