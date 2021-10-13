Ext.define("GestionStockApp.store.Articles", {
  extend: "Ext.data.Store",
  alias: "store.articles",
  model: "GestionStockApp.model.Article",

  autoLoad: true,
});
