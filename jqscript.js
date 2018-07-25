alert('webpack')
define([], function(){

    $(function(){

        // import * as helloWorldComponent from './koscript.js'
        document.body.appendChild(document.createElement('hello-world'))
        ko.components.register('hello-world', helloWorldComponent)
        // ko.applyBindings()
    
    
        var Person = function(name){
            this.name = ko.observable(name)
        };
    
        /**
         * Old way:
         */
        var vm = { /** Note that vm is NOT on global space
            neither are fname, lname and phone */
            fname: ko.observable('David'),
            lname: ko.observable('Shams'),
            phone: ko.observable(4163334444),
            flights: ko.observable([
                {from: 'ORD', to: 'SFO', fnumber: 47},
                {from: 'DXB', to: 'YYZ', fnumber: 95},
                {from: 'WAS', to: 'SVO', fnumber: 47}
            ]),
    
        
            viewModel: (function(){
                var person1 = new Person('David');
                var person2 = new Person('John');
                var people = ko.observableArray([person1, person2]);
                return {
                    people: people
                }
            })()
        }
        ko.applyBindings(vm)
        // ko.applyBindings(viewModel);
    })
})