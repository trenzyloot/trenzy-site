export const sneakers = [
    {
        title: "Grey Sneakers",
        desc: "Non-slip & Shock-proof",
        price: 499,
        bestSeller: false,
        img: "sneakers/greysneakers.jpg",
        affLink: "https://amzn.to/3O8dn3q",
    },
    
]

export const formals = [

    
];
export const sports = [
    
];

export const allshoes = [].concat(sneakers, formals, sports);
export const shoes = allshoes.slice(-3);





