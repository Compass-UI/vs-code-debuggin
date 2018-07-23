$(function(){
    var vm = { /** Note that vm is NOT on global space
        neither are fname, lname and phone */
        fname: ko.observable('David'),
        lname: ko.observable('Shams'),
        phone: ko.observable(4163334444),
    }
    ko.applyBindings(vm)
})