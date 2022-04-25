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
        console.log(this.products);
    },
    _calculateQuantity() {
        this.quantity = 0;
        this.products.forEach(product => {
            this.quantity += product.quantity
        })
        document.querySelector('.cart-label').innerHTML = this.quantity;
    },
    _calculateSumm() {
        this.summ = 0;
        this.products.forEach(product => {
            let databaseProduct = products.find(item => product.id == item.id);
            if (databaseProduct) {
                this.summ += parseInt(product.quantity) * parseFloat(databaseProduct.price); 
            }
        })
        document.querySelector('.cart-cost').innerHTML =  this._numberWithSpaces(this.summ);
    },
    _numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
}
