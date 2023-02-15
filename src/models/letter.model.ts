import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { LetterTemplate } from '@interfaces/letter.interface';

export type LetterTemplateCreationAttributes = Optional<LetterTemplate, 'letter_template_no'>;

export class LetterTemplateModel
  extends Model<LetterTemplate, LetterTemplateCreationAttributes> implements LetterTemplate {
  public letter_template_no: number;
  public ja_text: string;
  public ko_text: string;
}

export default function (sequelize: Sequelize): typeof LetterTemplateModel {
  LetterTemplateModel.init(
    {
      letter_template_no: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ja_text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      ko_text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'letter_template',
      sequelize,
    },
  );

  return LetterTemplateModel;
}
