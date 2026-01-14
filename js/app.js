var gestor = new GestorPresupuesto();


var form = document.getElementById('form-movimiento');
var lista = document.getElementById('lista-movimientos');


form.addEventListener('submit', function (e) {
e.preventDefault();


var tipo = document.getElementById('tipo').value;
var descripcion = document.getElementById('descripcion').value;
var monto = Number(document.getElementById('monto').value);


var movimiento = tipo === 'ingreso'
? new Ingreso(descripcion, monto)
: new Egreso(descripcion, monto);


gestor.agregarMovimiento(movimiento);
render();
form.reset();
});


function render() {
lista.innerHTML = '';


gestor.movimientos.forEach(function (m) {
var li = document.createElement('li');
li.className = m.tipo;
li.textContent = m.descripcion + ' - ' + m.monto;
lista.appendChild(li);
});


document.getElementById('total-ingresos').textContent = totalPorTipo(gestor.movimientos, 'ingreso');
document.getElementById('total-egresos').textContent = totalPorTipo(gestor.movimientos, 'egreso');
document.getElementById('balance').textContent = calcularBalanceFuncional(gestor.movimientos);
}