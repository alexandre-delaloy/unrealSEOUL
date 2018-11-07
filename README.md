# 🍉 Front-end starter

This starter will help you ( *I hope* ) to make clean front-end development.
<!-- TOC -->

- [🍉 Front-end starter](#🍉-front-end-starter)
    - [Summary:](#summary)
    - [I - ⚙️ How it works :](#i---⚙️-how-it-works-)
    - [II - 👍 Make it work :](#ii---👍-make-it-work-)
        - [1. Install dependencies :](#1-install-dependencies-)
        - [2. Install gulp *( in global )* :](#2-install-gulp--in-global--)
        - [3. Build and / or watch :](#3-build-and--or-watch-)
    - [III - 📜 Create new files :](#iii---📜-create-new-files-)
        - [1. SCSS ( components )](#1-scss--components-)
        - [2. JS ( scripts )](#2-js--scripts-)
        - [3. HTML](#3-html)
    - [IV - 🏞 Assets](#iv---🏞-assets)
    - [V - 🗄 Dependencies](#v---🗄-dependencies)

<!-- /TOC -->
## Summary:
* I - ⚙️ How it works :
* II - 👍 Make it work :
    1. Install dependencies :
    2. Install gulp ( in global )
    3. Build and / or watch :
* III - 📜 Create new scss and js files :
    1. Tree
    2. Way to create new components files :
        * SCSS
        * JS
* IV - 🗄 Dependencies :
## I - ⚙️ How it works : 
This starter is **used to** : 
1. **Compile** files from a *source* folder to a *public* folder
2. **Copy** the *html* and *assets* files from `src` folder **and paste** them to `public`
3. **Group** styles into a *main style file*, **compiling** and **minifying** it
4. **Idem** for the scripts files
```json
├── public
│   └── .gitkeep
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── js
│   │   ├── app.js
│   │   └── ui.js
│   ├── scss
│   │   ├── global
│   │   │   ├── fonts.scss
│   │   │   ├── global.scss
│   │   │   ├── mixins.scss
│   │   │   ├── reset.scss
│   │   │   └── variables.scss
│   │   └── master.scss
│   ├── index.html
│   └── test.html
├── .babelrc
├── .eslintrc.json
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md
```
## II - 👍 Make it work :
### 1. Install dependencies :
* use `yarn` or `npm install`
 ( *I assume that you have already installed `yarn` or `npm`* )
 > Now you have **all your dependencies** installed.
### 2. Install gulp *( in global )* :
* use `yarn global add gulp` **or** `npm install -g gulp`
> Now you can run **gulp tasks** !
### 3. Build and / or watch :
* use `gulp build` to build your work **one time** ( *open `public/index.html` in your browser after that* )
* or simply `gulp` to build it **in a loop** and actualize your modifications ( *using BrowserSync* 🔄 )
> Now you have your dev environment **ready to work** 👍 
## III - 📜 Create new files :

### 1. SCSS ( components )
* Go to `src/scss`
* Create your file with this structure: `_filename.scss` 
* Don't forget to import this new file in `master.scss` like that: `@import: 'component/filename'`
### 2. JS ( scripts )
* Go to `src/js`
* Create your file with this structure: `filename.js` 
* Don't forget to import this new file in `app.js` like that: `import: './filename'`
### 3. HTML 
* Go to `src/`
* Create your file
* Don't forget to copy the style and script link:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/master.min.css">
</head>
<body>
    <!-- Code goes here -->
    <script src="js/app.min.js" charset="UTF-8"></script>
</body>
</html>
```
## IV - 🏞 Assets
Just put your assets ( images, music, videos, fonts ) in the `src/assets` folder, and it'll be copied in `public`.
## V - 🗄 Dependencies 
`package.json`
```json
"devDependencies": {
    "@babel/core": "^7.1.2",
    "@babel/preset-env": "^7.1.0",
    "browser-sync": "^2.26.3",
    "eslint": "^5.7.0",
    "eslint-plugin-import": "^2.14.0",
    "gulp": "^3.9.1",
    "gulp-babel": "^8.0.0",
    "gulp-clean-css": "^3.10.0",
    "gulp-htmlmin": "^5.0.1",
    "gulp-plumber": "^1.2.0",
    "gulp-rename": "^1.4.0",
    "gulp-resolve-url": "0.0.2",
    "gulp-sass": "^4.0.2",
    "gulp-sourcemaps": "^2.6.4",
    "gulp-uglify-es": "^1.0.4",
    "node-sass": "^4.9.4",
    "webpack-stream": "^5.1.1"
  }
```