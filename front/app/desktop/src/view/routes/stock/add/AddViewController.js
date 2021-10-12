Ext.define("GestionStockApp.view.stock.AddViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.stock_addviewcontroller",

  onSubmit: function () {
    const form = this.getView();
    console.log("form: ", form);
    const values = form.getValues();
    const article = Ext.create("GestionStockApp.model.Article", values);
    console.log("article: ", article);
    console.log("article.id: ", article.id);
    article.save();
    // reload the store
    const store = Ext.StoreManager.lookup("Articles");
    console.log("store: ", store);
    store.load();
    // redirect
    const ctrl = form.up("mainview").getController();
    ctrl.redirectTo("stock_list", true);
  },
});
