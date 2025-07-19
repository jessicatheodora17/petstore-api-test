const supertest = require('supertest')
const config = require('../utils/config')

const api = supertest(config.baseUrl)

const getPetData = (status) =>
	api
		.get('pet/findByStatus')
		.set('accept', 'application/json')
		.set('Content-Type', 'application/json')
        .query({status: status})

const addPetData = (payload) =>
    api
        .post('pet')
        .set('accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(payload)

module.exports = {
	getPetData,
    addPetData
}
