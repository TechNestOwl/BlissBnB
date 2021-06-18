"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Homes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.STRING,
			},
			host: {
				type: Sequelize.STRING,
			},
			bedrooms: {
				type: Sequelize.INTEGER,
			},
			bathrooms: {
				type: Sequelize.INTEGER,
			},
			guests: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Homes");
	},
};
