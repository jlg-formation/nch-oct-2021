Ext.define("GestionStockApp.view.routes.stock.ListView", {
  extend: "Ext.Container",
  xtype: "stock_listview",
  layout: {
    type: "vbox",
    align: "center",
  },
  controller: { type: "stock_listviewcontroller" },
  viewModel: {
    type: "stock_listviewmodel",
  },
  items: [
    {
      xtype: "label",
      html: "<h1>Liste des articles</h1>",
    },
    {
      xtype: "container",
      flex: 1,
      layout: {
        type: "vbox",
        align: "left",
      },
      items: [
        {
          xtype: "panel",
          items: [
            {
              xtype: "button",
              text: "Ajouter",
              handler: function () {
                const ctrl = this.up("mainview").getController();
                ctrl.redirectTo("stock_add", true);
              },
            },
            {
              xtype: "button",
              text: "Supprimer",
              handler: "removeArticles",
              bind: {
                hidden: "{!hasSelectedArticle}",
              },
            },
          ],
        },
        {
          xtype: "grid",
          plugins: "responsive",

          flex: 1,
          title: "Liste des articles",

          reference: "articleGrid",

          store: Ext.create("GestionStockApp.store.Articles"),
          columnLines: true,

          selectable: {
            checkbox: true,
            // mode: "multi",
            toggleOnClick: true,
            deselectable: true,
          },

          listeners: {
            select: "onSelect",
            deselect: "onDeselect",
          },

          columns: [
            {
              text: "Nom",
              dataIndex: "name",
              responsiveConfig: {
                "width >= 600": {
                  width: 400,
                },
                "width < 600": {
                  width: 120,
                },
              },
            },
            {
              text: "Prix",
              dataIndex: "price",
              width: 80,
              align: "right",
              renderer: Ext.util.Format.numberRenderer("0.00 €"),
            },
            {
              text: "Quantité",
              dataIndex: "qty",
              align: "right",
              width: 80,
            },
          ],
        },
      ],
    },
  ],
});
