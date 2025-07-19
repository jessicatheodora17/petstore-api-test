const assert = require('chai').expect

const apiFunc = require('../apis/pet_api')

const testCase={
	describe: 'Get Pet Data Based on the Status',
	positive: {
		availPet : 'As a User, I want to be able to see pets with Available status',
        pendingPet : 'As a User, I want to be able to see pets with Pending status'
	}
}

describe(`@GET @tesGetPetData ${testCase.describe}`, () => {
	it(`@GET @tesGetPetData  ${testCase.positive.availPet}`, async () => {
		const response = await apiFunc.getPetData('available')
        const allAvailable = response.body.every(pet => pet.status === 'available') //use this to ensure all status in the json response body equals to Available
		assert(response.status).to.equal(200, 'success')
        assert(allAvailable).to.be.true
	})
    it(`@GET @tesGetPetData  ${testCase.positive.pendingPet}`, async () => {
		const response = await apiFunc.getPetData('pending')
        const allAvailable = response.body.every(pet => pet.status === 'pending') //use this to ensure all status in the json response body equals to Pending
		assert(response.status).to.equal(200, 'success')
        assert(allAvailable).to.be.true
	})
})
