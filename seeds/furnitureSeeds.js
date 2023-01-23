const { Furniture } = require('../models');

const furnitureData = [
    {
        name: "French Coffee Table",
        type: "Tables",
        price: 499.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Mahogany Coffee Table",
        type: "Tables",
        price: 399.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Walnut End Table",
        type: "Tables",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Glass Bar Table",
        type: "Tables",
        price: 149.99, 
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Espresso Dining Room Table",
        type: "Tables",
        price: 599.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Poker Table",
        type: "Tables",
        price: 299.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Work Table",
        type: "Tables",
        price: 199.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Cherry Coffee Table",
        type: "Tables",
        price: 249.99,
        image: "https://res.cloudinary.com/dzwbz6u9b/image/upload/v1674500347/samples/xxseo334xxpit43g1zrd.jpg"
      },
      {
        name: "Work Chair",
        type: "Seating",
        price: 179.99
      },
      {
        name: "Stool",
        type: "Seating",
        price: 24.99
      },
      {
        name: "Leather Recliner",
        type: "Seating",
        price: 349.99
      },
      {
        name: "Gaming Chair",
        type: "Seating",
        price: 299.99
      },
      {
        name: "Espresso Dining Chairs",
        type: "Seating",
        price: 99.99
      },
      {
        name: "Sofa",
        type: "Seating",
        price: 699.99
      },
      {
        name: "Loveseat",
        type: "Seating",
        price: 399.99
      },
      {
        name: "Sectional",
        type: "Seating",
        price: 999.99
      },
      {
        name: "Sleeper Sofa",
        type: "Seating",
        price: 799.99
      },
      {
        name: "King Size Bed",
        type: "Sleeping",
        price: 1299.99
      },
      {
        name: "Futon",
        type: "Sleeping",
        price: 299.99
      },
      {
        name: "Racecar Bed",
        type: "Sleeping",
        price: 199.99
      },
      {
        name: "Bunk Bed",
        type: "Sleeping",
        price: 249.99
      },
      {
        name: "Gaming Bed",
        type: "Sleeping",
        price: 299.99
      },
      {
        name: "Hammock",
        type: "Sleeping",
        price: 129.99
      },
      {
        name: "Bed Frame",
        type: "Sleeping",
        price: 199.99
      },
      {
        name: "Tech Smart Bed with LEDs",
        type: "Sleeping",
        price: 2999.99
      },
      {
        name: "Oak Dresser",
        type: "Storage",
        price: 249.99
      },
      {
        name: "MDF Bookshelf",
        type: "Storage",
        price: 19.99
      },
      {
        name: "Tall Bookshelf",
        type: "Storage",
        price: 199.99
      },
      {
        name: "Armoire",
        type: "Storage",
        price: 499.99
      },
      {
        name: "Wall Bookshelf",
        type: "Storage",
        price: 149.99
      },
      {
        name: "Storage Bench",
        type: "Storage",
        price: 89.99
      },
      {
        name: "Night Stand",
        type: "Storage",
        price: 199.99
      },
      {
        name: "Bar Cart",
        type: "Storage",
        price: 399.99
      },
      {
        name: "Bathroom Rug",
        type: "Rugs",
        price: 29.99
      },
      {
        name: "Living Room Rug",
        type: "Rugs",
        price: 199.99
      },
      {
        name: "Kitchen Rug",
        type: "Rugs",
        price: 79.99
      },
      {
        name: "Antique Rug",
        type: "Rugs",
        price: 299.99
      },
      {
        name: "Oriental Rug",
        type: "Rugs",
        price: 349.99
      },
      {
        name: "Turkish Rug",
        type: "Rugs",
        price: 2479.99
      },
      {
        name: "Runner Rug",
        type: "Rugs",
        price: 199.99
      },
      {
        name: "Doormat",
        type: "Rugs",
        price: 49.99
      },
      {
        name: "Gaming Desk",
        type: "Desks",
        price: 299.99
      },
      {
        name: "Work Desk",
        type: "Desks",
        price: 199.99
      },
      {
        name: "Standing Desk",
        type: "Desks",
        price: 249.99
      },
      {
        name: "Floating Desk",
        type: "Desks",
        price: 279.99
      },
      {
        name: "Telephone Desk",
        type: "Desks",
        price: 229.99
      },
      {
        name: "L Shaped Desk",
        type: "Desks",
        price: 199.99
      },
      {
        name: "Vanity Desk",
        type: "Desks",
        price: 179.99
      },
      {
        name: "Cherry Desk",
        type: "Desks",
        price: 249.99
      },
      {
        name: "Oak Desk",
        type: "Desks",
        price: 279.99
      },
      {
        name: "Burl Desk",
        type: "Desks",
        price: 349.99
      }
]

const seedFurniture = () => Furniture.bulkCreate(furnitureData);

module.exports = seedFurniture;