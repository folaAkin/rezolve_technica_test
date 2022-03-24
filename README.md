#Rezolve automation exercise 

This test framework uses Cypress (Cypress is a next generation front end testing tool built for the modern web) to 
create a Link Trigger engagement  in https://create.rezolve.com/engagement-creation

# Prerequisites
Install Node.js v14.x.x

#Local installation
To get started, navigate to the root directory where the project is zipped and run:
npm install


#To run  the tests:
npm run test 
#or
./node_modules/.bin/cypress run --spec  cypress/integration/specs/link-trigger.spec.js

#Running in headless mode, to run in headed mode,use the command below by passing 
./node_modules/.bin/cypress run --spec  cypress/integration/specs/link-trigger.spec.js --headed

#To view report 
Open report folder, right click on mochawesome.html and open in any browser


#screenshot
if there is any failure the screenshot will be in TestReport folder

#video
recorded video will be in the videos folder

most configurations can be altered or turned off in cypress.json file

