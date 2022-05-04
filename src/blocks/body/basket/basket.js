import products from "../products/products.js"

export default basket = {
    quantity: 0,
    summ: 0,
    products: [],
    add(productId) {
        let existProduct = this.products.find(item => item.id == productId);
        if (!existProduct) {
            this.products.push({
                id: productId,
                quantity: 1
            })
        } else {
            existProduct.quantity++;
        }
        this._calculateQuantity();
        this._calculateSumm();
        this._setCartData(this.products);
        this._refreshCart();
    },
    _calculateQuantity() {
        this.quantity = 0;
        this.products.forEach(product => {
            this.quantity += product.quantity
        })
        let cartLabel = document.querySelectorAll('.cart-label');
        let cartLabelArray = [...cartLabel];
        cartLabelArray.forEach(label => {
            label.innerHTML =  this.quantity;
        });
    },
    _calculateSumm() {
        this.summ = 0;
        this.products.forEach(product => {
            let databaseProduct = products.find(item => product.id == item.id);
            if (databaseProduct) {
                this.summ += parseInt(product.quantity) * parseFloat(databaseProduct.price); 
            }
        })
        let cartCost = document.querySelectorAll('.cart-cost');
        let cartCostArray = [...cartCost];
        cartCostArray.forEach(cost => {
            cost.innerHTML =  this._numberWithSpaces(this.summ);
        });
    },
    _numberWithSpaces(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    _getCartData(){
        this.products = JSON.parse(localStorage.getItem('products') || "[]");
        if (products != []){
            this._calculateQuantity();
            this._calculateSumm();
            this._refreshCart();
        }
    },
      
    _setCartData(object){
        localStorage.setItem('products', JSON.stringify(object));
        return false;
    },

    _deleteCartData(){
        localStorage.clear();
        this.products = [];
        this.summ = 0;
        this.quantity = 0;
        this._calculateQuantity();
        this._calculateSumm();
        this._refreshCart();
    },

    _refreshCart() {
        let cartContent = document.querySelector('.flex-table tbody');
        cartContent.innerHTML = ``;
        this.products.forEach(product => {
            let prodFromJson = products.find(c => c.id == product.id);
            cartContent.innerHTML += `
            <tr>
                <td data-label="Name">${prodFromJson .title}</td>
                <td data-label="Quantity" class="cart-quantity">${product.quantity}</td>
                <td data-label="Sum" class="cart-table-price">${prodFromJson .price * product.quantity}</td>
            </tr>
        `;
        })
    }
}
