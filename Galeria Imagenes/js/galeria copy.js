


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


//FUNCION CARROUSSEL IMAGENES POR PAIS

document.addEventListener('DOMContentLoaded', function () {

    let pais = document.querySelector('.name');

    let images = [
        { img: 'Data/BOSNIA/e1.jpg'},
        { img: 'Data/ESLOVENIA/e2.jpg' },
        { img: 'Data/ESLOVENIA/e3.jpg' },
        { img: 'Data/ESLOVENIA/e4.jpg' },
        { img: 'Data/ESLOVENIA/e5.jpg' },
        { img: 'Data/ESLOVENIA/e6.jpg'},
        { img: 'Data/ESLOVENIA/e7.jpg' },
        { img: 'Data/ESLOVENIA/e8.jpg'},
        { img: 'Data/ESLOVENIA/e9.jpg' },
        { img: 'Data/ESLOVENIA/e10.jpg' }
    ]

    let cont = 0
    const overlay = document.querySelector('.overlay')
    const contenedor = document.querySelector('.slideshow')
    const galeria = document.querySelectorAll('.city-list img')
    const img_slideshow = document.querySelector('.slideshow img')



        Array.from(galeria).forEach(img => {
            img.addEventListener('click', event => {
                const imagen_seleccionada = +event.target.dataset.imgMostrar
                img_slideshow.src = images[imagen_seleccionada].img
                cont = imagen_seleccionada
                overlay.style.opacity = 1
                overlay.style.visibility = 'visible'
            })
        })

        document.querySelector('.btn-cerrar').addEventListener('click', () => {
            overlay.style.opacity = 0
            overlay.style.visibility = 'hidden'
        })
    })