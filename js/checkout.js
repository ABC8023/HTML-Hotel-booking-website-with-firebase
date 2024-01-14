    let listCart = [];
    function checkCart(){
            var cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('listCart='));
            if(cookieValue){
                listCart = JSON.parse(cookieValue.split('=')[1]);
            }
    }
    checkCart();
    addCartToHTML();
    function addCartToHTML(){
        // clear data default
        let listCartHTML = document.querySelector('.returnCart .list');
        listCartHTML.innerHTML = '';

        let totalQuantityHTML = document.querySelector('.totalQuantity');
        let totalPriceHTML = document.querySelector('.totalPrice');
        let totalQuantity = 0;
        let totalPrice = 0;




        // if has product in Cart
        if(listCart){
            listCart.forEach(product => {
                if (product) {
                    let newCart = document.createElement('div');
                    newCart.classList.add('item');

                    // Check if the product ID is in the specified range (4, 5, 6)
                    if ([4, 5, 6, 7, 8, 9, 10, 11,12].includes(product.id)) {
                        newCart.innerHTML =
                            `<img src="${product.image}">
                            <div class="info">
                                <div class="name">${product.name}</div>
                                <div class="price">$${product.price}/per package</div>
                            </div>
                            <div class="quantity">${product.quantity}</div>
                            <div class="returnPrice">$${product.price * product.quantity}</div>`;
                    }
                    else if ([13, 14, 15].includes(product.id)) {
                        newCart.innerHTML =
                            `<img src="${product.image}">
                            <div class="info">
                                <div class="name">${product.name}</div>
                                <div class="price">$${product.price}/per day</div>
                            </div>
                            <div class="quantity">${product.quantity}</div>
                            <div class="returnPrice">$${product.price * product.quantity}</div>`;
                    }
                    else {
                        // Display for other products
                        newCart.innerHTML =
                            `<img src="${product.image}">
                            <div class="info">
                                <div class="name">${product.name}</div>
                                <div class="price">$${product.price}/per night</div>
                            </div>
                            <div class="quantity">${product.quantity}</div>
                            <div class="returnPrice">$${product.price * product.quantity}</div>`;
                    }

                    listCartHTML.appendChild(newCart);
                    totalQuantity = totalQuantity + product.quantity;
                    totalPrice = totalPrice + (product.price * product.quantity);
                }
            })
        }
        totalQuantityHTML.innerText = totalQuantity;
        totalPriceHTML.innerText = '$' + totalPrice;

        localStorage.setItem('totalPrice', totalPrice);


    }