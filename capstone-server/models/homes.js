'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Homes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Homes.init({
    property_name: DataTypes.STRING,
    host: DataTypes.STRING,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    guests: DataTypes.INTEGER,
    description: DataTypes.STRING,
    space: DataTypes.STRING,
    other: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Homes',
  });
  return Homes;
};