const assert = require('chai').expect

const apiFunc = require('../apis/pet_api')
const addPetData = require('../data/payload/add_pet_data.json')
const utilsHelp = require('../utils/helper')

const testCase={
	describe: 'Add Pet Data',
	positive: {
		addValidAvailPetData : "As a User, I want to be able to add Pet's Data with status Available"
	}
}

let manipulatedData

describe(`@POST @testAddPetData ${testCase.describe}`, () => {
    // will add data manipulation so it can create random, fresh data each time and each case (if there's any in near future)
    beforeEach('Data manipulation', () => {
        manipulatedData = JSON.parse(JSON.stringify(addPetData.addValidAvailablePetData))
        manipulatedData.id = utilsHelp.genEpochTimeInMilliseconds()
        manipulatedData.name = utilsHelp.genRandom5CharName()
    })
	it(`@POST @testAddPetData  ${testCase.positive.addValidAvailPetData}`, async () => {
		const response = await apiFunc.addPetData(manipulatedData)
		assert(response.status).to.equal(200, 'success')
	})
})
