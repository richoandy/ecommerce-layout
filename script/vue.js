new Vue({
    el:"#app",
    data: {
        query: '',
        queryResult: [],
        items: [],
        tempCart: [],
        cart:[],
        grandTotalCart : 0,
        categories: ['Food', 'Travel', 'Games', 'Musical Instrument', 'Fashion'],
        popularCategories: ['Musical Instrument', 'Gaming Gear', 'Japanese Ramen', 'Indomie'],
        banners: [
            {
                url: 'pic/banner1', class: 'carousel-item active'
            },
            {
                url: 'pic/banner2', class: 'carousel-item'
            },            {
                url: 'pic/banner3', class: 'carousel-item'
            },
        ]
    },
    methods: {
        addToCart(item){
            let isFound = false

            this.cart.forEach((i, index) =>{
                if(i.item.name === item.name) {
                    i.quantity++
                    isFound = true
                }
            })

            if(!isFound) {
                this.cart.push({
                    item: item,
                    quantity: 1
                })
            }

            let grandTotal = 0
            this.cart.forEach(i => {
                grandTotal += (i.item.price * i.quantity)
            })
            this.grandTotalCart = grandTotal
            
        },
        checkout() {
            this.cart = []
            this.grandTotalCart = 0
        },
        
        searchItem() {
            let result = this.items.filter(item => item.name.toLowerCase() === this.query.toLowerCase())
        },
        
        deleteCartItem(name) {
            console.log(this.cart)
            for(let i = 0; i < this.cart.length; i++) {
                if (this.cart[i].item.name === name) {
                    this.grandTotalCart -= (this.cart[i].item.price * this.cart[i].quantity)
                    this.cart.splice(i, 1)
                }
            }
            
        }
    },

    computed: {

    },

    watch :{
        query: function() {
            this.queryResult = this.items.filter(
                item => item.name.toLowerCase() === this.query.toLowerCase() 
            )
            console.log(this.queryResult)
        }
    },

    created: function() {
        let items = [
            {
                name: "Indomie",
                price:"2500",
                url:"pic/indomie"
            },
            {
                name: "TShirt",
                price: "5000",
                url:"pic/tshirt"
            },
            {
                name: "Razer",
                price: "7500",
                url:"pic/keyboard"
            },
            {
                name: "Razer",
                price: "7500",
                url:"pic/keyboard"
            },
            {
                name: "Razer",
                price: "7500",
                url:"pic/keyboard"
            },
            
        ]
        items.forEach(item => {
            this.items.push(item)
        })
    }
})


