// node test function for lambda
// ex: node test.js hello
// if first argument is "all", execute all tests.
let common = require("./node-tools/common");
common.env.addNodePath(__dirname);


// test settings
let tests = {
    hello: {
        file: "handler",
        function: "hello",
    },
    hello2: {
        file: "handler",
        function: "hello",
        event: {
            httpMethod: "PUT",
            body: common.uri.query.encode({
                "あいうえお": "かきくけこ",
                "abc": "かきくけこ",
                "spase spase": "かきくけこ",
                "hoge_mode": "かきくけこ",
            }),
        },
    },
};

let myAws = require("node-tools/aws");

options = {
    names : common.arg.get(),
    def: myAws.lambda.test.def,
};
myAws.lambda.test.local(tests, options);

