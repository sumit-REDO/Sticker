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

// Preloader: 0-100%, glitch 3x, explode
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const counter = document.getElementById('loader-counter');

    if (!preloader) return;

    let count = 0;
    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 12) + 4;
        if (count >= 100) {
            count = 100;
            clearInterval(interval);
            if (counter) counter.innerText = count + '%';

            // Glitch 3 times
            setTimeout(() => {
                preloader.classList.add('preloader-glitch');
                setTimeout(() => {
                    preloader.classList.remove('preloader-glitch');
                    setTimeout(() => {
                        preloader.classList.add('preloader-glitch');
                        setTimeout(() => {
                            preloader.classList.remove('preloader-glitch');
                            setTimeout(() => {
                                preloader.classList.add('preloader-glitch');
                                setTimeout(() => {
                                    preloader.classList.remove('preloader-glitch');
                                    // Explode outward
                                    preloader.classList.add('preloader-explode');
                                    setTimeout(() => {
                                        preloader.style.display = 'none';
                                    }, 650);
                                }, 100);
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 200);
        } else {
            if (counter) counter.innerText = count + '%';
        }
    }, 40);
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
    const searchInput = document.getElementById('search-input');

    if (!grid) return;

    // Initial setup
    const shuffledStickers = shuffleArray(stickers);
    let currentFilter = 'all';
    let currentSearchTerm = '';
    let filterTimeout;

    // Function to apply both filters
    function applyFilters() {
        clearTimeout(filterTimeout);
        // Always start from full stickers array so search always works
        let filtered = [...stickers];

        // Apply category filter
        if (currentFilter !== 'all') {
            filtered = filtered.filter(sticker => sticker.category === currentFilter);
        }

        // Apply search filter on top
        if (currentSearchTerm) {
            const term = currentSearchTerm.toLowerCase();
            filtered = filtered.filter(sticker =>
                sticker.name.toLowerCase().includes(term) ||
                sticker.category.toLowerCase().replace('_', ' ').includes(term) ||
                sticker.desc.toLowerCase().includes(term)
            );
        }

        // Render with Scatter Out Animation
        const existingCards = grid.querySelectorAll('.card');
        if (existingCards.length > 0) {
            existingCards.forEach(card => {
                const spreadX = (Math.random() - 0.5) * 600;
                const spreadY = (Math.random() - 0.5) * 600;
                const spreadRot = (Math.random() - 0.5) * 360;
                card.style.setProperty('--scatter-x', spreadX + 'px');
                card.style.setProperty('--scatter-y', spreadY + 'px');
                card.style.setProperty('--scatter-rot', spreadRot + 'deg');
                card.classList.add('scatter-out');
            });
            filterTimeout = setTimeout(() => {
                renderFiltered(filtered);
            }, 300);
        } else {
            renderFiltered(filtered);
        }

        function renderFiltered(data) {
            grid.innerHTML = '';
            if (data.length === 0) {
                grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 20px;">
                    <div style="font-family:var(--font-display);font-size:2.5rem;color:var(--accent-1);letter-spacing:0.1em;">NO STICKERS FOUND</div>
                    <div style="font-family:var(--font-body);font-size:0.9rem;color:#888;margin-top:12px;">Try searching something else</div>
                </div>`;
            } else {
                renderStickers(data, grid);
            }
        }
    }

    // Debounce helper
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // Search suggestions
    const suggestionsBox = document.getElementById('search-suggestions');
    let activeSuggestionIndex = -1;

    function showSuggestions(term) {
        if (!suggestionsBox) return;
        if (!term || term.length < 1) {
            suggestionsBox.classList.remove('visible');
            suggestionsBox.innerHTML = '';
            return;
        }

        const lower = term.toLowerCase();
        const matches = stickers.filter(s =>
            s.name.toLowerCase().includes(lower) ||
            s.category.toLowerCase().replace('_', ' ').includes(lower)
        ).slice(0, 6);

        if (matches.length === 0) {
            suggestionsBox.innerHTML = `<div class="suggestion-no-results">No stickers found for "${term}"</div>`;
            suggestionsBox.classList.add('visible');
            return;
        }

        suggestionsBox.innerHTML = matches.map((s, i) => {
            const highlighted = s.name.replace(new RegExp(`(${term})`, 'gi'), '<mark>$1</mark>');
            const cat = s.category.replace('_', ' ');
            return `<div class="suggestion-item" data-id="${s.id}" data-index="${i}">
                <img src="${s.src}" alt="${s.name}" onerror="this.style.display='none'">
                <div class="suggestion-item-info">
                    <div class="suggestion-item-name">${highlighted}</div>
                    <div class="suggestion-item-category">${cat}</div>
                </div>
                <div class="suggestion-item-price">${s.price}</div>
            </div>`;
        }).join('');

        suggestionsBox.classList.add('visible');
        activeSuggestionIndex = -1;

        // Click on suggestion — go to product
        suggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('mousedown', (e) => {
                e.preventDefault();
                const id = item.getAttribute('data-id');
                suggestionsBox.classList.remove('visible');
                searchInput.value = '';
                currentSearchTerm = '';
                applyFilters();
                setTimeout(() => showProduct(id), 50);
            });
        });
    }

    // Search — fires on every keystroke
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function () {
            currentSearchTerm = searchInput.value.trim();
            showSuggestions(currentSearchTerm);
            applyFilters();
        }, 150));

        // Keyboard nav in suggestions
        searchInput.addEventListener('keydown', function (e) {
            const items = suggestionsBox ? suggestionsBox.querySelectorAll('.suggestion-item') : [];
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeSuggestionIndex = Math.min(activeSuggestionIndex + 1, items.length - 1);
                items.forEach((el, i) => el.classList.toggle('active', i === activeSuggestionIndex));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeSuggestionIndex = Math.max(activeSuggestionIndex - 1, -1);
                items.forEach((el, i) => el.classList.toggle('active', i === activeSuggestionIndex));
            } else if (e.key === 'Enter' && activeSuggestionIndex >= 0 && items[activeSuggestionIndex]) {
                const id = items[activeSuggestionIndex].getAttribute('data-id');
                suggestionsBox.classList.remove('visible');
                searchInput.value = '';
                currentSearchTerm = '';
                applyFilters();
                showProduct(id);
            } else if (e.key === 'Escape') {
                searchInput.value = '';
                currentSearchTerm = '';
                applyFilters();
                suggestionsBox && suggestionsBox.classList.remove('visible');
                searchInput.blur();
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-wrapper')) {
                suggestionsBox && suggestionsBox.classList.remove('visible');
            }
        });

        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim()) showSuggestions(searchInput.value.trim());
        });
    }

    // Initial Render
    applyFilters();

    // Filtering logic (Categories)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Set current category filter
            currentFilter = btn.getAttribute('data-filter');
            applyFilters();
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
            <div class="card" data-id="${sticker.id}" data-category="${sticker.category}">
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

    attachCardListeners();

    // GSAP card stagger - fires immediately on render
    if (typeof gsap !== 'undefined') {
        const renderedCards = Array.from(gridElement.querySelectorAll('.card'));
        gsap.fromTo(renderedCards,
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.06,
                clearProps: 'all'
            }
        );
    }
}

function attachCardListeners() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
        card.addEventListener('click', handleCardClick);

        // 3D tilt on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(-2px,-2px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
    if (typeof updateMagneticTargets === 'function') updateMagneticTargets();
}

function handleCardClick(e) {
    if (e.target.closest('.add-to-cart')) return;
    const id = e.currentTarget.getAttribute('data-id');
    showProduct(id);
}

// Page transition wipe - called before showProduct
function runPageTransitionWipe(callback) {
    const wipe = document.getElementById('page-transition');
    if (!wipe) {
        if (callback) callback();
        return;
    }
    wipe.classList.remove('reverse');
    wipe.classList.add('active');
    setTimeout(() => {
        if (callback) callback();
        wipe.classList.add('reverse');
        setTimeout(() => {
            wipe.classList.remove('active', 'reverse');
        }, 600);
    }, 600);
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
    const container = document.getElementById('product-details-container');
    if (!container) return;

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
    container.innerHTML = `
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
                    <button class="btn-brutal btn-buy-now" onclick="addToCart('${sticker.id}', parseInt(document.getElementById('qty-val').innerText)); toggleCart();">BUY NOW</button>
                    <button class="btn-brutal btn-add-cart" onclick="addToCart('${sticker.id}', parseInt(document.getElementById('qty-val').innerText))">ADD TO CART</button>
                </div>
            </div>
        </div>
        
        <div class="related-section">
            <h3>SIMILAR DROPS</h3>
            <div class="related-grid">${relatedHTML}</div>
        </div>
    `;

    // Page transition wipe, then show product
    window.scrollTo(0, 0);
    runPageTransitionWipe(() => {
        const mv = document.getElementById('main-view');
        const pv = document.getElementById('product-view');
        if (!mv || !pv) return;
        mv.classList.add('hidden-view');
        pv.classList.remove('hidden-view', 'fade-out');
        pv.classList.add('fade-in');
        void pv.offsetWidth;
    });
}

function hideProduct() {
    const mv = document.getElementById('main-view');
    const pv = document.getElementById('product-view');
    if (!pv || !mv) return;

    pv.classList.replace('fade-in', 'fade-out');

    setTimeout(() => {
        pv.classList.add('hidden-view');
        pv.classList.remove('fade-out');
        mv.classList.remove('hidden-view');
        void mv.offsetWidth;
        mv.classList.remove('fade-out');
        mv.classList.add('fade-in');

        const shopSection = document.getElementById('shop');
        if (shopSection) shopSection.scrollIntoView({ behavior: 'auto' });
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
        itemsContainer.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:250px;gap:12px;">
                <div style="font-size:3rem;">🛒</div>
                <div style="font-family:var(--font-display);font-size:1.3rem;letter-spacing:0.1em;">CART IS EMPTY</div>
                <div style="font-family:var(--font-body);font-size:0.8rem;color:#888;text-align:center;">Go slap some stickers in here</div>
            </div>`;
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
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
        drawer.classList.remove('open');
        overlay.classList.add('hidden-view');
        document.body.style.overflow = '';
    } else {
        drawer.classList.remove('hidden-drawer');
        drawer.classList.add('open');
        overlay.classList.remove('hidden-view');
        document.body.style.overflow = 'hidden';
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

// Init cart UI and GSAP on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    initGSAPAnimations();
});

// GSAP Implementation Logic
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Content Stagger
    gsap.from(['.hero-subtitle', '.btn-hero'], {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
        delay: 1 // Match loading sequence to character renders
    });

    // 2. Section Titles Cinematic Reveal
    gsap.utils.toArray('.section-title-reveal').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 85%'
            },
            x: -80,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // 4. Navbar Hide/Show
    const nav = document.querySelector('nav');
    if (nav) {
        ScrollTrigger.create({
            start: 'top top',
            end: 99999,
            onUpdate: (self) => {
                if (nav.classList.contains('menu-open')) return;

                if (self.direction === 1 && self.scrollY > 100) {
                    gsap.to(nav, { yPercent: -100, duration: 0.3 });
                } else {
                    gsap.to(nav, { yPercent: 0, duration: 0.3 });
                }
            }
        });
    }

    // 5. Promo Banner Scramble
    const bannerHeading = document.querySelector('.banner .section-title-text');
    if (bannerHeading && bannerHeading.lastChild) {
        ScrollTrigger.create({
            trigger: '.banner',
            start: 'top 80%',
            once: true,
            onEnter: () => {
                const originalText = bannerHeading.lastChild.nodeValue.trim();
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
                let iterations = 0;

                const interval = setInterval(() => {
                    bannerHeading.lastChild.nodeValue = " " + originalText.split('').map((c, i) => {
                        if (c === ' ') return ' ';
                        if (i < iterations) return originalText[i];
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('');

                    iterations += 1 / 3;
                    if (iterations >= originalText.length) {
                        clearInterval(interval);
                        bannerHeading.lastChild.nodeValue = " " + originalText;
                    }
                }, 30);
            }
        });
    }

    // 6. Footer Reveal
    gsap.from('.footer-col', {
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%'
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.15
    });

    // 7. Scroll Progress Bar
    gsap.to('#scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    });
}

// Brutalist Crosshair Cursor & Trail Stickers
document.addEventListener('DOMContentLoaded', () => {
    const cursorCross = document.getElementById('cursor-cross');

    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let trailStickers = [];

    const trailDelays = [0.08, 0.15, 0.25];
    if (window.innerWidth > 1024) {
        const trailSrcs = shuffleArray(stickers).slice(0, 3);
        trailSrcs.forEach((sticker, i) => {
            const img = document.createElement('img');
            img.src = sticker.src;
            img.className = 'cursor-trail-sticker';
            document.body.appendChild(img);
            trailStickers.push({
                el: img, x: mouseX, y: mouseY, vx: 0, vy: 0, rot: 0, delay: trailDelays[i]
            });
        });
    }

    let mouseTimeout;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (cursorCross) {
            cursorCross.style.left = mouseX + 'px';
            cursorCross.style.top = mouseY + 'px';
        }

        trailStickers.forEach(ts => ts.el.style.opacity = '1');
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
            trailStickers.forEach(ts => ts.el.style.opacity = '0');
        }, 500);

        // Card hover: VIEW circle. Other hovers: default crosshair
        if (e.target.closest('.card') && !e.target.closest('.add-to-cart')) {
            cursorCross?.classList.add('cursor-card-hover');
        } else {
            cursorCross?.classList.remove('cursor-card-hover');
        }
    });

    function updateTrail() {
        const dt = 16;
        trailStickers.forEach(ts => {
            const factor = 1 - Math.exp(-dt / (ts.delay * 1000));
            const dx = mouseX - ts.x;
            const dy = mouseY - ts.y;
            ts.vx = dx * factor;
            ts.vy = dy * factor;
            ts.x += ts.vx;
            ts.y += ts.vy;
            const mappedRot = (ts.vx + ts.vy) * 0.5;
            ts.rot += (mappedRot - ts.rot) * 0.1;
            ts.el.style.transform = `translate(${ts.x - 35}px, ${ts.y - 35}px) rotate(${ts.rot}deg)`;
        });
        requestAnimationFrame(updateTrail);
    }
    if (window.innerWidth > 1024) requestAnimationFrame(updateTrail);

    // Parallax Hero Effect
    const heroStickers = document.querySelector('.hero-bg-stickers');
    if (heroStickers) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            heroStickers.style.transform = `translateY(-50%) translate(${x}px, ${y}px)`;
        });
    }

    // -----------------------------------------
    // Mobile Hamburger Menu Logic
    // -----------------------------------------
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (hamburgerBtn && nav) {
        // Toggle menu on click
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('menu-open');
            if (nav.classList.contains('menu-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('menu-open');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('menu-open') && !nav.contains(e.target)) {
                nav.classList.remove('menu-open');
                document.body.style.overflow = '';
            }
        });
    }
});