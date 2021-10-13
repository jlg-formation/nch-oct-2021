console.log(Ext.ClassManager.aliasToName);

Ext.require("Ext.form.Panel");
Ext.require("Ext.field.Spinner");
Ext.require("Ext.Responsive");
Ext.require("Ext.plugin.*");

Ext.define("GestionStockApp.Application", {
  extend: "Ext.app.Application",
  name: "GestionStockApp",
  requires: ["GestionStockApp.*"],
  defaultToken: "home",
  models: ["Article"],
  stores: ["Articles"],

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    this.removeSplash();
    var whichView = "mainview";
    Ext.Viewport.add([{ xtype: whichView }]);
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
