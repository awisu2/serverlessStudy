# serverlessStudy
my serverless study samples

<https://serverless.com/>

## install

```bash
npm install -g serverless
```

## easy use

### aws

aws setting <https://serverless.com/framework/docs/providers/aws/guide/credentials/>

```bash
serverless create --template aws-nodejs --path my-service
cd my-service
serverless deploy
```

and edit **serverless.yml**

note: serverless is only deployment tool. not modan js, not on any library.

#### add babel exsample

```shell
npm init
```

```shell
npm i -D babel-cli babel-preset-env
echo '{ "presets": ["env"] }' > .babelrc
mkdir src
cat << EOF >> src/index.js
const Test = class {
  static hello() {
    return 'hello world'
  }
}
console.log(Test.hello())
EOF
babel src -d dist
node dist/index.js
```

```
mv handler.js src/
```
