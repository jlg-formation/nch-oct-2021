Ext.define("GestionStockApp.view.main.MainViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainviewcontroller",
  routes: {
    ":route": { action: "onRoute" },
  },
  onRoute: function (route) {
    console.log("Try to go on route: " + route);
    const getView = (route) => {
      const widgets = Object.keys(Ext.ClassManager.aliasToName).filter(
        (n) => n.startsWith("widget.") && n.endsWith("view")
      );
      if (widgets.includes("widget." + route + "view")) {
        return Ext.create({
          xtype: route + "view",
        });
      }
      return Ext.create({ xtype: "notfoundview" });
    };
    const view = getView(route);
    const body = this.lookup("bodyview");
    body.setActiveItem(view);
  },
});
