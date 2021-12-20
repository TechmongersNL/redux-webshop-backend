'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          author: "Anna",
          content: "Super nice, had a lot of fun playing with my friends!",
          stars: 5, 
          productId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Gui",
          content: "Very good product, but quite expensive, it should be somewhat cheaper",
          stars: 4, 
          productId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Flora",
          content: "Nice cactus, the problem was the delivery, the box was quite demaged and it damaged the plant as well",
          stars: 3, 
          productId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Robin",
          content: "nice rackets",
          stars: 5, 
          productId: 4,
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author: "Louise",
          content: "The dress is way too expensive for the quality. Fabric is thin and cheap. I don't recommend!",
          stars: 1, 
          productId: 5,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
