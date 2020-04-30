module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      user: "postgres",
      password: "postgres"
    },
    migrations: {
      tableName: 'knex_igrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
}
