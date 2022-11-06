module.exports = {
    dev:{
        connectionString:'postgresql://postgres:docker@localhost:5432/wallet',
        PORT:'3002'
    },
    production:{
        connectionString: process.env.PSQL_DATABASE,
        PORT:process.env.PORT
    }
}