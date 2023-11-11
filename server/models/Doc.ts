import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db";

class Doc extends Model {
  public name!: string;
  public userName!: string;
  public docData!: Buffer; // Assuming docData is a binary data field (LONGBLOB)
}

Doc.init(
  {
    name: {
      type: DataTypes.STRING(20),
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    docData: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Doc",
    tableName: "Docs",
    timestamps: false,
  }
);

export default Doc;
