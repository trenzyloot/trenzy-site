import { checkshirts } from "./tops.js";
import { henleys } from "./tops.js";
import { plainshirts } from "./tops.js";
import { plaintshirts } from "./tops.js";
import { oversizedtshirts } from "./tops.js";
import { polos } from "./tops.js";

let prodHTML = ``;

let prodTXT = ``;

for (let i = 0; i < checkshirts.length; i++) {
    let prod = checkshirts[i];
    
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
    
    prodHTML =
    `
    <li class="card">
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

document.querySelector("#main-card-holder21").innerHTML = prodTXT;









prodTXT = ``;

for (let i = 0; i < henleys.length; i++) {
    let prod = henleys[i];
    
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
    
    prodHTML =
    `
    <li class="card">
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

document.querySelector("#main-card-holder22").innerHTML = prodTXT;













    

prodTXT = ``;

for (let i = 0; i < plainshirts.length; i++) {
    let prod = plainshirts[i];
    
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
    
    prodHTML =
    `
    <li class="card">
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

document.querySelector("#main-card-holder23").innerHTML = prodTXT;







    
prodTXT = ``;

for (let i = 0; i < polos.length; i++) {
    let prod = polos[i];
    
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
    
    prodHTML =
    `
    <li class="card">
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

document.querySelector("#main-card-holder24").innerHTML = prodTXT;















prodTXT = ``;

for (let i = 0; i < plaintshirts.length; i++) {
    let prod = plaintshirts[i];
    
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
    
    prodHTML =
    `
    <li class="card">
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

document.querySelector("#main-card-holder25").innerHTML = prodTXT;









prodTXT = ``;

for (let i = 0; i < oversizedtshirts.length; i++) {
    let prod = oversizedtshirts[i];
    
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
    
    prodHTML =
    `
    <li class="card">
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

document.querySelector("#main-card-holder26").innerHTML = prodTXT;

