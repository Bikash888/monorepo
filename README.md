# NEXT JS v10 Skeleton

| Packages         | Description             |
| ---------------- | ----------------------- |
| `consumer`       | consumer section        |
| `owner`          | owner section           |
| `shared`         | shared section          |

# Development

- Create .env file getting reference from .env.example

## Install packages

```
yarn bootstrap
```

## Start app

```
yarn start                //  start all packages 
yarn package:owner        //  start only owner package  
yarn package:consumer     //  start only consumer package  
yarn deploy:gae:owner     //  deploy owner package on google app engine
yarn deploy:gae:consumer  //  deploy owner package on google app engine

```