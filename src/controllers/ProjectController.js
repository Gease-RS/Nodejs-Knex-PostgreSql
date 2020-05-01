const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try { 
            const { user_id } = req.query;

            const query = knex('projects')

            if (user_id) {
                query.where({ user_id })
            }

            const results = await query

            return res.json(results)
        } catch (error) {
            next(error)
        }
    }
}