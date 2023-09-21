from flask import Blueprint, request, jsonify
from models.lugar_model import Lugar

lugar_blueprint = Blueprint('lugar', __name__)

@lugar_blueprint.route('/lugares', methods=['GET'])
def obtener_lugares():
    lugares = Lugar.find_all()
    return jsonify([lugar.__dict__ for lugar in lugares])

@lugar_blueprint.route('/lugares', methods=['POST'])
def crear_lugar():
    data = request.get_json()
    lugar = Lugar(**data)
    lugar.save_to_db()
    return jsonify(message='Lugar creado exitosamente!'), 201
