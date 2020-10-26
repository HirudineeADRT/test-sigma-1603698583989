const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    try {
        let data1234 = await ses.sendEmail({
            Source: "hirudineel@gmail.com",
            Destination: {
                ToAddresses: ['hirudinee@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "this is a test message"
                },
                Body: {
                    Text: {
                        Data: `Hi,
    This message is a test`
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};