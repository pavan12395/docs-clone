import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

class User extends Model {
  public name!: string;
  public password!: string;
}

User.init(
  {
    name: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "Users",
    timestamps: false, // Set this to true if you want Sequelize to automatically manage createdAt and updatedAt fields
  }
);

export default User;
