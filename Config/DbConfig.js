import { Sequelize } from "sequelize";
const sequelize = new Sequelize( 'test', 'root', '0321', {
    host: 'localhost',
    dialect:  'mysql',
    logging:false,
  });

sequelize.sync();
export default sequelize