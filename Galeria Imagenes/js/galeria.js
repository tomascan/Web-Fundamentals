//FUNCION AMPLIAR IMAGENES MODAL

const fullbox = document.getElementById("overlay"),
fullImg = document.getElementById("fullImg");


function openImg(reference){
    fullbox.style.display = "flex";
    fullImg.src = reference;
}

function closeImg(){
    fullbox.style.display = "none";
}


//FILTRO ACTIVO CAMBIAR COLOR Y SCRIPT DE FILTRADO-----------
$(document).ready(function(){

    //AGREGAR CLASE ACTIVE AL PRINCIPIO
    $('.category-list .categoryItem[category=all]').addClass('active');

    $('.categoryItem').click(function(){

        var filter = $(this).attr('category');
        console.log(filter);

        //CAMBIAR ACTIVE AL ENLACE SELECCIONADO
        $('.categoryItem').removeClass('active');
        $(this).addClass('active');

        //-------OCULTAR FOTOS ------

        $('.city-item').css('transform','scale(0)');
        function hideCity(){
            $('.city-item').hide();
        }setTimeout(hideCity,400);

        //-------MOSTRAR FOTOS ------
        
        function showCity(){
            $('.city-item[category="'+filter+'"]').show();
            $('.city-item[category="'+filter+'"]').css('transform','scale(1)');
        }setTimeout(showCity,400);

    });

        //MOSTRAR TODAS LAS FOTOS
    $('.categoryItem[category=all]').click(function(){
        function showAll(){
            $('.city-item').show();
            $('.city-item').css('transform','scale(1)');
        }setTimeout(showAll,400);

    });
});



