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

    _minusProduct(productId) {
        let existProduct = this.products.find(item => item.id == productId);
        if (existProduct && existProduct.quantity > 1) {
            existProduct.quantity--;
        } 
        this._calculateQuantity();
        this._calculateSumm();
        this._setCartData(this.products);
        this._refreshCart();
    },

    _plusProduct(productId) {
        let existProduct = this.products.find(item => item.id == productId);
        if (existProduct) {
            existProduct.quantity++;
        } 
        this._calculateQuantity();
        this._calculateSumm();
        this._setCartData(this.products);
        this._refreshCart();
    },

    _deleteProduct(productId) {
        this.products = this.products.filter((item) => item.id !== productId);
        this._calculateQuantity();
        this._calculateSumm();
        this._setCartData(this.products);
        this._refreshCart();
    },

    _refreshCart() {
        let cartContent = document.querySelector('.flex-table tbody');
        cartContent.innerHTML = ``;
        this.products.forEach(product => {
            let prodFromJson = products.find(c => c.id == product.id);
            cartContent.innerHTML += `
            <tr>
                <td data-label="Trash"><button class="cart_delete_product_button" product_id="${product.id}">&#128465</button></td>
                <td data-label="Name">${prodFromJson .title}</td>
                <td data-label="Quantity" class="cart-quantity"><button class="cart_quantity_minus" product_id="${product.id}">-</button><span>${product.quantity}</span><button class="cart_quantity_plus" product_id="${product.id}">+</button></td>
                <td data-label="Sum" class="cart-table-price"><span>${prodFromJson .price * product.quantity}</span></td>
            </tr>
        `;
        })
        let basketMinusButton = document.querySelectorAll('.cart_quantity_minus').forEach(item => {
            item.addEventListener('click', function (e) {
                basket._minusProduct(e.target.getAttribute('product_id'));
            })
        });

        let basketPlusButton = document.querySelectorAll('.cart_quantity_plus').forEach(item => {
            item.addEventListener('click', function (e) {
                basket._plusProduct(e.target.getAttribute('product_id'));
            })
        });

        let basketPTrashButton = document.querySelectorAll('.cart_delete_product_button').forEach(item => {
            item.addEventListener('click', function (e) {
                basket._deleteProduct(e.target.getAttribute('product_id'));
            })
        });
    }
}
