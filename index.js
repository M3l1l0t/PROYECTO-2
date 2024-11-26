const shoes = [
    {
        name:"Air Max 1",
        price:120,
        brand:"Nike Original",
        img: "./assets/Sneakers/NIKE+AIR+MAX+1.png"
    },
    {
        name:"NB 9060",
        price:80,
        brand:"New Balance",
        img: "./assets/Sneakers/NEW+BALANCE+9060.png"
    },
    {
        name:"Nike Revolution",
        price:90,
        brand:"Nike Original",
        img: "./assets/Sneakers/NIKE+REVOLUTION.png"
    },
    {
        name:"Forum Buckle",
        price:100,
        brand:"Adidas Original",
        img: "./assets/Sneakers/ADIDAS+FORUM.png"
    },
    {
        name:"Campus",
        price:120,
        brand:"Adidas Original",
        img: "./assets/Sneakers/ADIDAS+CAMPUS.png"
    },
    {
        name:"NB 327",
        price:120,
        brand:"New Balance",
        img: "./assets/Sneakers/NEW+BALANCE+NB327.png"
    },
    {
        name:"Dunk Low",
        price:100,
        brand:"Nike Original",
        img: "./assets/Sneakers/NIKE+DUNKLOW.png"
    },
    {
        name:"Gazelle",
        price:90,
        brand:"Adidas Original",
        img: "./assets/Sneakers/ADIDAS+GAZELLE.png"
    },
    {
        name:"Air Max SC",
        price:150,
        brand:"Nike Original",
        img: "./assets/Sneakers/NIKE+AIR+MAX+SC.png"
    },
    {
        name:"Handball Spezial",
        price:120,
        brand:"Adidas Original",
        img: "./assets/Sneakers/ADIDAS+HANDBALL.png"
    },
    {
        name:"Air Force",
        price:130,
        brand:"Nike Original",
        img: "./assets/Sneakers/NIKE+AIRFORCE.png"
    },
    {
        name:"NB 9060",
        price:100,
        brand:"New Balance",
        img: "./assets/Sneakers/NEW+BALANCE+9060.png"
    },
    {
        name:"NB 480",
        price:150,
        brand:"New Balance",
        img: "./assets/Sneakers/NEW+BALANCE+NB480.png"
    },
    {
        name:"Full Force Low",
        price:70,
        brand:"Nike Original",
        img: "./assets/Sneakers/NIKE+FULLFORCE.png"
    },
    {
        name:"Air Max SC",
        price:160,
        brand:"Nike Original",
        img: "./assets/Sneakers/NIKE+AIR+MAX+SC2.png"
    },
    {
        name:"Handball Spezial",
        price:140,
        brand:"Adidas Original",
        img: "./assets/Sneakers/ADIDAS+HANDBALL.png"
    },
]

function GetBrands (array) {
    const brands = [];
    for (const brand of array) {
        if (!brands.includes(brand.brand)) {
            brands.push(brand.brand);
        }
    }
    return brands;
}

let BRANDselect = "";

function filterShoesBrand (brand) {
    let filtered = [];
    for (const shoe of shoes) {
        if (brand === shoe.brand) {
            filtered.push(shoe);
        } else if (brand === "all"){
            filtered.push(shoe);
        }
    }
    return filtered;
}

function filterShoesPrice(array,price) {
    let filtered = [];
    for (const shoe of array) {
        if (shoe.price <= price){
            filtered.push(shoe)
        }
    }
    return filtered;
}

