Ext.define("GestionStockApp.view.stock.AddViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.stock_addviewcontroller",

  onSubmit: function () {
    const form = this.getView();
    console.log("form: ", form);
    const values = form.getValues();
    console.log("values: ", values);
    const article = Ext.create("GestionStockApp.model.Article", values);
    // // const article = new GestionStockApp.model.Article(values);
    console.log("article: ", article);
    console.log("article.id: ", article.id);
    article.save();
    // redirect
    const ctrl = form.up("mainview").getController();
    ctrl.redirectTo("stock_list", true);
  },

  onCancel: function () {
    // redirect
    const ctrl = this.getView().up("mainview").getController();
    ctrl.redirectTo("stock_list", true);
  },
});
