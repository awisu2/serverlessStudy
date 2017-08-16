'use strict';

const common = require("modules/common");
const myAws = require("modules/aws");

module.exports.hello = (event, context, callback) => {
    let params = myAws.lambda.event.get.parameters(event);    
    callback(null, myAws.lambda.response.success([event, context, params]));

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
