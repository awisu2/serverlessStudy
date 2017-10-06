```
npm i -S msgpack-lite
npm i -D serverless-apigw-binary
```

## add settings

add plugin 'serverless-apigw-binary'  
add custom 'types' 'application/x-msgpack'

```shell
node << EOF
let yaml = require('js-yaml')
let fs = require('fs')
let fileName = 'serverless.yml'

let f = fs.readFileSync(fileName, 'utf8')

let config = yaml.safeLoad(f);
if(!('plugins' in config)) config.plugins = []
console.log(config, config.plugins)
let plugins = [
  'serverless-apigw-binary'
]
for(let i in plugins) {
  if(config.plugins.includes(plugins[i])) {
    continue
  }
  config.plugins.push('serverless-apigw-binary')
}
if(!('custom' in config)) config.custom = {}
config.custom.apigwBinary = {
  'types': [
    'application/x-msgpack'
  ]
}
let _config = yaml.dump(config)

console.log('>>>> before custom ' + fileName + ' >>>>')
console.log(f)
console.log('<<<< before custom ' + fileName + ' <<<<')
fs.writeFileSync(fileName, _config)
EOF
```
