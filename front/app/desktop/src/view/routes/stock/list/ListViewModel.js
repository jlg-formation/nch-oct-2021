Ext.define("GestionStockApp.view.stock.ListViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.stock_listviewmodel",

  formulas: {
    // We'll explain formulas in more detail soon.
    hasSelectedArticle: {
      bind: {
        selectedArticles: "{selectedArticles}",
        selection: "{articleGrid.selection}",
      },

      get: function (data) {
        console.log("hasSelectedArticle update");
        console.log("data: ", data);
        return data.selectedArticles.length > 0;
      },
    },

    selectedArticles: {
      bind: {
        selection: "{articleGrid.selection}",
      },

      get: function (data) {
        console.log("selectedArticles update");
        console.log("arguments", arguments, this);
        const view = this.getView();
        console.log("view: ", view);
        const grid = view.query("grid")[0];
        console.log("grid: ", grid);
        const selectable = grid.getSelectable();
        const items = selectable._selected.items;
        console.log("items: ", items);
        return items;
      },
    },
  },
});
