var images = ['Data/PAISES/ESLOVENIA.jpg','Data/PAISES/CROACIA.jpg','Data/PAISES/MONTENEGRO.jpg','Data/PAISES/HUNGRIA.jpg','Data/PAISES/BOSNIA.jpg'];
var galery = ['eslovenia.html','croacia.html','montenegro.html','hungria.html','bosnia.html'];
var flags = ['Data/BANDERAS/eslovenia.jpg','Data/BANDERAS/croacia.jpg','Data/BANDERAS/montenegro.jpg','Data/BANDERAS/hungria.jpg','Data/BANDERAS/bosnia.jpg'];
var cont = 0;





function carrousel(container){
    container.addEventListener('click', e => {
        let before = container.querySelector('.back');
        let after = container.querySelector('.forward');
        img = container.querySelectorAll("img");
        url = container.querySelector('a');
        tgt = e.target;

        if(tgt == before){
            if(cont > 0){
                img[0].src = images[cont - 1];
                img[1].src = flags[cont - 1];
                url.href = galery[cont - 1];
                cont--;
            }else{
                img[0].src = images[images.length - 1];
                img[1].src = flags[flags.length - 1];
                url.href = galery[galery.length - 1];
                cont = images.length - 1;
            }
        }else if(tgt == after){
            if(cont < images.length - 1){
                img[0].src = images[cont + 1];
                img[1].src = flags[cont + 1];
                url.href = galery[cont + 1];
                cont++;
            }else{
                img[0].src = images[0];
                img[1].src = flags[0];
                url.href = galery[0];
                cont = 0;
            }
        }

    });

   
 
}


document.addEventListener("DOMContentLoaded", () => {
let container = document.querySelector('.container');

carrousel(container);
});

