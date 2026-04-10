export const checkshirts = [
    {
        title: "Khaki-White Checkerd Shirt",
        desc: "Casual button-down shirt",
        price: 458,
        bestSeller: true,
        img: "checkedshirts/khakiandwhitecheckedshirt.jpg",
        affLink: "https://amzn.to/41n1U2U",
    },
    {
        title: "Black Checked Shirt",
        desc: "Ideal for casual Fridays, or date nights",
        price: 499,
        bestSeller: false,
        img: "checkedshirts/blackcheckedshirt.jpg",
        affLink: "https://amzn.to/48EdLgT",
    },
    {
        title: "Purple-White Checked Shirt",
        desc: "Stylish Full Sleeves Printed Checkered Casual Shirt",
        price: 378,
        bestSeller: false,
        img: "checkedshirts/purpleandwhitecheckedshirt.jpg",
        affLink: "https://amzn.to/4t4wiLN",
    },
    
]

export const henleys = [
    {
        title: "Black Henley T-Shirt",
        desc: "Easy to style for casual, streetwear, or smart-casual outfits",
        price: 399,
        bestSeller: false,
        img: "henleys/blackhenley.jpg",
        affLink: "https://amzn.to/4cADnh6",
    },
    
];
export const plainshirts = [
    
];



export const polos = [
    {
        title: "Grey Polo T-Shirt",
        desc: "Perfect for Summers🔥",
        price: 449,
        bestSeller: false,
        img: "polos/greypolo.jpeg",
        affLink: "https://amzn.to/4vkjJNW",
    },
    {
        title: "Black Polo T-Shirt",
        desc: "Limited Time Deal⏰",
        price: 399,
        bestSeller: false,
        img: "polos/blackpolo.jpg",
        affLink: "https://amzn.to/4mkPBxN",
    },
    {
        title: "Mid-Blue Polo T-Shirt",
        desc: "Multiple sizes and colors availlable",
        price: 498,
        bestSeller: false,
        img: "polos/bluepolo.jpeg",
        affLink: "https://amzn.to/4vqAqas",
    },
];


export const plaintshirts = [
    {
        title: "Solid Colored Plain Tee",
        desc: "Multi Color available",
        price: 495,
        bestSeller: false,
        img: "plaintshirts/plaintee.jpg",
        affLink: "https://amzn.to/4vh3BMY",
    },
    
]





export const oversizedtshirts = [
    {
        title: "Green Printed Tee",
        desc: "Loose & Baggy Fit. Drop-Shoulder Style",
        price: 399,
        bestSeller: false,
        img: "oversizedtshirts/greenoversizedtee.jpg",
        affLink: "https://amzn.to/4dIjJkt",
    },
    {
        title: "Black Printed Tee | Round Neck",
        desc: "Trendy, Oversized & Aesthetic Look",
        price: 349,
        bestSeller: false,
        img: "oversizedtshirts/blackroundoversizedtee.jpg",
        affLink: "https://amzn.to/4smEqps",
    },
    {
        title: "Black Printed Tee | Crew Neck",
        desc: "Trendy, Oversized & Loose Fit",
        price: 385,
        bestSeller: false,
        img: "oversizedtshirts/blackcrewoversizedtee.jpg",
        affLink: "https://amzn.to/4mlpTt0",
    },
];

export const alltops = [].concat(checkshirts, henleys, plainshirts, plaintshirts, polos, oversizedtshirts);
export const tops = [].concat(polos.slice(-1), oversizedtshirts.slice(-1), checkshirts.slice(-1));


