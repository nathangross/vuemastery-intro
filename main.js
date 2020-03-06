var app = new Vue({
  el: '#app',
  data: {
    product: 'Shoes',
    description: 'This is the greatest pare of shoes I have ever seen',
    image: './img/vmSocks-green-onWhite.jpg',
    link: 'http://google.com',
    inventory: 100,
    onSale: true,
    details: ["80% Cotton", "20% polyester", "Gender-neutral"],
    sizes: ["small", "medium", "large"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './img/vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './img/vmSocks-blue-onWhite.jpg',
      },
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
    subtractFromCart() {
      this.cart += -1
    }
  }
})
