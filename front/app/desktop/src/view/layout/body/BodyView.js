Ext.define("GestionStockApp.view.layout.body.BodyView", {
  extend: "Ext.Container",
  xtype: "bodyview",
  layout: {
    type: "card",
    animation: {
      type: "flip",
    },
    listeners: {
      activeitemchange: function (...args) {
        console.log("activeitemchange args: ", args);
        console.log("this: ", this);
      },
    },
  },
});
