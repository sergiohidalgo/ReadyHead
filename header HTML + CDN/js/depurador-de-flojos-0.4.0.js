function depurandoTuFlojera(){
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
    
    //Target si es sitio externo o termina en .pdf
    /* Si el enlace termina en .pdf o comienza con http:// o https:// se aplica el target _blanck */
    
    $('a').each(function(){

        var atributoTargetDeA = $(this).attr('target');
        var URLdelHREF = $(this).attr('href');

        URLdelHREF = URLdelHREF.split('/');
        
        if (atributoTargetDeA == undefined || atributoTargetDeA == ''){
            
            if(URLdelHREF[0] == 'http:' || URLdelHREF[0] == 'https:'){
                $(this).attr('target','_blank');
            }
        }
        
        var extencionURL = URLdelHREF.pop();
        extencionURL = extencionURL.split('.');
        extencionURL = extencionURL.pop();

        if(extencionURL == 'pdf'){
            $(this).attr('target','_blank');
        }
        
    });
}

jQuery(document).ready(function() {
    depurandoTuFlojera();
});