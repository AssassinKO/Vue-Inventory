var resultView = new Vue({
  el: '#app',
  data: {
    data: [
      {code: "ACC1", product: "Apple granny smith", package: "40LB", unit: "3,638,066", category: "Fruits", time: "2021-02-05", quantity: "3,638,066"},
      {code: "ACC1", product: "Pineapple crownless", package: "7CT", unit: "6,462,020", category: "Fruits", time: "2021-02-03", quantity: "6,462,020"},
      {code: "ACC1", product: "Banana green", package: "8CT", unit: "8,664,938", category: "Fruits", time: "2021-02-02", quantity: "8,664,938"},
      {code: "ACC1", product: "Banana green tip", package: "40LB", unit: "2,592,335", category: "Fruits", time: "2021-02-02", quantity: "2,592,335"},
    ],
    value: localStorage.getItem("val") ? localStorage.getItem("val"): "",
  },
  computed: {
    searchTable: function () {
      console.log(this.val)
      if(this.value) {
        let filterData = [];
        this.data.map((item, index)=> {
          if(item.code.indexOf(this.value) > -1 || item.product.indexOf(this.value) > -1 || item.category.indexOf(this.value) > -1) {
            filterData.push(item);
          }
        });
        this.data = filterData;
        this.saveData();
      }
      else if(this.value == "") {
        this.data = [
          {code: "ACC1", product: "Apple granny smith", package: "40LB", unit: "3,638,066", category: "Fruits", time: "2021-02-05", quantity: "3,638,066"},
          {code: "ACC1", product: "Pineapple crownless", package: "7CT", unit: "6,462,020", category: "Fruits", time: "2021-02-03", quantity: "6,462,020"},
          {code: "ACC1", product: "Banana green", package: "8CT", unit: "8,664,938", category: "Fruits", time: "2021-02-02", quantity: "8,664,938"},
          {code: "ACC1", product: "Banana green tip", package: "40LB", unit: "2,592,335", category: "Fruits", time: "2021-02-02", quantity: "2,592,335"},
        ]
      }
    }
  },
  methods: {
    focusInput: function () {
      this.$refs.input.focus();
    },
    saveData: function () {
      localStorage.setItem('val', this.value)
    }
  }
})
