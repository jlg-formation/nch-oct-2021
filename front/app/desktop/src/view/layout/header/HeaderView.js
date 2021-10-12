Ext.define("GestionStockApp.view.layout.header.HeaderView", {
  extend: "Ext.Toolbar",
  xtype: "headerview",
  cls: "headerview",
  controller: Ext.create("Ext.app.ViewController", {
    gotoHome: function () {
      console.log("controller", this);
      this.redirectTo("home", true);
    },
  }),
  items: [
    {
      xtype: "button",
      text: "Gestion Stock",
      iconCls: "header-icon",
      handler: "gotoHome",
    },
  ],
});
