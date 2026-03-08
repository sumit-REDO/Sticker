/* ==========================================================================
   BRUTALIST JS - CLICK2STICKER
   ========================================================================== */

// Make global variable to avoid reference error
let magneticElements = [];

// Sticker Data Map
const stickers = [
    // CAR
    { id: 'car1', src: 'Car/Drifting.png', name: 'Drifting Design', category: 'Car', price: '₹15', desc: 'Burn rubber, not your soul. This drifting graphic screams high octane energy and unapologetic speed.' },
    { id: 'car2', src: 'Car/F1 Racer.png', name: 'F1 Racer', category: 'Car', price: '₹15', desc: 'Precision engineering meets street art. Slap this F1 racer on your gear and stay ahead of the pack.' },
    { id: 'car3', src: 'Car/F1 Warning.png', name: 'F1 Warning', category: 'Car', price: '₹15', desc: 'Caution: Fast lives only. A bold warning label for those who refuse to slow down.' },
    { id: 'car4', src: 'Car/Ferrari F40.png', name: 'Ferrari F40 Art', category: 'Car', price: '₹15', desc: 'An absolute legend. The F40 is peak automotive aesthetic in a sleek, die-cut vinyl package.' },
    { id: 'car5', src: 'Car/No Airbags We Die Like Real Men.png', name: 'No Airbags Meme', category: 'Car', price: '₹15', desc: 'Pure unfiltered dark humor. For the ones who live dangerously and find comedy in the chaos.' },
    { id: 'car6', src: 'Car/PORSCHEE 911.png', name: 'Porsche 911', category: 'Car', price: '₹15', desc: 'Classic curves, neon vibes. This 911 graphic brings vintage racing heritage to modern streetwear.' },
    { id: 'car7', src: 'Car/Race Flag.png', name: 'Checkered Flag', category: 'Car', price: '₹15', desc: 'The universal symbol of victory. Declare yourself the winner before the race even starts.' },
    { id: 'car8', src: 'Car/Shelby Gt350.png', name: 'Shelby GT350', category: 'Car', price: '₹15', desc: 'Raw American muscle distilled into a single, high-contrast slap sticker.' },
    { id: 'car9', src: 'Car/Smoke Tires Not Drugs Mechanics .png', name: 'Smoke Tires Not Drugs', category: 'Car', price: '₹15', desc: 'The mechanic’s mantra. Keep your addictions strictly to horsepower and burnt rubber.' },
    { id: 'car10', src: 'Car/formula 1.png', name: 'Formula 1 Logo Art', category: 'Car', price: '₹15', desc: 'The pinnacle of motorsport, stylized for the streets. Fast, clean, and iconic.' },

    // CAT
    { id: 'cat1', src: 'Cat/Bubble_Cat_Sticker(Black).png', name: 'Bubble Cat (Black)', category: 'Cat', price: '₹15', desc: 'Dark, round, and full of attitude. This black bubble cat is silently judging your life choices.' },
    { id: 'cat2', src: 'Cat/Bubble_Cat_Sticker.png', name: 'Bubble Cat', category: 'Cat', price: '₹15', desc: 'Fluffy outside, chaotic inside. The perfect mix of cute aesthetics and subtle menace.' },
    { id: 'cat3', src: 'Cat/Chaos_Kitty.png', name: 'Chaos Kitty', category: 'Cat', price: '₹15', desc: 'Embrace the entropy. This kitty doesn’t knock things off tables; it destroys the table.' },
    { id: 'cat4', src: 'Cat/Cool_Kitty.png', name: 'Cool Kitty', category: 'Cat', price: '₹15', desc: 'Shades on, zero cares given. The ultimate embodiment of unbothered feline energy.' },
    { id: 'cat5', src: 'Cat/Cute Angry cat sticker.png', name: 'Cute Angry Cat', category: 'Cat', price: '₹15', desc: 'So mad, yet so adorable. Warning: May cause aggressive petting.' },
    { id: 'cat6', src: 'Cat/Shocked_Cat.png', name: 'Shocked Cat', category: 'Cat', price: '₹15', desc: 'The sheer audacity. This sticker perfectly captures your reaction to literally everything.' },
    { id: 'cat7', src: 'Cat/Stoned_Cat_vibes.png', name: 'Chill Cat Vibes', category: 'Cat', price: '₹15', desc: 'Maximum relaxation achieved. This cat is currently transcending space and time.' },
    { id: 'cat8', src: 'Cat/Suprized_Cat_Meme.png', name: 'Surprised Cat Meme', category: 'Cat', price: '₹15', desc: 'A classic internet moment immortalized in premium vinyl.' },

    // COFFEE
    { id: 'cof1', src: 'Coffee/Caffeine.png', name: 'Caffeine Molecule', category: 'Coffee', price: '₹15', desc: 'Science says you need this. The chemical structure of the world’s favorite legal stimulant.' },
    { id: 'cof2', src: 'Coffee/Coffee Word In A Periodic Table Style.png', name: 'Periodic Coffee', category: 'Coffee', price: '₹15', desc: 'The most essential element. Add this to your laptop to signify you run on pure science and espresso.' },
    { id: 'cof3', src: 'Coffee/Coffee saline.png', name: 'Coffee IV Drip', category: 'Coffee', price: '₹15', desc: 'For when drinking it just isn’t fast enough. Direct injection into the bloodstream.' },
    { id: 'cof4', src: 'Coffee/Recharging With Coffee.png', name: 'Recharging Battery', category: 'Coffee', price: '₹15', desc: 'Current status: 1% battery remaining. Commencing primary coffee sequence.' },
    { id: 'cof5', src: 'Coffee/Shhh Coffee First.png', name: 'Shhh Coffee First', category: 'Coffee', price: '₹15', desc: 'Do not perceive me before my morning cup. A polite, yet firm, boundary.' },
    { id: 'cof6', src: 'Coffee/The Only Element I Need Coffee.png', name: 'The Only Element', category: 'Coffee', price: '₹15', desc: 'Forget oxygen. This is the true essential element for human survival.' },

    // HOOKED VIBE
    { id: 'hv1', src: 'Hooked_Vibe/Cigarette with somke.png', name: 'Smoking Cigarette', category: 'Hooked_Vibe', price: '₹15', desc: 'Late nights, neon lights, and a slow burn. Classic grunge aesthetic.' },
    { id: 'hv2', src: 'Hooked_Vibe/DAB pen standard Sticker.png', name: 'Standard Dab Pen', category: 'Hooked_Vibe', price: '₹15', desc: 'Modern problems require modern solutions. Keep it discreet, keep it elevated.' },
    { id: 'hv3', src: 'Hooked_Vibe/Floral_Lighter.png', name: 'Floral Lighter', category: 'Hooked_Vibe', price: '₹15', desc: 'Juxtaposing delicate nature with raw fire. A beautifully contradictory piece of art.' },
    { id: 'hv4', src: 'Hooked_Vibe/Hit Bong Not Bitches.png', name: 'Hit Bong Statement', category: 'Hooked_Vibe', price: '₹15', desc: 'Aggressive street poetry spreading a message of peace, love, and elevation.' },
    { id: 'hv5', src: 'Hooked_Vibe/It\'s 420 somewhere.png', name: '420 Somewhere', category: 'Hooked_Vibe', price: '₹15', desc: 'Time is a relative construct anyway. Celebrate the moment whenever it strikes.' },
    { id: 'hv6', src: 'Hooked_Vibe/Lighter _ Who Got The Lighter.png', name: 'Who Got Lighter', category: 'Hooked_Vibe', price: '₹15', desc: 'The universal question asked at every session. Claim your fire.' },
    { id: 'hv7', src: 'Hooked_Vibe/Lighter_Skeleton.png', name: 'Skeleton Lighter', category: 'Hooked_Vibe', price: '₹15', desc: 'Macabre and mesmerizing. A lighter that sparks both flames and existential thoughts.' },
    { id: 'hv8', src: 'Hooked_Vibe/Marlboro Sticker.png', name: 'Classic Pack Art', category: 'Hooked_Vibe', price: '₹15', desc: 'Vintage Americana packaging turned subversive street art canvas.' },
    { id: 'hv9', src: 'Hooked_Vibe/Melting Lighter_ Sticker.png', name: 'Melting Lighter', category: 'Hooked_Vibe', price: '₹15', desc: 'Trippy surrealism. When the session gets so intense reality starts to warp.' },
    { id: 'hv10', src: 'Hooked_Vibe/Smoking is romantic.png', name: 'Romantic Smoke', category: 'Hooked_Vibe', price: '₹15', desc: 'Channel your inner French cinema protagonist with this moody, cinematic graphic.' },
    { id: 'hv11', src: 'Hooked_Vibe/Space Astronaut_Bong_Sticker.png', name: 'Astro Stoner', category: 'Hooked_Vibe', price: '₹15', desc: 'Houston, we have liftoff. An epic collision of cosmic exploration and earthly herbs.' },
    { id: 'hv12', src: 'Hooked_Vibe/Sticker of a skeleton smoking.png', name: 'Smoking Skeleton', category: 'Hooked_Vibe', price: '₹15', desc: 'Gritty, unapologetic, and undeniably cool. Till death do us part.' },
    { id: 'hv13', src: 'Hooked_Vibe/Stoner.png', name: 'Stoner Typo', category: 'Hooked_Vibe', price: '₹15', desc: 'Bold, dripping typography stating exactly what it is. No translation needed.' },
    { id: 'hv14', src: 'Hooked_Vibe/We Need Weed Sticker.png', name: 'We Need It', category: 'Hooked_Vibe', price: '₹15', desc: 'A blunt demand for a better world. Stick it where the establishment can see.' },
    { id: 'hv15', src: 'Hooked_Vibe/cigarette pack_ Sticker.png', name: 'Pack Sticker', category: 'Hooked_Vibe', price: '₹15', desc: 'Distressed, faded, and full of stories. The ultimate nostalgic accessory.' }
];

