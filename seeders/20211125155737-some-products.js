'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Catan",
          price: 30,
          description: "bla-bla",
          imageUrl: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-christmas-cactus-schlumbergera-succulent-plant-1_525x700.jpg?v=1636462395",
          categoryId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "iPad",
          price: 499,
          description: "bla-bla",
          imageUrl: "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2021/05/9.-Moon-Cactus.jpg.webp",
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },        
        {
          name: "Christmas Cactus",
          price: 10,
          description: "bla-bla",
          imageUrl: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-christmas-cactus-schlumbergera-succulent-plant-1_525x700.jpg?v=1636462395",
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },       
        {
          name: "Badminton Rackets",
          price: 26,
          description: "bla-bla",
          imageUrl: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-christmas-cactus-schlumbergera-succulent-plant-1_525x700.jpg?v=1636462395",
          categoryId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },       
        {
          name: "Dress",
          price: 99,
          description: "bla-bla",
          imageUrl: "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-christmas-cactus-schlumbergera-succulent-plant-1_525x700.jpg?v=1636462395",
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
