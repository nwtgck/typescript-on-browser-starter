# typescript-on-browser-starter
[![Netlify Status](https://api.netlify.com/api/v1/badges/4cf13290-0bf6-4e80-a86e-7dd0d5371a5a/deploy-status)](https://app.netlify.com/sites/typescript-on-browser-starter/deploys)

Starter for TypeScript on Web Browser

## Purpose
For users who wants to try TypeScript on Web Browser easily and stress free

## Feature
* Simple as possible
* Source map
* Hot reload

## Quick Start

```bash
# You can change app name
APP_NAME="myapp"
git clone https://github.com/nwtgck/typescript-on-browser-starter.git $APP_NAME
cd $APP_NAME
rm -rf .git
sed -i '' "s/typescript-on-browser-starter/${APP_NAME}/" package.json
sed -i '' "s/Starter for TypeScript on Web Browser/${APP_NAME}/" package.json
npm i
```

## How to change

First, you can serve a develop server as follows.

```bash
npm install
npm run serve
```

Then, you can access to <http://localhost:8080/>, which will be loaded automatically if file changes detected.

You can modify [src/index.ts](src/index.ts) as you want.

## Build

```bash
npm install
npm run build
```

Then, you get `./dist` directory. The file structure should be the following.

```
dist/
├── bundle.js
├── index.html
└── src
    └── index.d.ts
```

`bundle.js` includes an inline source map.
