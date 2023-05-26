const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 sequelize.define('can', {
  id: {  type: DataTypes.INTEGER, primaryKey: true, allowNull: false, },
  name: { type: DataTypes.STRING, allowNull: true, },
  bred_for: { type: DataTypes.STRING, allowNull: true, },
  breed_group: { type: DataTypes.STRING, allowNull: true,  },
  life_span: { type: DataTypes.STRING, allowNull: true,  },
  temperament: { type: DataTypes.STRING, allowNull: true,  },
  origin: { type: DataTypes.STRING, allowNull: true,  },
  reference_image_id: { type: DataTypes.STRING, allowNull: true,  },
  weight: { type: DataTypes.JSONB, allowNull: true, field: 'weight',  },
  height: {  type: DataTypes.JSONB,  allowNull: true,  field: 'height',  },
  });
};