// Preloader 0-100 Logic
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const counter = document.getElementById('loader-counter');

    if (!preloader) return;

    let count = 0;
    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 15) + 5; // Random jump

        if (count >= 100) {
            count = 100;
            clearInterval(interval);
            if (counter) counter.innerText = count + '%';

            // Brutalist Wipe effect
            setTimeout(() => {
                preloader.classList.add('loaded');

                // Trigger hero stagger animation
                document.querySelectorAll('.stagger-text').forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('visible');
                    }, 400 + (index * 200));
                });

                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);
            }, 300);
        } else {
            if (counter) counter.innerText = count + '%';
        }
    }, 50);
}

// Ensure the preloader runs regardless of ready state differences
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPreloader);
} else {
    initPreloader();
}


// Shuffle array for random initial display
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!grid) return;

    // Initial render
    const shuffledStickers = shuffleArray(stickers);
    renderStickers(shuffledStickers, grid);

    // Filtering logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter data
            const filterValue = btn.getAttribute('data-filter');
            let filteredStickers = [];

            if (filterValue === 'all') {
                filteredStickers = shuffledStickers;
            } else {
                filteredStickers = stickers.filter(s => s.category === filterValue);
            }

            // Render
            grid.innerHTML = '';
            renderStickers(filteredStickers, grid);
        });
    });
});

