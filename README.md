ngQuantity
======

AngularJS directive that adds a  +/- numeric value changer
-----------------------------------------------------------------


Setup
-----
1. Get the file
    * Download and copy the  `src/ngQuantity.js` file

2. Include the  `src/ngQuantity.js` file in your index.html
3. Include add `ngQuantity` as  a dependency in you app

Something like this:
```
<!doctype html>
<html ng-app="myApp">
<head>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.3/angular.min.js"></script>

    <script>
        var myApp = angular.module('myApp', ['ngQuantity']);
    </script>
    ...
</head>
<body>
    ...
</body>
</html>
```


# Directives


## quantity

Renders an 'quantity' field

```
<quantity  id="amount"
           min="0"
           max="100"
           step="5"
           value="{{ item.qty }}"></quantity>
```


| Attribute  |  Description |
| ------------- | ------------- |
| id  | Unique identifier for this item.  |
| min | Lowest value  |
| max | Highest value|
| step | Incremental change on each step  |
| value | reference to item on scope that needs to be changes. |

## TODO

 * Extend ngModel
 * Add form validators



Grunt
------------
This project is built with GruntJS. To contribute to this project make sure to install node.js and npm.
Assuming npm is installed, run `$ npm install` inside the project directory to install the dependencies and you should
be ready to go.
Once you make a change, use `$ grunt build` inside the project folder to build the distribution files.
The version number is determined from the `package.json` file inside the project directory.


Download on Github
------------------
Version 0.0.1: https://github.com/snapjay/ngQuantity



License
-------

This module is licensed using the MIT License:

```
The MIT License (MIT)

Copyright (c) 2013 Dan Shreim

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```



Credit
------
Dan Shreim <br />
<a href="http://www.twitter.com/snapjay/">@snapjay</a> <br />
http://snapjay.com
If you use the script, please let me know @snapjay;  Don't worry, I won't ask for anything!