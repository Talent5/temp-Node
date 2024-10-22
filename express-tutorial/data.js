//create data of products then people
//create data of products

    const products = [
        {
        id: 1,
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
        },
        {
        id: 2,
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
        },
        {
        id: 3,
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
        },
        {
        id: 4,
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
        },
    ]
    //create data of people
    const people = [
            {
            id: 1,
            name: 'Talent',
            age: 23,
            occupation: 'Software Engineer',
            },
            {
            id: 2,
            name: 'John',
            age: 25,
            occupation: 'Doctor',
            },
            {
            id: 3,
            name: 'Jane',
            age: 30,
            occupation: 'Nurse',
            },
            {
            id: 4,
            name: 'Doe',
            age: 35,
            occupation: 'Teacher',
            }
        ]

    module.exports = { products, people };