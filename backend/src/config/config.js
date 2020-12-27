module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'database',
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASS || 'password',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './database.sqlite'
        }
    }
}