let hamBurger = document.querySelector(".burger");
let sideBar = document.querySelector("aside");
let closeMenu = document.querySelector(".close-menu")
hamBurger.onclick = () =>{
    sideBar.classList.add("show-sideBar");
    closeMenu.style.display="block";
    hamBurger.style.display="none";
};
closeMenu.onclick = () =>{
    sideBar.classList.remove("show-sideBar");
    closeMenu.style.display="none";
    hamBurger.style.display="flex";
};

let fashionCategories = document.querySelector(".categories");
let leftCategory = document.querySelector(".cat-left");
let middleCategory = document.querySelector(".cat-mid");
let rightCategory = document.querySelector(".cat-right");
let fragrances = document.querySelector("#fragrances");
let footWear = document.querySelector("#footwears");
let africanFashion = document.querySelector("#africanFashion");

/* let article = document.querySelector("article"); */
fashionCategories.onclick = () =>{
    fashionCategories.style.display = "none";
};

fashion.onclick = () =>{
    leftCategory.innerHTML = `
    <div class="cat-text">
    <div class="title">
        <p><a href="#">Women's Fashion</a></p>
    </div>
    <ul>
        <li><a href="#">Clothing</a></li>
        <li><a href="#">Shoes</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Jewelry</a></li>
        <li><a href="#">Dresses</a></li>
        <li><a href="#">Traditional & Cultural Wear</a></li>
        <li><a href="#">Bags</a></li>
        <li><a href="#">Underwear & Sleepwear</a></li>
        <li><a href="#">Maternity</a></li>
        <li><a href="#">Pants</a></li>
        <li><a href="#">Rings</a></li>
        <li><a href="#">Jumpsuits</a></li>
        <li><a href="#">Tops & Tees</a></li>
    </ul>
</div>
    `;
    middleCategory.innerHTML = `
    <div class="cat-text">
        <div class="title">
        <p><a href="#">Men's Fashion</a></p>
        </div>
        <ul>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Traditional & Cultural Wear</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Underwear & Sleepwear</a></li>
            <li><a href="#">Shirts</a></li>
            <li><a href="#">Suits</a></li>
            <li><a href="#">T-shirts</a></li>
            <li><a href="#">
                Men's Slippers & Sandals</a></li>
        </ul>
    </div>
    <div class="cat-text">
        <div class="title down-title">
        <p><a href="#">Other Fashion Accessories</a></p>
        </div>
        <ul>
            <li><a href="#">Watches</a></li>
            <li><a href="#">Weddings</a></li>
            <li><a href="#">
            Luggage & Travel Gear</a></li>
        </ul>
    </div>
    `;
    rightCategory.innerHTML = `
    <div class="cat-text">
    <div class="title">
    <p><a href="#">Boys' Fashion</a></p>
    </div>
    <ul>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Clothing</a></li>
        <li><a href="#">Shoes</a></li>
        <li><a href="#">Watches</a></li>
    </ul>
    </div>
    <div class="cat-text">
        <div class="title down-title">
        <p><a href="#">Girls' Fashion</a></p>
        </div>
        <ul>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Watches</a></li>
        </ul>
    </div>
    <div class="cat-text">
        <div class="title down-title">
        <p><a href="#">Baby Fashion</a></p>
        </div>
        <ul>
            <li><a href="#">Clothing</a></li>
        </ul>
    </div>
    `;
    /* fashionCategories.style.display="flex"; */
    fashionCategories.classList.add('show-categories');
};
fragrances.onclick = () =>{
    leftCategory.innerHTML = `
    <div class="cat-text">
    <div class="title">
        <p><a href="#">FRAGRANCES</a></p>
    </div>
    <ul>
        <li><a href="#">Men's Fragrances</a></li>
        <li><a href="#">Women's Fragrances</a></li>
        <li><a href="#">Antiperspirants & Deodorants</a></li>
    </ul>
    </div>
    <div class="cat-text">
        <div class="title">
            <p><a href="#">FRAGRANCES</a></p>
        </div>
        <ul>
            <li><a href="#">Men's Fragrances</a></li>
            <li><a href="#">Women's Fragrances</a></li>
            <li><a href="#">Antiperspirants & Deodorants</a></li>
        </ul>
    </div>
    <div class="cat-text">
        <div class="title down-title">
            <p><a href="#">TOP PERFUME BRANDS</a></p>
        </div>
        <ul>
            <li><a href="#">Smart Collection</a></li>
            <li><a href="#">Chris Adams</a></li>
            <li><a href="#">Victoria's Secret</a></li>
            <li><a href="#">Calvin Klein</a></li>
            <li><a href="#">Christian Dior</a></li>
        </ul>
    </div>
    <div class="cat-text">
        <div class="title down-title">
            <p><a href="#">TOP PERFUMES</a></p>
        </div>
        <ul>
            <li><a href="#">Armani Code</a></li>
            <li><a href="#">Dior Sauvage</a></li>
            <li><a href="#">Chanel Allure</a></li>
            <li><a href="#">Paco Rabanne 1 Million</a></li>
            <li><a href="#">Calvin Klein Euphoria</a></li>
        </ul>
    </div>
    `;
    middleCategory.innerHTML = `
        <div class="cat-text">
        <div class="title">
            <p><a href="#">BEAUTY & PERSONAL CARE</a></p>
        </div>
        <ul>
            <li><a href="#">Makeup</a></li>
            <li><a href="#">Tools & Accessories</a></li>
            <li><a href="#">Personal Care</a></li>
            <li><a href="#">Hair Care</a></li>
            <li><a href="#">Oral Care</a></li>
            <li><a href="#">Skin Care</a></li>
            <li><a href="#">Shave & Hair Removal</a></li>
        </ul>
        </div> 
        <div class="cat-text">
            <div class="title down-title">
                <p><a href="#">MEDICAL SUPPLIES & EQUIPMENT</a></p>
            </div>
            <ul>
                <li><a href="#">Health Monitors</a></li>
                <li><a href="#">Braces, Splints & Supports</a></li>
                <li><a href="#">Mobility & Daily Living Aids</a></li>
                <li><a href="#">Occupational & Physical Therapy Aids</a></li>
            </ul>
        </div> 
        <div class="cat-text">
            <div class="title down-title">
                <p><a href="#">AIR FRESHENERS</a></p>
            </div>
        </div>
    `;
    rightCategory.innerHTML = `
    <div class="cat-text">
    <div class="title">
        <p><a href="#">HEALTH CARE</a></p>
    </div>
    <ul>
        <li><a href="#">First Aid</a></li>
        <li><a href="#">Diabetes Care</a></li>
        <li><a href="#">Medications & Treatments</a></li>
        <li><a href="#">Alternative Medicine</a></li>
        <li><a href="#">Foot Health</a></li>
        <li><a href="#">Respiratory Aids & Accessories</a></li>
    </ul>
    </div>
    <div class="cat-text">
        <div class="title down-title">
            <p><a href="#">VITAMINS & DIETARY SUPPLEMENTS</a></p>
        </div>
        <ul>
            <li><a href="#">First Aid</a></li>
            <li><a href="#">Diabetes Care</a></li>
            <li><a href="#">Medications & Treatments</a></li>
            <li><a href="#">Health Supplements</a></li>
            <li><a href="#">Weight Loss Products</a></li>
        </ul>
    </div>
    `;
    /* fashionCategories.style.display="flex"; */
    fashionCategories.classList.add('show-categories');

};

let addToWishList = document.querySelectorAll(".wish");
let addToCart = document.querySelectorAll(".add-to-cart");
let cartQuantity = document.querySelector(".cart-quantity");
let wishQuantity = document.querySelector(".quantity");
let updateCart = 0;
let updateWish = 0;
addToCart.forEach((cart)=> {
    cart.onclick = () => {
        updateCart += 1;
        cartQuantity.innerHTML = updateCart;
    }
});
addToWishList.forEach((wish)=> {
    cart.onclick = () => {
        updateWish += 1;
        wishQuantity.innerHTML = updateWish;
    }
});