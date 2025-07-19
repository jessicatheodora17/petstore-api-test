# petstore-api-test
Hi, Welcome to petstore's API Automation Test!
the framework of this API Automation Test are using Mocha and Chai as BDD / TDD assertion library.
this API Automation Test's code base are using Javascript

## Requirement
to Run this repo, you will need this following:
- nodejs

## Installment
run command `npm i` (will install devDependencies on file `package.json`)

## How to run the test
- run command `npm run test` to run all (it will also generate a Mochawesome report for you)
- run command `npm run testNoReport` to run all (will just return the result on terminal)
- run command `npm run testGetEndpoint` to run all test that having the tag @GET
- run command `npm run testPostEndpoint` to run all test that having the tag @POST

## Report
Report will be generated to folder with this following structure:
- reports > mochawesome > mochawesome.html & mochawesome.json
