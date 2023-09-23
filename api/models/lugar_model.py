from db import db

class Lugar(db.Model):
    __tablename__ = 'lugares'

    id = db.Column(db.Integer, primary_key=True)
    lugar = db.Column(db.String(255), nullable=False)
    pais = db.Column(db.String(255), nullable=False)
    precio_estadia = db.Column(db.Float, nullable=False)
    descuento = db.Column(db.Float)
    puntuacion = db.Column(db.Float)
    lejania = db.Column(db.Float)
    comentarios = db.Column(db.Text)
    imagen = db.Column(db.String(255))

    def __init__(self, lugar, pais, precio_estadia, descuento, puntuacion, lejania, comentarios, imagen):
        self.lugar = lugar
        self.pais = pais
        self.precio_estadia = precio_estadia
        self.descuento = descuento
        self.puntuacion = puntuacion
        self.lejania = lejania
        self.comentarios = comentarios
        self.imagen = imagen

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, lugar_id):
        return cls.query.get(lugar_id)

    @classmethod
    def find_all(cls):
        return cls.query.all()
