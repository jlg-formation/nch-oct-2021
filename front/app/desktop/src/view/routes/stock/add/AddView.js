Ext.define("GestionStockApp.view.routes.stock.AddView", {
  extend: "Ext.Container",
  xtype: "stock_addview",
  requires: ["Ext.Label"],
  layout: {
    type: "vbox",
    align: "center",
    pack: "center",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Ajout d'un article</h1>",
    },
    {
      xtype: "formpanel",
      controller: "stock_addviewcontroller",
      buttons: {
        submit: "onSubmit",
      },
      items: [
        {
          xtype: "textfield",
          label: "Nom",
          name: "name",
          value: "Tournevis",
        },
        {
          xtype: "numberfield",
          label: "Prix (€)",
          minValue: 0,
          value: "1.23",
          name: "price",
        },
        {
          xtype: "spinnerfield",
          label: "Quantité",
          minValue: 0,
          stepValue: 1,
          cycle: true,
          value: 1,
          name: "qty",
        },
      ],
    },
  ],
});
