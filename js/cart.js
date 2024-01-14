document.addEventListener('DOMContentLoaded', function () {
    // Function to reset totalQuantity to 0
    function resetTotalQuantity() {
        let totalHTML = document.querySelector('.totalQuantity');
        let totalHTMLformobile = document.querySelector('.totalQuantityformobile');
        totalHTML.innerText = '0';
        totalHTMLformobile.innerText = '0';
    }
    
    // Call the resetTotalQuantity function when the page loads
    resetTotalQuantity();
    
    // Function to reset the cart
    function resetCart() {
        listCart = [];
        document.cookie = "listCart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        addCartToHTML();
    }
    
    // Call the resetCart function when the page loads
    window.onload = function() {
        resetCart();
    };
    
    let iconCart = document.querySelector('.iconCart');
    let iconCartcart = document.querySelector('.iconCartcart');
    let cart = document.querySelector('.cart');
    let container = document.querySelector('.container');
    let close = document.querySelector('.close');
    
    
    iconCart.addEventListener('click', function(){
        if(cart.style.right == '-100%'){
            cart.style.right = '0';
            container.style.transform = 'translateX(-400px)';
        }else{
            cart.style.right = '-100%';
            container.style.transform = 'translateX(0)';
        }
    })
    close.addEventListener('click', function (){
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    })
    iconCartcart.addEventListener('click', function(){
        if(cart.style.right == '-100%'){
            cart.style.right = '0';
            container.style.transform = 'translateX(-400px)';
        }else{
            cart.style.right = '-100%';
            container.style.transform = 'translateX(0)';
        }
    })
    close.addEventListener('click', function (){
        cart.style.right = '-100%';
        container.style.transform = 'translateX(0)';
    })
    
    
    
        // Call the resetTotalQuantity function when the page loads
        resetTotalQuantity();
    });
    
    let products = null;
    // get data from file json
    fetch('js/product.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            addDataToHTML();
    });
    
    //show datas product in list 
    function addDataToHTML(){
        // remove datas default from HTML
        let listProductHTML = document.querySelector('.listProduct');
        listProductHTML.innerHTML = '';
    
        // add new datas
        if(products != null) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">RM${product.price}</div>
                <button onclick="addCart(${product.id})">Available</button>`;
    
                listProductHTML.appendChild(newProduct);
    
            });
        }
    }
    //use cookie so the cart doesn't get lost on refresh page
    
    
    let listCart = [];
    function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }else{
            listCart = [];
        }
    }
    checkCart();
    function addCart($idProduct){
        let productsCopy = JSON.parse(JSON.stringify(products));
        //// If this product is not in the cart
        if(!listCart[$idProduct]) 
        {
            listCart[$idProduct] = productsCopy.filter(product => product.id == $idProduct)[0];
            listCart[$idProduct].quantity = 1;
            
            
        }else{
            //If this product is already in the cart.
            //I just increased the quantity
            listCart[$idProduct].quantity++;
    
            
        }
        document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
    
        addCartToHTML();
    }
    
    addCartToHTML();
    function addCartToHTML(){
        // clear data default
        let listCartHTML = document.querySelector('.listCart');
        listCartHTML.innerHTML = '';
        
    
        let totalHTML = document.querySelector('.totalQuantity');
        let totalHTMLformobile = document.querySelector('.totalQuantityformobile');
        
        let totalQuantity = 0;
    
        // if has product in Cart
        if(listCart){
            listCart.forEach(product => {
                if(product){
                    
                    let newCart = document.createElement('div');
                    newCart.classList.add('item');
    
                    if ([4, 5, 6, 7, 8, 9, 10, 11, 12].includes(product.id)) {
                        newCart.innerHTML =
                            `<img src="${product.image}">
                            <div class="content">
                                <div class="name">${product.name}</div>
                                <div class="price">RM${product.price} / per package</div>
                            </div>
                            <div class="quantity">
                                <button onclick="changeQuantity(${product.id}, '-')">-</button>
                                <span class="value">${product.quantity}</span>
                                <button onclick="changeQuantity(${product.id}, '+')">+</button>
                            </div>`;
                    }
    
                    else if ([13, 14, 15].includes(product.id)) {
                        newCart.innerHTML =
                            `<img src="${product.image}">
                            <div class="content">
                                <div class="name">${product.name}</div>
                                <div class="price">RM${product.price} / per day</div>
                            </div>
                            <div class="quantity">
                                <button onclick="changeQuantity(${product.id}, '-')">-</button>
                                <span class="value">${product.quantity}</span>
                                <button onclick="changeQuantity(${product.id}, '+')">+</button>
                            </div>`;
                    }
    
    
    
                    else {
                    newCart.innerHTML = 
                        `<img src="${product.image}">
                        <div class="content">
                            <div class="name">${product.name}</div>
                            <div class="price">RM${product.price} / per night</div>
                        </div>
                        <div class="quantity">
                            <button onclick="changeQuantity(${product.id}, '-')">-</button>
                            <span class="value">${product.quantity}</span>
                            <button onclick="changeQuantity(${product.id}, '+')">+</button>
                        </div>`;
                    }
                    listCartHTML.appendChild(newCart);
                    totalQuantity = totalQuantity + product.quantity;
                    
    
                }
            })
        }
        totalHTML.innerText = totalQuantity;
        totalHTMLformobile.innerText = totalQuantity;
    
    
    }
    
    
    function changeQuantity($idProduct, $type){
        switch ($type) {
            case '+':
                listCart[$idProduct].quantity++;
                   
            break;
    
            case '-':
                listCart[$idProduct].quantity--;
    
                // if quantity <= 0 then remove product in cart
                if(listCart[$idProduct].quantity <= 0){
                    delete listCart[$idProduct];
                }
                break;
        
            default:
                break;
        }
        // save new data in cookie
        document.cookie = "listCart=" + JSON.stringify(listCart) + "; expires=Thu, 31 Dec 2025 23:59:59 UTC; path=/;";
        // reload html view cart
        addCartToHTML();
    }
    
    
    
    
            
    
    
    
    
    
    