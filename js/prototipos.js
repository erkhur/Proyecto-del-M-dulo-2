function Ingreso(descripcion, monto) {
Movimiento.call(this, 'ingreso', descripcion, monto);
}


Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;


function Egreso(descripcion, monto) {
Movimiento.call(this, 'egreso', descripcion, monto);
}


Egreso.prototype = Object.create(Movimiento.prototype);
Egreso.prototype.constructor = Egreso;