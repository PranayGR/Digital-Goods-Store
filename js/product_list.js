let categoryURL = "http://localhost:3979/category";
let brandsURL = "http://localhost:3979/brands";


// Dynamic Category Checkbox on Load
window.addEventListener('load', function() {
    fetch(categoryURL)
    .then((res) => res.json())
    .then((categoryData)=>{
        let categoryCont = document.getElementById('categoryCheck');

        for(i=0; i < categoryData.length; i++){
            let elem1 = document.createElement('input');
            let elem2 = document.createElement('label');
            let elem3 = document.createElement('div');
            let text = document.createTextNode(categoryData[i].name);

            // Assinging bootstrap class and value to input
            elem1.setAttribute('type', 'checkbox');
            elem1.setAttribute('value', categoryData[i].id);
            elem1.setAttribute('class','form-check-input');
            elem1.setAttribute('id', `category${i}`);
            
            // Assinging bootstrap class and value to label
            elem2.setAttribute('class', 'form-check-label');
            elem2.setAttribute('for', `category${i}`);

            elem3.setAttribute('class', 'form-check');

            elem2.appendChild(text);

            elem3.appendChild(elem1);
            elem3.appendChild(elem2);

            categoryCont.appendChild(elem3);
        }
    })
})


// Dynamic Brands Checkbox on Load
window.addEventListener('load', function() {
    fetch(brandsURL)
    .then((res) => res.json())
    .then((brandData)=>{
        let brandCont = document.getElementById('brandCheck');
        
        let uniqueBrand =[];
        for(j=0; j < brandData.length; j++){
            if(uniqueBrand.indexOf(brandData[j].name) == -1){
                uniqueBrand.push(brandData[j].name);
            }
        }

        for(i=0; i < uniqueBrand.length; i++){
            let elem1 = document.createElement('input');
            let elem2 = document.createElement('label');
            let elem3 = document.createElement('div');
            let text = document.createTextNode(uniqueBrand[i]);

            // Assinging bootstrap class and value to input
            elem1.setAttribute('type', 'checkbox');
            elem1.setAttribute('value', i);
            elem1.setAttribute('class','form-check-input');
            elem1.setAttribute('id', `brand${i}`);
            
            // Assinging bootstrap class and value to label
            elem2.setAttribute('class', 'form-check-label');
            elem2.setAttribute('for', `brand${i}`);

            elem3.setAttribute('class', 'form-check');

            elem2.appendChild(text);

            elem3.appendChild(elem1);
            elem3.appendChild(elem2);

            brandCont.appendChild(elem3);
        }
    })
})

// Click SeeMore Button to see more brands
document.getElementById('seeMoreBtn').addEventListener('click',function(){
    let brandCont = document.getElementById('brandCheck');
    if(brandCont.style.height == 'auto'){
        brandCont.style.height = '115px'
        brandCont.style.overflowY = 'hidden';
        document.getElementById('seeMoreBtn').innerText = 'See More ...'
    } else{
        brandCont.style.height = 'auto'
        brandCont.style.overflowY = 'auto';
        document.getElementById('seeMoreBtn').innerText = 'See Less ...'
    }
});
