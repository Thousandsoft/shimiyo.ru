import products from "../products/products.js"

//import products from "../products/products";

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
        for (let label of cartLabel) {
            label.innerHTML =  this.quantity;
        }
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
        for (let cost of cartCost) {
            cost.innerHTML =  this._numberWithSpaces(this.summ);
        }
    },
    _numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    _getCartData(){
        this.products = JSON.parse(localStorage.getItem('products') || "[]");
        if (products != []){
            this._calculateQuantity();
            this._calculateSumm();
            this._refreshCart();
        }
    },
      
    _setCartData(o){
        localStorage.setItem('products', JSON.stringify(o));
        return false;
    },

    _deleteCartData(){
        localStorage.clear();
        this.products = [];
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
                <td data-label="Quantity">${product.quantity}</td>
                <td data-label="Sum">${prodFromJson .price * product.quantity}</td>
            </tr>
        `;
        })
    }
}
