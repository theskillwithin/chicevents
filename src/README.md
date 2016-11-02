# HeartCup

Developed by Brandastic.com

***

## Frontend

contributors:  Austin, Nick

HTML5, CSS3

Using similar structure to https://github.com/DevTips/DevTips-Starter-Kit

Composer, Bower, NPM, Gulp.

### Fonts

hmm currently font files are just being thrown into /assets/css need to also have build move font files. 

### Jade

http://naltatis.github.io/jade-syntax-docs/

Jade  (soon to be renamed to pug) is used for the HTML layout.  Jade is used to import the header and footer and other things to organize.  The structure of Jade is very similar to the structure of the SASS files, you will immediatly know what part of the SASS file a class is in because it is written in the same order as the Jade files.  Also you will know everything that is responsible for that page is being taken care of in the coorisponding .sass file (except somtimes for fonts and generale stuff);

### SASS

Each jade file coorisponds to a sass file. 

```
_header.jade ---> assets/css/_header.sass

assets/4-pages/_page-home.sass -->  _index.jade
```

#### main.sass

main.sass is where we import all our sass and scss files.  please be sure to use an underscore in front of all files that are to be imported and not compiled on their own. 

#### 1-tools/

in the tools folder:

We use _fonts.scss to define our @font-face

_normalize.scss is not being imported into our main.css, normalise is added via bower depency and is added to the builds vendor.css

We use _vars.scss to set our variables such as colors.

Bourbon can be used if the import uncommented in the main.sass

#### 2-basics

Stuff in here are for general things, and can be overridden with specificity.  But if say you wanted to change what every p element does by default on all pages this is where you would edit it. 

_body-element.sass is simply used to define site wide styles on the body element

_buttons.sass example buttons that can be imported, or renamed to _buttons.sass if you have common buttons you use around the site

__links.sass site wide styles for anchor <a> tag.

_selection-colors.sass  our selection colors put here (ie highlighted text color).

_typeography.sass  here is where we define our global h1-h6, strong, em, p, hr styles.

#### 3-modules

This is where you would keep your custom mixins ready for import.  You can see we have some examples in place.  If there is a task you find you are doing repetitavly and can be made a mixin it is best to add here and to your main project files for use in future projects. 

#### 4-pages

All the specific styles for each page and sections such as header and footer.   Also a _grid.sass can be placed here to create a grid system or define the defaults for section tags.  

### img

Optimized image assets go here.  Unoptimized images not used to build with should be placed in a folder outside the src.

### JS

AngularJS?

### Tree

[ used linux/mac command tree to generate ]
```
.
|_____footer.jade
|_____head.jade
|_____header.jade
|____assets
| |____css
| | |____1-tools
| | | |_____fonts.scss
| | | |_____normalize.scss
| | | |_____vars.sass
| | |____2-basics
| | | |_____body-element.sass
| | | |_____example-buttons.sass
| | | |_____links.sass
| | | |_____selection-colors.sass
| | | |_____typography.sass
| | |____3-modules
| | | |_____example-flex-video.sass
| | | |_____example-fork-tag.sass
| | | |_____example-module-name-lockup.sass
| | |____4-pages
| | | |_____grid.sass
| | | |_____header.sass
| | | |_____page-home.sass
| | |____main.sass
| | |____Omnes_GirlScouts-Medium.eot
| | |____Omnes_GirlScouts-Medium.ttf
| | |____Omnes_GirlScouts-Medium.woff
| | |____OpenSansLight-Italic.eot
| | |____OpenSansLight-Italic.ttf
| | |____OpenSansLight-Italic.woff
| | |____ProximaNova-Regular.eot
| | |____ProximaNova-Regular.ttf
| | |____ProximaNova-Regular.woff
| | |____ProximaNova-Semibold.eot
| | |____ProximaNova-Semibold.ttf
| | |____ProximaNova-Semibold.woff
| |____img
| | |____header-banner.jpg
| | |____logo.png
| | |____search-icon.png
| | |____tools.png
| |____js
| | |____functions.js
| | |____jquery-2.1.4.min.js
|____favicon.ico
|____header.jade
|____index.html
|____index.jade
|____README.md
```

### Backend

Contributors: Matt

Laravel

Apairy 

Contentify
