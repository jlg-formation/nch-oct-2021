Ext.define("GestionStockApp.view.layout.LegalView", {
  extend: "Ext.Container",
  xtype: "legalview",
  requires: ["Ext.Label"],
  items: [
    {
      xtype: "label",
      html: "<h1>Mentions Légales</h1><p> blablabla...</p>",
    },
  ],
});
