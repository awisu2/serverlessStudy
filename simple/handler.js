module.exports.hello = (event, context, callback) => {
  callback(null, {
    isBase64Encoded : false,
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      message: 'hello world',
      event: event,
      context: context
    })
  })
};
