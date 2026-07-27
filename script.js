// Books Data

const books = [

    {
        id: 1,
        name: "The Great Adventure",
        category: "Fiction",
        price: 14.99
    },

    {
        id: 2,
        name: "Learn JavaScript",
        category: "Technology",
        price: 24.99
    },

    {
        id: 3,
        name: "Business Mastery",
        category: "Business",
        price: 19.99
    },

    {
        id: 4,
        name: "Modern Education",
        category: "Education",
        price: 12.99
    },

    {
        id: 5,
        name: "Web Development",
        category: "Technology",
        price: 29.99
    },

    {
        id: 6,
        name: "The Secret Story",
        category: "Fiction",
        price: 16.99
    },

    {
        id: 7,
        name: "Digital Marketing",
        category: "Business",
        price: 21.99
    },

    {
        id: 8,
        name: "Learn Programming",
        category: "Education",
        price: 18.99
    }

];


// Cart

let cart = [];


// Display Books

function displayBooks(bookList = books) {

    const container =
        document.getElementById("booksContainer");

    container.innerHTML = "";


    if (bookList.length === 0) {

        container.innerHTML =
            "<h3>No books found.</h3>";

        return;

    }


    bookList.forEach(book => {

        const card = document.createElement("div");

        card.className = "book-card";


        card.innerHTML = `

            <div class="book-image">

                <i class="fa-solid fa-book"></i>

            </div>


            <div class="book-info">

                <h3>${book.name}</h3>

                <p class="category">
                    ${book.category}
                </p>

                <p class="price">
                    £${book.price.toFixed(2)}
                </p>

                <button
                    class="add-cart"
                    onclick="addToCart(${book.id})">

                    Add to Cart

                </button>

            </div>

        `;


        container.appendChild(card);

    });

}


// Add to Cart

function addToCart(id) {

    const book =
        books.find(item => item.id === id);


    cart.push(book);


    updateCart();


    alert(
        `${book.name} added to your cart!`
    );

}


// Update Cart

function updateCart() {

    document.getElementById("cartCount")
        .textContent = cart.length;


    const cartItems =
        document.getElementById("cartItems");


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
            </p>`;

        document.getElementById("cartTotal")
            .textContent = "0.00";

        return;

    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    £${item.price.toFixed(2)}
                </p>

            </div>


            <button
                class="remove-btn"
                onclick="removeFromCart(${index})">

                Remove

            </button>

        `;


        cartItems.appendChild(div);

    });


    document.getElementById("cartTotal")
        .textContent = total.toFixed(2);

}


// Remove Cart Item

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// Open Cart

function openCart() {

    document.getElementById("cartModal")
        .style.display = "block";

}


// Close Cart

function closeCart() {

    document.getElementById("cartModal")
        .style.display = "none";

}


// Search Books

function searchBooks() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();


    const filtered =
        books.filter(book =>

            book.name
                .toLowerCase()
                .includes(search)

            ||

            book.category
                .toLowerCase()
                .includes(search)

        );


    displayBooks(filtered);

}


// Category Filter

function filterCategory(category) {

    const filtered =
        books.filter(book =>
            book.category === category
        );


    displayBooks(filtered);


    document.getElementById("books")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Show All Books

function showAllBooks() {

    displayBooks(books);

}


// Scroll to Books

function scrollToBooks() {

    document.getElementById("books")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Newsletter

function subscribeNewsletter() {

    const email =
        document.getElementById("email").value;


    if (email === "") {

        alert("Please enter your email.");

        return;

    }


    alert(
        "Thank you for subscribing!"
    );


    document.getElementById("email")
        .value = "";

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;

    }


    alert(
        "Checkout page coming soon!"
    );

}


// Initial Load

displayBooks();
updateCart();
