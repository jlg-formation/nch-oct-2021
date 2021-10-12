Ext.define("GestionStockApp.view.layout.NotFoundView", {
  extend: "Ext.Container",
  xtype: "notfoundview",
  requires: ["Ext.Label"],
  layout: {
    type: "vbox",
    align: "center",
    pack: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Oups... Page not found</h1>",
    },
    {
      xtype: "button",
      cls: "btn-primary",
      text: "Accueil",
      scale: "large",
      handler: function () {
        const ctrl = this.up("mainview").getController();
        ctrl.redirectTo("home", true);
      },
    },
  ],
});
