let topProds = [
    {
        title: "Light Blue Straight Fit Jeans",
        desc: "Minimal jeans that go with everything",
        price: 425,
        bestSeller: true,
        img: "jeans/lightbluejeans.jpg",
        affLink: "https://amzn.to/4t2OaXo",
    },
    {
        title: "Red Polo T-Shirt",
        desc: "Breathable + under budget",
        price: 399,
        bestSeller: false,
        img: "polos/redpolo.jpeg",
        affLink: "https://amzn.to/3O0m7sj",
    },
    {
        title: "Black Polo T-Shirt",
        desc: "Bughet + Style Combo",
        price: 399,
        bestSeller: true,
        img: "polos/blackpolo.jpg",
        affLink: "https://amzn.to/4cqxNhc",
    },
    
    {
        title: "White & Teal Polo T-Shirt",
        desc: "Trending right now👀",
        price: 299,
        bestSeller: false,
        img: "polos/stripepolo.jpeg",
        affLink: "https://amzn.to/4dxr5Hg",
    },
    {
        title: "Blue Polo T-Shirt",
        desc: "Comfort + Breathable",
        price: 498,
        bestSeller: false,
        img: "polos/bluepolo.jpeg",
        affLink: "https://amzn.to/4bVzK5g",
    },

    {
        title: "Lavender Polo T-Shirt",
        desc: "Summers coolest fit🔥",
        price: 379,
        bestSeller: false,
        img: "polos/lavenderpolo.png",
        affLink: "https://amzn.to/41h3oM4",
    },
];


prodTXT = ``;

for (let i = 0; i < topProds.length; i++) {
    console.log(i);
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





