(function (window) {
    'use strict';
    var FormHandler = App.FormHandler;
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;

    window.myTruck = myTruck;
    var CheckList = App.CheckList;
    var myTruck = new Truck('KITT', new DataStore());
    var formHandler = new FormHandler(FORM_SELECTOR);
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    // var FORM_SELECTOR = '[data-coffee-order="form"]';
    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var CheckList = App.CheckList;

    formHandler.addSubmitHandler(function (data) {
        myTruck.creatOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });


    console.log(formHandler);
})(window)