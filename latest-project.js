// ================= Untuk ganti gambar tiap pindah list lates-project ========================

let img1 = document.querySelector('#image1');
let img2 = document.querySelector('#image2');
let img3 = document.querySelector('#image3');
let img4 = document.querySelector('#image4');
let img_name1 = document.querySelector('#img-name1');
let img_name2 = document.querySelector('#img-name2');
let img_name3 = document.querySelector('#img-name3');
let img_name4 = document.querySelector('#img-name4');

let all = document.querySelector('#all');
let nature = document.querySelector('#nature');
let industrial = document.querySelector('#industrial');
let more = document.querySelector('#more');

all.addEventListener('click', ()=>{                     //Gambar dan tulisan di list All
    img1.src = './image/all1.jpeg';
    img2.src = './image/all2.jfif';
    img3.src = './image/all3.jpeg';
    img4.src = './image/all4.jfif';
    img_name1.innerText = 'Musee des\nConfluence';
    img_name2.innerText = 'Editorial\nArchitecture';
    img_name3.innerText = "Confluence\nFrance";
    img_name4.innerText = "Classic\nArchitecture";
});
nature.addEventListener('click', ()=>{                  //Gambar dan tulisan di list nature
    img1.src = './image/nature1.png';
    img2.src = './image/nature2.jfif';
    img3.src = './image/nature3.jfif';
    img4.src = './image/nature4.jfif';
    img_name1.innerText = 'Rainforest\nHotel';
    img_name2.innerText = 'Shadow\nHouse';
    img_name3.innerText = 'Natural\nRestaurant';
    img_name4.innerText = 'Mansion in\nThe Forest';
});
industrial.addEventListener('click', ()=>{              //Gambar dan tulisan di list industrial
    img1.src = './image/industrial1.jfif';
    img2.src = './image/industrial2.jfif';
    img3.src = './image/industrial3.jfif';
    img4.src = './image/industrial4.jfif';
    img_name1.innerText = 'The Loft\nApartment';
    img_name2.innerText = 'Contemporary\nCoffee Shop';
    img_name3.innerText = 'Industrial\nStyle Studio';
    img_name4.innerText = 'Luxury\nResidence';
});
more.addEventListener('click', ()=>{                    //Gambar dan tulisan di list more
    img1.src = './image/more1.jfif';
    img2.src = './image/more2.jfif';
    img3.src = './image/more3.png';
    img4.src = './image/more4.jfif';
    img_name1.innerText = 'Gymanstic\nCenter';
    img_name2.innerText = 'Luxury\nHouse';
    img_name3.innerText = 'Skyscraper\nArchitecture';
    img_name4.innerText = 'The Concrete\nPentahouse';
});

// ======================================================================================
