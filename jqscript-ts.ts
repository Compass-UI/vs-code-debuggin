/** <reference path="path/to/jquery.d.ts" /> */

import HelloWorld from './simple-mport'

class UsejQuery {
    constructor(hello: HelloWorld){
        console.log('constructor: ')
        console.log(hello.show())
    }
}


let uq = new UsejQuery(new HelloWorld());

export default UsejQuery;