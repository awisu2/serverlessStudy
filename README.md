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

#### config custom

```shell
npm init
npm i -D js-yaml fs
```

**attention: this code delete serverless.yml comments**

**serverless.yml**

```shell
node << EOF
let yaml = require('js-yaml')
let fs = require('fs')
let fileName = 'serverless.yml'

let f = fs.readFileSync(fileName, 'utf8')

let config = yaml.safeLoad(f);
config.provider.profile = 'serverless'
config.provider.region = 'ap-northeast-1'
config.provider.memorySize = 128
config.provider.timeout = 3
config.provider.deploymentBucket = {}
// config.provider.deploymentBucket.name = 'my_bucket'
config.provider.deploymentBucket.serverSideEncryption = 'AES256'
config.exclude = [
  'src/**',
  'dist/test/**',
]
config.functions = {
  'hello': {
    'handler': 'dist/handler.hello',
    'events': [{
      'http': {
        path: 'hello',
        method: 'get',
        cors: true
      }
    }]
  }
}

let _config = yaml.dump(config)

console.log('>>>> before custom ' + fileName + ' >>>>')
console.log(f)
console.log('<<<< before custom ' + fileName + ' <<<<')
fs.writeFileSync(fileName, _config)
EOF
```

**package.json**


```bash
node << EOF
let fs = require('fs')
let fileName = 'package.json'

let f = fs.readFileSync(fileName, 'utf8')
let config = JSON.parse(f)
config.scripts = config.scripts ? config.scripts : {}
let scripts = {
  build : 'babel src -d dist',
  dev : 'npm run build -- -w'
}
for(let key in scripts) {
  config.scripts[key] = scripts[key]
}
let _config = JSON.stringify(config, null, 2)

fs.writeFileSync(fileName, _config)
EOF
```

