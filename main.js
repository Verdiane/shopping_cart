const app = Vue.createApp({
    
    // https://vuejs.org/v2/guide/instance.html#Data-and-Methods
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Banana',
            min_qqty: 3,
            price: 100,
            quantity: 0,
            image: 'data:image/jpeg;base64,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'
          },
          {
            id: 2,
            name: 'Phone',
            min_qqty: 1,
            quantity: 0,
            price: 50000,
            image: 'https://cdn.vox-cdn.com/thumbor/v97OD-MBgNjw8p5crApucVs9RB8=/0x0:2050x1367/1800x1800/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22022572/bfarsace_201106_4269_012.0.jpg'
          },
          {
            id: 3,
            name: 'Shoe',
            min_qqty: 2,
            price: 5000,
            quantity: 0,
            image: 'data:image/jpeg;base64,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'
          }
        ],
        showCart: false
      };
    },
    
    // https://vuejs.org/v2/guide/computed.html
    computed: {
      cart() {
        return this.products.filter(product => product.quantity >= product.min_qqty);
      },
      totalQuantity() {
        return this.products.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        );
      },
      totalItems(){
        return this.products.filter(product => product.quantity >= product.min_qqty).length === 0;
    }
    },
      
      // https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers
      methods: {
        updateCart(product, updateType) {      
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === product.id) {
              if (updateType === 'subtract') {
                if (this.products[i].quantity <= this.products[i].min_qqty) {
                    alert('This is the min quantity for this product')
                }else{
                    this.products[i].quantity--;
                }
              } else {
                this.products[i].quantity++;
              }
              
              break;
            }
          }
        },

        addToCart(product){
            for (let i = 0; i < this.products.length; i++){
                if (this.products[i].id === product.id){
                  if(this.products[i].quantity >= this.products[i].min_qqty){
                    alert('this product is already in the cart');
                  }else{
                   this.products[i].quantity = this.products[i].min_qqty;
                   return this.products[i].quantity;
                  }
                }
               
            }
        },

        deleteProduct(product){
            for (let i = 0; i < this.products.length; i++){
                if (this.products[i].id === product.id){
                   this.products[i].quantity = 0;
                   return this.products[i].quantity;
                }
               
            }
        }
      }
    });
  
    app.mount('#app');