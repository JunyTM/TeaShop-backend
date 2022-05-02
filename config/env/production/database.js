const parse = require('pg-connectiopostgres://mckqvwijdvpjko:b1ae7c1ea1840786236cb32395e274590a66cb5fe0d3e68cf69902ef9c154038@ec2-52-54-212-232.compute-1.amazonaws.com:5432/ddelctbcdlvq6pn-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
    connection: {
    client: 'postgres',
    connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
        rejectUnauthorized: false
        },
    },
    debug: false,
    },
});