Vue.component('product', {
    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
template:`<div class="product">
            <div class="product-image">
                <a :href='linkTo'><img v-bind:src="image"></a>
            </div>
            <div class="product-info">
                <h1>{{ title  }}</h1>
                <p v-if="inStock">In stock</p>
                <p v-else 
                 class="outofStock"
                >Out of stock</p>
                <p>Shipping {{ shipping }} </p>
                <span v-show="onSale">On Sale!</span>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="variant in variants"
                     v-bind:key="variant.variantId"
                     class="color-box"
                     :style="{backgroundColor:variant.variantColor}"
                     @mouseover="updateProduct(variant.variantImage)"
                     >
                </div>
            <button v-on:click="addToCart" 
                    :disabled="!inStock" 
                    :class="{ disabledButton: !inStock}">Add</button>
            <button v-on:click="removeFromCart">Remove</button>
    
            </div>
    </div>`,
        data() {
            return {
            brand :'Vue Mastery',
            product : 'Socks',
            image : 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            linkTo : 'https://www.twitter.com',
            inStock: true,
            onSale:true,
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
               {
                 variantId: 2234,
                 variantColor: 'green',
                 variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
                 variantQuantity: 10   
               },
               {
                 variantId: 2235,
                 variantColor: 'blue',
                 variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                 variantQuantity: 20   
               }
             ]
        }
    },
        methods:{
           addToCart: function(){
                this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
            },
            removeFromCart: function(){
                this.$emit('rem-from-cart',this.variants[this.selectedVariant].variantId)
            },
            updateProduct: function(variantImage){
               this.image = variantImage
           }
        },
        computed:{
            title(){
                return this.brand + ' ' +this.product
            },
            shipping(){
                if(this.premium){
                return 'Free'
            }
                
                return 2.99
            }
        }

})


var app = new Vue({
 el: '#app',
 data :{
    premium: true,
    cart : []
 },
 methods:{
     updateCart(id){
        this.cart.push(id)
     },
     removeCart(id){
        this.cart.pop(id)
     }
 }

}
)