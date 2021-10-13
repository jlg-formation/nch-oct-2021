(function () {
  "use strict";

  Ext.define("CounterViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.counterviewmodel",
    data: {
      counter: "0",
    },
  });

  Ext.define("CounterViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.counterviewcontroller",

    increment: function () {
      console.log("this: ", this);
      const vm = this.getViewModel();
      console.log("vm: ", vm);
      const counter = +vm.get("counter");
      const newCounter = counter + 1;
      vm.set("counter", newCounter + "");
    },
  });

  Ext.define("CounterView", {
    extend: "Ext.Container",
    xtype: "counterview",
    viewModel: {
      type: "counterviewmodel",
    },
    controller: "counterviewcontroller",
    items: [
      {
        xtype: "label",
        bind: {
          html: "{counter}",
        },
      },
      {
        xtype: "button",
        text: "increment counter",
        handler: "increment",
      },
      {
        xtype: "numberfield",
        name: "counter",
        fieldLabel: "Mon compteur",
        bind: {
          value: "{counter}",
        },
      },
    ],
  });

  Ext.onReady(() => {
    Ext.create("CounterView", {
      renderTo: "extjs",
    });
  });
})();
