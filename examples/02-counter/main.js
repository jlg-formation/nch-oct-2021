(function () {
  "use strict";

  Ext.define("CounterViewModel", {
    extend: "Ext.app.ViewModel",
    alias: "viewmodel.counterviewmodel",
    data: {
      counter: "0",
    },
  });

  Ext.define("CounterView", {
    extend: "Ext.Container",
    xtype: "counterview",
    viewModel: {
      type: "counterviewmodel",
    },
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
        handler: function () {
          console.log("this: ", this);
          const vm = this.up("counterview").getViewModel();
          console.log("vm: ", vm);
          const counter = +vm.get("counter");
          const newCounter = counter + 1;
          vm.set("counter", newCounter + "");
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