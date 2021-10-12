Ext.define("GestionStockApp.view.routes.HomeView", {
  extend: "Ext.Container",
  xtype: "homeview",
  requires: ["Ext.Label"],
  layout: {
    type: "vbox",
    align: "center",
    pack: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Gérer efficacement votre stock !</h1>",
    },
    {
      xtype: "button",
      cls: "btn-primary",
      text: "Voir le stock",
      scale: "large",
      handler: function () {
        const ctrl = this.up("mainview").getController();
        ctrl.redirectTo("stock_list", true);
      },
    },
  ],
});
