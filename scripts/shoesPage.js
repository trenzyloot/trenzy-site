import { sneakers } from "./shoes.js";
import { formals } from "./shoes.js";
import { sports } from "./shoes.js";


let prodTXT = ``;
let prodHTML = ``;

for (let i = 0; i < sneakers.length; i++) {
    let prod = sneakers[i];
    
    let isBestSeller = prod.bestSeller;
    let bestSellerHTML = ``;
    if (isBestSeller) {
        bestSellerHTML =
        `
        <img src="images/bestSeller.png" alt="">
        `;
    }
    else {
        bestSellerHTML = ``;
    }
    
    let prodHTML =
    `
    <li class="card" id="card1">
                        <div class="price-tag">${bestSellerHTML}</div>
                        <div class="card-img-holder"><img src="images/prod/${prod.img}" alt=""></div>
                        <div class="card-content-holder">
                            <div class="product-details">
                                <h1 class="product-name">${prod.title}</h1>
                                <p class="product-desc">${prod.desc}</p>
                            </div>
                            <div class="cta">
                                <div class="price">
                                    ₹${prod.price}
                                </div>
                                <a href="${prod.affLink}" target="_blank" class="button">View On Amazon</a>
                            </div>
                        </div>
                    </li>    
    `
    prodTXT += prodHTML;

    
    
}

document.querySelector("#main-card-holder41").innerHTML = prodTXT;









prodTXT = ``;

for (let i = 0; i < formals.length; i++) {
    let prod = formals[i];
    
    let isBestSeller = prod.bestSeller;
    let bestSellerHTML = ``;
    if (isBestSeller) {
        bestSellerHTML =
        `
        <img src="images/bestSeller.png" alt="">
        `;
    }
    else {
        bestSellerHTML = ``;
    }
    
    let prodHTML =
    `
    <li class="card" id="card1">
                        <div class="price-tag">${bestSellerHTML}</div>
                        <div class="card-img-holder"><img src="images/prod/${prod.img}" alt=""></div>
                        <div class="card-content-holder">
                            <div class="product-details">
                                <h1 class="product-name">${prod.title}</h1>
                                <p class="product-desc">${prod.desc}</p>
                            </div>
                            <div class="cta">
                                <div class="price">
                                    ₹${prod.price}
                                </div>
                                <a href="${prod.affLink}" target="_blank" class="button">View On Amazon</a>
                            </div>
                        </div>
                    </li>    
    `
    prodTXT += prodHTML;

    
    
}

document.querySelector("#main-card-holder42").innerHTML = prodTXT;













    

prodTXT = ``;

for (let i = 0; i < sports.length; i++) {
    let prod = sports[i];
    
    let isBestSeller = prod.bestSeller;
    let bestSellerHTML = ``;
    if (isBestSeller) {
        bestSellerHTML =
        `
        <img src="images/bestSeller.png" alt="">
        `;
    }
    else {
        bestSellerHTML = ``;
    }
    
    let prodHTML =
    `
    <li class="card" id="card1">
                        <div class="price-tag">${bestSellerHTML}</div>
                        <div class="card-img-holder"><img src="images/prod/${prod.img}" alt=""></div>
                        <div class="card-content-holder">
                            <div class="product-details">
                                <h1 class="product-name">${prod.title}</h1>
                                <p class="product-desc">${prod.desc}</p>
                            </div>
                            <div class="cta">
                                <div class="price">
                                    ₹${prod.price}
                                </div>
                                <a href="${prod.affLink}" target="_blank" class="button">View On Amazon</a>
                            </div>
                        </div>
                    </li>    
    `
    prodTXT += prodHTML;

    
    
}

document.querySelector("#main-card-holder43").innerHTML = prodTXT;






