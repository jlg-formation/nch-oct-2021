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
        submit: {
          handler: "onSubmit",
        },
        cancel: "onCancel",
      },
      items: [
        {
          xtype: "textfield",
          label: "Nom",
          name: "name",
          required: true,
          requiredMessage: "oups... il faut remplir le nom de l'article.",
        },
        {
          xtype: "numberfield",
          label: "Prix (€)",
          minValue: 0,
          value: 0,
          name: "price",
          required: true,
        },
        {
          xtype: "spinnerfield",
          label: "Quantité",
          minValue: 0,
          stepValue: 1,
          cycle: true,
          name: "qty",
          required: true,
        },
      ],
    },
  ],
});
