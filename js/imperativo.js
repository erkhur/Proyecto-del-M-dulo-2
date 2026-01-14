var movimientosImperativos = [];


function agregarMovimientoImperativo(tipo, descripcion, monto) {
if (!descripcion || monto <= 0) {
alert('Datos inválidos');
return;
}


movimientosImperativos.push({
tipo: tipo,
descripcion: descripcion,
monto: monto
});
}