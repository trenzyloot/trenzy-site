export const jeans = [
    {
        title: "Light Blue Straight Fit Jeans",
        desc: "Minimal jeans that go with everything",
        price: 425,
        bestSeller: true,
        img: "jeans/lightbluejeans.jpg",
        affLink: "https://amzn.to/4t2OaXo",
    },
    
]

export const trousers = [

    
];
export const joggers = [
    
];

export const allbottoms = [].concat(jeans, trousers, joggers);
export const bottoms = [].concat(jeans.slice(-1), trousers.slice(-1), joggers.slice(-1));




