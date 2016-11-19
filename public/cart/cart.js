; (function () {
    angular.module('shoppingCart', [])

        .component('cartComponent', {
            controller: CartController,
            templateUrl: '/public/cart/cart.html'
        })

    function CartController() {

        this.cartStatus = 'Working'

        this.cart = []

        this.name = 'My Cart'

        this.getCartCount = function () {
            return this.cart.length
        }

        this.calculateCartTotal = function () {
            var sum = 0;
            for (var i = 0; i < this.cart.length; i++) {
                var total = this.cart[i].price * this.cart[i].quantity;
                sum += total;
            } 
            return sum
        }

        this.removeProductFromCart = function (product) {
            for (var i = 0; i < this.cart.length; i++) {
                var productToDrop = this.cart[i];
                if (productToDrop == product) {
                    this.cart.splice(i, 1)
                }
            }
            return this.cart
        }

        this.addProductToCart = function (product) {
            var newProduct = {
                name: product.name,
                description: product.description,
                specs: products.specs,
                reviews: product.reviews,
                msrp: product.msrp,
                memberPrice: product.memberPrice,
                nonMemberPrice: product.nonMemberPrice
            }
            this.cart.push(newProduct)
        }
    }


} ());