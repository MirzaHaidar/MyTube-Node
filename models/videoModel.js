const { sequelize, Sequelize } = require("../config/database");

const Video = sequelize.define(
  "videos",
  {
    video_id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.DataTypes.STRING,
    },
    description: {
      type: Sequelize.DataTypes.TEXT,
    },
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      // allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Video;
