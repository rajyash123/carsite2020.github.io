// ids and documment

const collapseButton1 = document.getElementById("box-button");
const collapseButton2 = document.getElementById("box-button2");
const boxToCollapse1 = document.getElementById("box1");
const boxToCollapse2 = document.getElementById("box2");

let count = 0;
let count2 = 0;
// event listeners
collapseButton1.addEventListener('click', () => {
    console.log(count);
    if (count === 0){
        boxToCollapse1.innerHTML = `
            <div class="card-box">
            <h3 class="mb-1">some text</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>                 
            </div>
        `;
        count++;
        count2 = 0;
        console.log("count 1 - ", count)
        console.log("count 2 - ", count2);
        collapseButton1.classList.add('active');
        collapseButton2.classList.remove('active');
    }
    else if(count === 1){
        boxToCollapse1.innerHTML = '';
        count--;
        console.log("count 1 - ", count);
        collapseButton1.classList.remove('active');
    }
});
collapseButton2.addEventListener('click', () => {
    console.log(count2);
    if (count2 === 0){
        boxToCollapse1.innerHTML = `
            <div class="card-box">
            <h3>some text 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, accusantium.</p>                 
            </div>      
        `;
        count2++;
        count = 0;
        console.log('count 2 - ',count);
        console.log("count 1 - ", count)
        collapseButton2.classList.add('active');
        collapseButton1.classList.remove('active');

    }
    else if(count2 === 1){
        boxToCollapse1.innerHTML = '';
        count2--;
        console.log('count 2 - ',count);
        collapseButton2.classList.remove('active');
    }
})


// glider card carousel
new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})

new Glider(document.querySelector('.glider-res'), {
    slidesToShow: 1,
    draggable: true,
    dots: '#dots-res',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})

// glider card carousel
new Glider(document.querySelector('.glider2'), {
    slidesToShow: 2,
    draggable: true,
    dots: '#dots2',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})

// glider card carousel
new Glider(document.querySelector('.glider2-res'), {
    slidesToShow: 1,
    draggable: true,
    dots: '#dots2-res',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})


new Glider(document.querySelector('.glider3'), {
    slidesToShow: 2,
    dots: '#dots3',
    arrows: {
      prev: '.prev',
      next: '.next'
    }
  });


new Glider(document.querySelector('.glider-main'), {
    slidesToShow: 2,
    draggable: true,
    dots: '#dots4',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});