// Render Function
function renderStickers(data, gridElement) {
    if (!gridElement) return;

    data.forEach((sticker, index) => {
        const displayCategory = sticker.category.replace('_', ' ').toUpperCase();
        const displayPrice = sticker.price.replace('$', '₹');

        // Generate dynamic pill tags
        let tagStr = '';
        if (index % 7 === 0) tagStr = '<span class="card-tag tag-hot">HOT</span>';
        else if (index % 5 === 1) tagStr = '<span class="card-tag tag-new">NEW</span>';
        else if (index % 9 === 2) tagStr = '<span class="card-tag tag-sale">SALE</span>';

        const cardHTML = `
            <div class="card" data-id="${sticker.id}" data-category="${sticker.category}" style="transition-delay: ${index * 0.05}s;">
                ${tagStr}
                <div class="card-img-wrapper" title="${sticker.desc}">
                    <img src="${sticker.src}" alt="${sticker.name}" class="card-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><text x=\\'50%\\' y=\\'50%\\' font-size=\\'50\\' text-anchor=\\'middle\\' dy=\\'.3em\\'>🚫</text></svg>'" loading="lazy">
                </div>
                <div class="card-info">
                    <span class="card-category">${displayCategory}</span>
                    <h3 class="card-title">${sticker.name}</h3>
                    <div class="card-price">${displayPrice}</div>
                </div>
                <!-- Prevent event bubbling to card when clicking add-to-cart -->
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${sticker.id}', 1)">
                    ADD TO CART
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </button>
            </div>
        `;
        gridElement.insertAdjacentHTML('beforeend', cardHTML);
    });

    // Attach event listeners after rendering
    attachCardListeners();
    // Re-trigger scroll observer for new items
    observeCards();
}

