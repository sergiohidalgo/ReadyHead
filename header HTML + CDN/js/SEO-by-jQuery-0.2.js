function SEObyjQuery(){
    //Aplicamos los title a las A
  	$('a').each(function(){
        var atributoTextdeA = $(this).attr('title');
        
        if (atributoTextdeA == undefined || atributoTextdeA == ''){
            $(this).attr('title', $(this).text());
        }
    });
    
    //Aplicamos alt a imagenes
    $('img').each(function(){
        var atributoSrcDeImg = $(this).attr('src');
        var atributoAltDeImg = $(this).attr('alt');
            if (atributoAltDeImg == undefined || atributoAltDeImg == ''){
                
                atributoSrcDeImg = atributoSrcDeImg.split('/');
                var valorDeLaIMG = atributoSrcDeImg.pop();
                
                var nombreDelAlt = valorDeLaIMG.replace('.jpg','').replace('-',' ').replace('_',' ').replace('.png','');
                
                $(this).attr('alt', nombreDelAlt);
            }
    });
}

jQuery(document).ready(function() {
    SEObyjQuery();
});