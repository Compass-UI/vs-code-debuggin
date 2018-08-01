/// <reference path="./node_modules/jquery/dist/jquery.js" />
/** <reference path="path/to/jquery.d.ts" /> */

import HelloWorld from './simple-mport'

class UsejQuery {
    constructor(hello: HelloWorld){
        console.log(hello.show())
    }
}

export default UsejQuery;