function attachCardListeners() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
        card.addEventListener('click', handleCardClick);
    });
    if (typeof updateMagneticTargets === 'function') updateMagneticTargets();
}

function handleCardClick(e) {
    if (e.target.closest('.add-to-cart')) return;
    const id = e.currentTarget.getAttribute('data-id');
    showProduct(id);
}

// -----------------------------------------
// View Transition Logic (Fixing the blank bug)
// -----------------------------------------
const mainView = document.getElementById('main-view');
const productView = document.getElementById('product-view');
const productDetailsContainer = document.getElementById('product-details-container');

function showProduct(id) {
    const sticker = stickers.find(s => s.id === id);
    if (!sticker) return;

    const displayCategory = sticker.category.replace('_', ' ').toUpperCase();

    // Get 3 related stickers
    const relatedStickers = stickers.filter(s => s.category === sticker.category && s.id !== sticker.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    let relatedHTML = '';
    relatedStickers.forEach(rel => {
        const relPrice = rel.price.replace('$', '₹');
        relatedHTML += `
            <div class="related-card" onclick="showProduct('${rel.id}')">
                <img src="${rel.src}" alt="${rel.name}">
                <h4>${rel.name}</h4>
                <span>${relPrice}</span>
            </div>
        `;
    });

    // Populate HTML
    productDetailsContainer.innerHTML = `
        <div class="product-split">
            <div class="product-image-container">
                <img src="${sticker.src}" alt="${sticker.name}" class="product-large-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><text x=\\'50%\\' y=\\'50%\\' font-size=\\'50\\' text-anchor=\\'middle\\' dy=\\'.3em\\'>🚫</text></svg>'">
            </div>
            <div class="product-details-content">
                <button class="back-btn" onclick="hideProduct()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    BACK TO STASH
                </button>
            
                <div class="detail-badge">${displayCategory}</div>
                <h1 class="detail-title">${sticker.name}</h1>
                <div class="detail-price">${sticker.price}</div>
                <p class="detail-desc">${sticker.desc}</p>
                
                <div class="product-specs">
                    <div class="specs-title">STICKER SPECS</div>
                    <div class="spec-row"><span class="spec-label">Price</span><span class="spec-value">₹15</span></div>
                    <div class="spec-row"><span class="spec-label">Material</span><span class="spec-value">Premium Cast Vinyl</span></div>
                    <div class="spec-row"><span class="spec-label">Finish</span><span class="spec-value">UV Laminated Gloss</span></div>
                    <div class="spec-row"><span class="spec-label">Size</span><span class="spec-value">3×3 inches</span></div>
                    <div class="spec-row"><span class="spec-label">Waterproof</span><span class="spec-value">Yes — 100% weatherproof</span></div>
                    <div class="spec-row"><span class="spec-label">Durability</span><span class="spec-value">5–7 years outdoor rated</span></div>
                    <div class="spec-row"><span class="spec-label">Adhesive</span><span class="spec-value">Removable pressure-sensitive</span></div>
                    <div class="spec-row"><span class="spec-label">Print</span><span class="spec-value">High-resolution digital print</span></div>
                </div>

                <div class="trust-badges">
                    <div class="badge-pill">🚚 Free Shipping over ₹199</div>
                    <div class="badge-pill">↩️ Easy Returns</div>
                    <div class="badge-pill">⭐ Premium Quality</div>
                </div>

                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateQty(-1)">-</button>
                    <div class="qty-value" id="qty-val">1</div>
                    <button class="qty-btn" onclick="updateQty(1)">+</button>
                </div>

                <div class="action-buttons">
                    <button class="btn-brutal" onclick="addToCart('${sticker.id}', parseInt(document.getElementById('qty-val').innerText)); toggleCart();">BUY NOW</button>
                    <button class="btn-brutal" style="background:var(--bg-color);color:var(--text-color);" onclick="addToCart('${sticker.id}', parseInt(document.getElementById('qty-val').innerText))">ADD TO CART</button>
                </div>
            </div>
        </div>
        
        <div class="related-section">
            <h3>SIMILAR DROPS</h3>
            <div class="related-grid">${relatedHTML}</div>
        </div>
    `;

    // Swap cleanly by hiding main, showing product
    window.scrollTo(0, 0);
    mainView.classList.replace('fade-in', 'fade-out');

    setTimeout(() => {
        mainView.classList.add('hidden-view');
        productView.classList.remove('hidden-view');

        // Trigger reflow
        void productView.offsetWidth;

        productView.classList.replace('fade-out', 'fade-in');
        if (!productView.classList.contains('fade-in')) {
            productView.classList.add('fade-in');
        }
    }, 400); // match CSS transition time
}

function hideProduct() {
    productView.classList.replace('fade-in', 'fade-out');

    setTimeout(() => {
        productView.classList.add('hidden-view');
        mainView.classList.remove('hidden-view');

        // Trigger reflow
        void mainView.offsetWidth;

        mainView.classList.replace('fade-out', 'fade-in');

        // Auto scroll to shop section
        const shopSection = document.getElementById('shop');
        if (shopSection) {
            shopSection.scrollIntoView({ behavior: 'auto' });
        }
    }, 400);
}

// Ensure globally accessible
window.showProduct = showProduct;
window.hideProduct = hideProduct;
window.updateQty = function (change) {
    const valEl = document.getElementById('qty-val');
    if (!valEl) return;
    let current = parseInt(valEl.innerText);
    let newVal = current + change;
    if (newVal < 1) newVal = 1;
    if (newVal > 99) newVal = 99;
    valEl.innerText = newVal;
}

// -----------------------------------------
// Cart System Logic
// -----------------------------------------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(id, qty = 1) {
    const sticker = stickers.find(s => s.id === id);
    if (!sticker) return;

    // Check if already in cart
    const existingObj = cart.find(item => item.id === id);
    if (existingObj) {
        existingObj.qty += qty;
    } else {
        cart.push({ ...sticker, qty: qty, numericPrice: 15 });
    }

    saveCart();
    showToast('Added to cart ✓');
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

function updateCartQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
        }
    }
}

