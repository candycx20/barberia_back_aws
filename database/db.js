import {Sequelize} from 'sequelize'

const db = new Sequelize('barberia', 'admin', 'Q3HH7DQ6',{
    host:'database-estudiante.chagsyu6kyup.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    port:'3308'
})

export default db