Ext.define("GestionStockApp.model.Article", {
  extend: "Ext.data.Model",

  fields: [
    { name: "id", type: "string" },
    { name: "name", type: "string" },
    { name: "price", type: "float" },
    { name: "qty", type: "int" },
  ],

  proxy: {
    type: "rest",
    url: "http://localhost:3000/articles",
    writer: {
      type: "json",
      transform: function (data, request) {
        console.log("request: ", request);
        const action = request.getAction();
        console.log("action: ", action);
        console.log("data: ", data);

        if (action === "create") {
          delete data.id;
          return data;
        }

        return data;
      },
    },
  },
});