function updateCartUI() {
    const countEl = document.getElementById('nav-cart-count');
    const titleCountEl = document.getElementById('cart-count-title');
    const itemsContainer = document.getElementById('cart-items');
    const subtotalEl = document.getElementById('cart-subtotal');

    // Total count
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (countEl) countEl.innerText = totalItems;
    if (titleCountEl) titleCountEl.innerText = totalItems;

    // Total price
    const subtotal = cart.reduce((sum, item) => sum + (item.qty * 15), 0);
    if (subtotalEl) subtotalEl.innerText = '₹' + subtotal;

    // Render items
    if (!itemsContainer) return;
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <img src="${item.src}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹15</div>
                    <div class="cart-qty-controls">
                        <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
                        <span class="cart-qty-val">${item.qty}</span>
                        <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
            </div>
        `;
    });
    itemsContainer.innerHTML = html;
}

function toggleCart(e) {
    if (e) e.preventDefault();
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer && overlay) {
        drawer.classList.toggle('open');
        overlay.classList.toggle('hidden-view');
    }
}

function showToast(msg) {
    const toast = document.getElementById('toast-notification');
    if (toast) {
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }
}

// Ensure globally accessible
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.toggleCart = toggleCart;

// Init cart UI on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
});

// -----------------------------------------
// Animations
// -----------------------------------------

// Scroll Animation Observer (Cards overshooting slam)
function observeCards() {
    const items = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 50);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    items.forEach(item => observer.observe(item));
}

// Brutalist Crosshair Cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursorCross = document.getElementById('cursor-cross');

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (cursorCross) {
            cursorCross.style.left = mouseX + 'px';
            cursorCross.style.top = mouseY + 'px';
        }

        // Check if hovering over interactive element to apply crosshair interaction styles
        if (e.target.closest('a, button, .card, .filter-btn, .back-btn, .related-card')) {
            document.body.classList.add('cursor-hover');
        } else {
            document.body.classList.remove('cursor-hover');
        }
    });

    // Parallax Hero Effect
    const heroStickers = document.querySelector('.hero-bg-stickers');
    if (heroStickers) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            heroStickers.style.transform = `translateY(-50%) translate(${x}px, ${y}px)`;
        });
    }
});