function filterShoesForm () {
    const divForm = document.querySelector("#divForm");
    const form = document.createElement("form");
    const selectBrand = document.createElement("select");
    divForm.classList.add("desaparece");
    form.className = "flex-container"

    const firstOption = document.createElement("option");
    firstOption.value = "all";
    firstOption.textContent = "CATEGORÍAS";
    selectBrand.appendChild(firstOption);

    for (const brand of GetBrands(shoes)) {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        selectBrand.appendChild(option);
    }

    const price = document.createElement("input");
    price.placeholder = "Precio máximo";
    price.id = price;

    const FilterButton = document.createElement("button");
    FilterButton.type = "button";
    FilterButton.textContent = "Filtrar";

    const CleanFilterButton = document.createElement("button");
    CleanFilterButton.type = "button";
    CleanFilterButton.textContent = "Limpiar"

    form.appendChild(selectBrand);
    form.appendChild(price);
    form.appendChild(FilterButton);
    form.appendChild(CleanFilterButton);
    divForm.appendChild(form);


    FilterButton.addEventListener("click", () => {
        let BrandFiltered = filterShoesBrand(selectBrand.value);
        if (price.value){
            if (filterShoesPrice(BrandFiltered, price.value).length === 0){
                const ShoesAleatory = [];
                for (let i = 0; i < 3; i++) {
                    ShoesAleatory.push(shoes[Math.floor(Math.random()*shoes.length)]);
                } 
                const main = document.querySelector("#main");
                const h3 = document.createElement("h3");
                h3.textContent = "Productos sugeridos";
                h3.id = "sugerido";
                if(document.querySelector("#sugerido")){
                    document.querySelector("#sugerido").remove();
                }
                main.appendChild(h3)
                PrintArticles(ShoesAleatory);
            } else {
            PrintArticles(filterShoesPrice(BrandFiltered, price.value));
            }
        } else {
            PrintArticles(BrandFiltered);
        }
    })

    CleanFilterButton.addEventListener("click", () => {
        selectBrand.value = "all";
        price.value = "";
        PrintArticles(shoes);
    })

}

function PrintArticles (array) {
    const main = document.querySelector("#main");
    if(document.querySelector("#productos")){
        document.querySelector("#productos").remove();
    }
    const ShoesSection = document.createElement("section");
    ShoesSection.id = "productos";
    ShoesSection.className = "flex-container";
    for (const shoe of array) {
        const ShoeArticle = document.createElement("article");
        ShoeArticle.className = "ShoesArticle"
        const divImg = document.createElement("div");
        divImg.className = "ShoeImg"
        const img = document.createElement("img");
        img.src = shoe.img;
        img.alt = "Imagen de sneaker";
        divImg.appendChild(img);
        ShoeArticle.appendChild(divImg);
        pBrand = document.createElement("p");
        pBrand.textContent = shoe.brand;
        ShoeArticle.appendChild(pBrand);
        divNamePrice = document.createElement("div");
        divNamePrice.className = "flex-container";
        h3 = document.createElement("h3");
        h3.textContent = shoe.name;
        pPrice = document.createElement("p");
        pPrice.textContent = shoe.price + " €";
        divNamePrice.appendChild(h3);
        divNamePrice.appendChild(pPrice);
        ShoeArticle.appendChild(divNamePrice);
        buy = document.createElement("button");
        buy.textContent = "Comprar";
        ShoeArticle.appendChild(buy);
        ShoesSection.appendChild(ShoeArticle);
    }
    main.appendChild(ShoesSection);
}

const printHeroForm = () => {
    const main = document.querySelector("main");
    const hero = document.createElement("div");
    const divForm = document.createElement("div");
    const divLinea = document.createElement("div");
    hero.id = "hero";
    divForm.id = "divForm";
    divLinea.id = "divLinea";

    let img = document.createElement("img");
    img.src = "./assets/hero/cover.png";

    let arrow = document.createElement("img");
    arrow.src = "./assets/hero/flecha-hacia-abajo.png"

    
    divLinea.appendChild(arrow);
    hero.appendChild(img);
    hero.appendChild(divForm);
    hero.appendChild(divLinea);
    main.appendChild(hero);
    filterShoesForm();

    arrow.addEventListener("click", () => {
        divForm.classList.toggle("desaparece");
        if (divForm.classList.contains("desaparece")){
            arrow.src = "./assets/hero/flecha-hacia-abajo.png"
        } else {
            arrow.src = "./assets/hero/Flecha-hacia-arriba.png"
        }
    })
};

printHeroForm();
PrintArticles(shoes);
