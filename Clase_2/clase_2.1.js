// clase_2.1.js
document.addEventListener('DOMContentLoaded', function() {
  
    document.body.style.justifyContent = 'center';  
    document.body.style.alignItems = 'center';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';   
    document.body.style.height = '100vh';

    const section1 = document.createElement('section');
    const h1 = document.createElement('h1');
    h1.textContent = 'Title';
    section1.appendChild(h1);
    const section2 = document.createElement('section');
    section2.classList.add('img');
    section2.style.display = 'flex';
    section2.style.gap = '100px';
    
    const img1 = document.createElement('img');
    img1.src = 'https://via.placeholder.com/150';
    img1.alt = 'placeholder';
    section2.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = 'https://via.placeholder.com/150';
    img2.alt = 'placeholder';
    section2.appendChild(img2); 

    const span = document.createElement('span');
    const p = document.createElement('p');
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, architecto? Perferendis ad magni assumenda deserunt illum sed harum quidem debitis saepe id veritatis omnis, repudiandae eum amet voluptate, sequi pariatur.';
    span.appendChild(p);

    const button = document.createElement('button');
    button.textContent = 'No hace nada';
    
    document.body.appendChild(section1);
    document.body.appendChild(section2);
    document.body.appendChild(span);
    document.body.appendChild(button);
});
