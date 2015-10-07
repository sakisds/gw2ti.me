# gw2ti.me
A webapp for Guild Wars 2 World Boss timers. The website is using Angular.js and it's running purely on the browser.

# Features
* Timers for all bosses, list of upcoming events.
* Responsive design.
* Written in angular, interface is pure CSS.

# Building
This project uses Grunt and Bower to handle compiling. To begin, install the node dependencies:
```
$ npm install
```

Then use bower to install the frontend libraries:
```
$ bower install
```

Finally you can use grunt to build the website. To make a development build you can use `grunt dev` and for a production
build `grunt release`.

# To-do list
* Maps in location tooltips.
* Mark daily chests.
* Some kind of notifications?

# License
This project is licensed under the MIT License: 

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Dependencies
The following libraries are used, both licensed under the MIT License:
* [Angular.js](https://angularjs.org/)