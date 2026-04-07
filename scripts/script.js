let topProds = [
    {
        title: "White Wired Headphones",
        desc: "Style your outfits with music🎵",
        price: 299,
        bestSeller: true,
        img: "earphones/whiteearphones.jpg",
        affLink: "https://amzn.to/4mbZqOi",
    },
    {
        title: "Green Oversized T-Shirt",
        desc: "Perfect for Summers🔥",
        price: 399,
        bestSeller: false,
        img: "oversizedtshirt/greenoversizedtshirt.jpg",
        affLink: "https://amzn.to/4bVE04z",
    },
    {
        title: "Khaki-White Check Shirt",
        desc: "Instantly upgrades your look💸",
        price: 379,
        bestSeller: false,
        img: "checkedshirt/khakiandwhitecheckedshirt.jpg",
        affLink: "https://amzn.to/41mesaL",
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
        title: "Grey Polo T-Shirt",
        desc: "Perfect for Summers🔥",
        price: 449,
        bestSeller: false,
        img: "polos/greypolo.jpeg",
        affLink: "https://amzn.to/4vkjJNW",
    },
    
    
    
    {
        title: "Grey Sneaker Shoe",
        desc: "Comfort + Perfect for casual outfits👟",
        price: 499,
        bestSeller: false,
        img: "shoes/greysneaker.jpg",
        affLink: "https://amzn.to/48yQf4S",
    },
    {
        title: "Black-White Tee Combo",
        desc: "Layering Combo🔥 Minimal. Clean. Bold.",
        price: 499,
        bestSeller: false,
        img: "tshirts/bwtee.jpg",
        affLink: "https://amzn.to/4dsLsFA",
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





