function totalPorTipo(movimientos, tipo) {
return movimientos
.filter(function (m) {
return m.tipo === tipo;
})
.reduce(function (acc, m) {
return acc + m.monto;
}, 0);
}


function calcularBalanceFuncional(movimientos) {
return totalPorTipo(movimientos, 'ingreso') - totalPorTipo(movimientos, 'egreso');
}