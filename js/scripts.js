const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imgContainer = document.querySelector('.img-container');
const textContainer = document.querySelector('.text-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');



for (let i = 0; i < images.length; i++){
    const img = document.createElement('img');
    img.src = images[i].image;
    img.classList.add('photo');

    const textDiv = document.createElement('p');
    textDiv.innerHTML = images[i].title + '<br>' + images[i].text;

    imgContainer.append(img);
    textContainer.append(textDiv);

    if(i == 0){
        img.classList.add('active');
        textDiv.classList.add('active');
        textDiv.classList.add('text');
    }
}

for (let i = 0; i < images.length; i++){
    const thumbnails  = document.createElement('img');
    thumbnails.src = images[i].image;
    thumbnails.classList.add('active');
    thumbnails.classList.add('thumbnails');
    thumbnailsContainer.append(thumbnails);
    if(i == 0){
        thumbnails.classList.add('active', 'highlights');
    }
}

let currentImg = 0;

const allImg = document.querySelectorAll('.photo');
const allText = document.querySelectorAll('p');
const allThumbnails = document.querySelectorAll('.thumbnails');


prev.addEventListener('click',
    function(){
        if(currentImg > 0){
            allImg[currentImg].classList.remove('active');
            allText[currentImg].classList.remove('active');
            allThumbnails[currentImg].classList.remove('highlights');
            currentImg--;
            allImg[currentImg].classList.add('active');
            allText[currentImg].classList.add('active');
            allThumbnails[currentImg].classList.add('highlights')
        }
        else if(currentImg == 0){
            allImg[currentImg].classList.remove('active');
            allText[currentImg].classList.remove('active');
            allThumbnails[currentImg].classList.remove('highlights')
            currentImg = allImg.length - 1;
            allImg[currentImg].classList.add('active');
            allText[currentImg].classList.add('active');
            allThumbnails[currentImg].classList.add('highlights')
        }
    
    }
)

next.addEventListener('click',
    function(){
        if(currentImg < allImg.length - 1){
        allImg[currentImg].classList.remove('active');
        allText[currentImg].classList.remove('active');
        allThumbnails[currentImg].classList.remove('highlights');
        currentImg++;
        allImg[currentImg].classList.add('active');
        allText[currentImg].classList.add('active');
        allThumbnails[currentImg].classList.add('highlights');
        }
        else if(currentImg == allImg.length - 1){
        
        allImg[currentImg].classList.remove('active');
        allText[currentImg].classList.remove('active');
        allThumbnails[currentImg].classList.remove('highlights');
        currentImg = 0;
        allImg[currentImg].classList.add('active');
        allText[currentImg].classList.add('active');
        allThumbnails[currentImg].classList.add('highlights'); 
        }

    }
)

