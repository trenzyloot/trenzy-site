let topProds = [
    {
        title: "Grey  Polo T-Shirt",
        desc: "Summers coolest fit🔥",
        price: 449,
        bestSeller: false,
        img: "polos/greypolo.jpeg",
        affLink: "https://amzn.to/4vkjJNW",
    },
    {
        title: "Light Blue Straight Fit Jeans",
        desc: "Minimal jeans that go with everything",
        price: 425,
        bestSeller: true,
        img: "jeans/lightbluejeans.jpg",
        affLink: "https://amzn.to/4t2OaXo",
    },
    {
        title: "Khaki and White Checkerd Shirt",
        desc: "Budget checked shirt that looks surprisingly premium💸",
        price: 379,
        bestSeller: false,
        img: "checkedshirt/khakiandwhitecheckedshirt.jpg",
        affLink: "https://amzn.to/41mesaL",
    },
    
];


prodTXT = ``;

for (let i = 0; i < topProds.length; i++) {
    let prod = topProds[i];
    
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
                                <a href="${prod.affLink}" class="button">View On Amazon</a>
                            </div>
                        </div>
                    </li>    
    `
    prodTXT += prodHTML;

    
    
}

document.querySelector(".main-card-holder").innerHTML = prodTXT





