function autoCentradorH(){
    /* Centra el contenido de la clase .contenedor-centrador que se encuentre en .interior-centrador */
    $('.contenedor-centrador').addClass('clearfix').css({'height':'100%'});
    var AltoContenedor = $('.contenedor-centrador').height();
    var AltoInterior = $('.interior-centrador').height();
    var margenParaCentrar = (AltoContenedor - AltoInterior) / 2; 
    $('.interior-centrador').css({'margin-top':margenParaCentrar});
}
