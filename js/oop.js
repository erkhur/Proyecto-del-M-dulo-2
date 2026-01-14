function Movimiento(tipo, descripcion, monto) {
this.tipo = tipo;
this.descripcion = descripcion;
this.monto = monto;
}


Movimiento.prototype.esValido = function () {
return this.descripcion !== '' && this.monto > 0;
};


function GestorPresupuesto() {
this.movimientos = [];
}


GestorPresupuesto.prototype.agregarMovimiento = function (movimiento) {
if (movimiento.esValido()) {
this.movimientos.push(movimiento);
}
};