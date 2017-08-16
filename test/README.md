# serverless test

## settings

### change bucket name

change s3 bucket name "serverless.yml".
provider > deploymentBucket > name

it's use by deployment files.

### change url

this sample create api.
so after deployment set url api html/inde.html.
the url serverless teach.

## command

### deploy

```
cd <folder>
sls deploy -v
```

after deploy open html/index.html at browser.

### remove

```
sls remove
```