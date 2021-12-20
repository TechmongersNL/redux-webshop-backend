'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Clothing",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Plants",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Books",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Music",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Furniture",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Games",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sport",
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
