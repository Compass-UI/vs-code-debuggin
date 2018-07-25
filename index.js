import * as ko from 'knockout'
import * as helloWorldComponent from './hello-world'
// import * as jqscript from './jqscript';
require('./jqscript')

document.body.appendChild(document.createElement('hello-world'))

ko.components.register('hello-world', helloWorldComponent)

ko.applyBindings()
