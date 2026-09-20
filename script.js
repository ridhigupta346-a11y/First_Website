/* ==========================================================================
   SPICE GARDEN - RESTAURANT WEBSITE JAVASCRIPT
   Authentic Taste, Made With Love
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initMenu();
    initGallery();
    initReservation();
    initContactAndNewsletter();
    initBackToTop();
    updateCopyrightYear();
});

/* --------------------------------------------------------------------------
   1. Dynamic Menu Data & Rendering Engine
   -------------------------------------------------------------------------- */
const MENU_ITEMS = [
    // Starters
    {
        id: 'starter-1',
        name: 'Paneer Tikka Angaare',
        category: 'starters',
        price: '$14.95',
        diet: 'veg',
        spicyLevel: 1,
        isChefSpecial: true,
        desc: 'Charcoal grilled cottage cheese marinated in Kashmiri spices, yogurt, and mustard oil.',
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'starter-2',
        name: 'Lucknowi Galouti Kebab',
        category: 'starters',
        price: '$18.50',
        diet: 'non-veg',
        spicyLevel: 2,
        isChefSpecial: true,
        desc: 'Melt-in-mouth minced lamb patties infused with 24 royal court spices, served with mint chutney.',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'starter-3',
        name: 'Crispy Amritsari Fish',
        category: 'starters',
        price: '$16.95',
        diet: 'non-veg',
        spicyLevel: 2,
        isChefSpecial: false,
        desc: 'Carom seed-crusted fresh white fish fillets, flash fried golden and dusted with chaat masala.',
        image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'starter-4',
        name: 'Tandoori Malai Broccoli',
        category: 'starters',
        price: '$13.50',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: false,
        desc: 'Broccoli florets steeped in royal cardamom cream, roasted in our earthen clay oven.',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'starter-5',
        name: 'Spicy Dragon Prawns',
        category: 'starters',
        price: '$19.95',
        diet: 'non-veg',
        spicyLevel: 3,
        isChefSpecial: true,
        desc: 'Jumbo prawns tossed with crushed Szechuan peppers, garlic scallions, and amber honey glaze.',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'starter-6',
        name: 'Dahi Ke Shahi Kebab',
        category: 'starters',
        price: '$12.95',
        diet: 'veg',
        spicyLevel: 1,
        isChefSpecial: false,
        desc: 'Crispy golden patties of hung yogurt, green chillies, coriander, and crushed pistachios.',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
    },

    // Main Course
    {
        id: 'main-1',
        name: 'Butter Chicken Royal',
        category: 'main-course',
        price: '$22.50',
        diet: 'non-veg',
        spicyLevel: 1,
        isChefSpecial: true,
        desc: 'Tender tandoor-smoked chicken simmered in rich satin velvet tomato gravy with dried fenugreek.',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'main-2',
        name: 'Dal Bukhara Smoked Lentils',
        category: 'main-course',
        price: '$17.50',
        diet: 'veg',
        spicyLevel: 1,
        isChefSpecial: true,
        desc: 'Black lentils slow-cooked overnight over embers with butter, cream, and plum tomatoes.',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'main-3',
        name: 'Nalli Rogan Josh',
        category: 'main-course',
        price: '$25.00',
        diet: 'non-veg',
        spicyLevel: 2,
        isChefSpecial: true,
        desc: 'Slow braised lamb shank in traditional Kashmiri cockscomb herb, rattan jyot, and saffron broth.',
        image: 'https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'main-4',
        name: 'Shahi Paneer Lababdar',
        category: 'main-course',
        price: '$18.95',
        diet: 'veg',
        spicyLevel: 1,
        isChefSpecial: false,
        desc: 'Farm-fresh cottage cheese cubes bathed in coarse onion tomato gravy with cashew butter.',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'main-5',
        name: 'Kadhai Prawns Masala',
        category: 'main-course',
        price: '$24.00',
        diet: 'non-veg',
        spicyLevel: 3,
        isChefSpecial: false,
        desc: 'Tiger prawns stir-fried in cast-iron wok with crushed coriander seeds, bell peppers, and red chillies.',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'main-6',
        name: 'Wild Mushroom Matar Malai',
        category: 'main-course',
        price: '$19.50',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: false,
        desc: 'Forest mushrooms and sweet garden peas in a velvety white cashew and royal cardamom reduction.',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
    },

    // Biryani
    {
        id: 'biryani-1',
        name: 'Hyderabadi Dum Gosht Biryani',
        category: 'biryani',
        price: '$23.50',
        diet: 'non-veg',
        spicyLevel: 2,
        isChefSpecial: true,
        desc: 'Aged basmati rice sealed in earthen handi with tender marinated goat meat, saffron, and fried onions.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'biryani-2',
        name: 'Lucknowi Murgh Dum Biryani',
        category: 'biryani',
        price: '$20.95',
        diet: 'non-veg',
        spicyLevel: 1,
        isChefSpecial: true,
        desc: 'Fragrant chicken biryani slow-cooked with screwpine essence, whole spices, and caramelized shallots.',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'biryani-3',
        name: 'Royal Subz Dum Biryani',
        category: 'biryani',
        price: '$17.95',
        diet: 'veg',
        spicyLevel: 1,
        isChefSpecial: false,
        desc: 'Seasonal organic vegetables, paneer cubes, and mint leaves layered with saffron ghee basmati rice.',
        image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'biryani-4',
        name: 'Coastal Chettinad Prawns Biryani',
        category: 'biryani',
        price: '$24.50',
        diet: 'non-veg',
        spicyLevel: 3,
        isChefSpecial: false,
        desc: 'Spiced bay prawns cooked in star anise, kalpasi stone flower, curry leaves, and seeraga samba rice.',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
    },

    // Desserts
    {
        id: 'dessert-1',
        name: 'Saffron Pistachio Kulfi Falooda',
        category: 'desserts',
        price: '$9.50',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: true,
        desc: 'Traditional dense Indian ice cream with rose syrup, basil seeds, vermicelli, and crushed pistachios.',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'dessert-2',
        name: 'Shahi Tukda Royal Gold',
        category: 'desserts',
        price: '$11.00',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: true,
        desc: 'Crisp ghee-fried bread steeped in cardamom syrup, topped with thick rabri and edible gold leaf.',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'dessert-3',
        name: 'Gulab Jamun Cheesecake',
        category: 'desserts',
        price: '$10.50',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: false,
        desc: 'Fusion baked mascarpone cheesecake with warm cardamom gulab jamun centered in biscuit crust.',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'dessert-4',
        name: 'Mango Cardamom Panna Cotta',
        category: 'desserts',
        price: '$9.00',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: false,
        desc: 'Silky Alphonso mango cream infusion paired with mint coulis and candied almonds.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
    },

    // Drinks
    {
        id: 'drink-1',
        name: 'Royal Kesaria Thandai',
        category: 'drinks',
        price: '$7.50',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: true,
        desc: 'Chilled almond and poppy seed nectar perfumed with saffron threads, fennel, and rose water.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'drink-2',
        name: 'Smoked Masala Chaas',
        category: 'drinks',
        price: '$5.50',
        diet: 'veg',
        spicyLevel: 1,
        isChefSpecial: false,
        desc: 'Refreshing churned buttermilk infused with roasted cumin, rock salt, ginger, and charcoal smoke.',
        image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'drink-3',
        name: 'Tamarind Chilli Mojito',
        category: 'drinks',
        price: '$8.50',
        diet: 'veg',
        spicyLevel: 2,
        isChefSpecial: true,
        desc: 'Tangy tamarind pulp, fresh muddled garden mint, sparkling soda, and a dash of fiery green chilli.',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'drink-4',
        name: 'Alphonso Mango Lassi',
        category: 'drinks',
        price: '$6.50',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: false,
        desc: 'Rich sweet yogurt churned with pure Ratnagiri Alphonso mango pulp and a pinch of green cardamom.',
        image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'drink-5',
        name: 'Spiced Kashmiri Kahwa',
        category: 'drinks',
        price: '$5.95',
        diet: 'veg',
        spicyLevel: 0,
        isChefSpecial: false,
        desc: 'Exquisite green tea brewed with whole cinnamon, green cardamom, saffron, and slivered almonds.',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
    }
];

let activeCategory = 'all';
let activeDiet = 'all';
let searchKeyword = '';

function initMenu() {
    const menuGrid = document.getElementById('menuGrid');
    const catButtons = document.querySelectorAll('.cat-btn');
    const dietButtons = document.querySelectorAll('.diet-btn');
    const searchInput = document.getElementById('menuSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const resetBtn = document.getElementById('resetMenuFilterBtn');
    const footerCatLinks = document.querySelectorAll('[data-cat-link]');

    if (!menuGrid) return;

    // Initial render
    renderMenuItems();

    // Category button click handlers
    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            activeCategory = btn.dataset.category;
            renderMenuItems();
        });
    });

    // Dietary filter button click handlers
    dietButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            dietButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeDiet = btn.dataset.diet;
            renderMenuItems();
        });
    });

    // Live search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchKeyword = e.target.value.trim().toLowerCase();
            if (clearSearchBtn) {
                if (searchKeyword.length > 0) {
                    clearSearchBtn.classList.add('visible');
                } else {
                    clearSearchBtn.classList.remove('visible');
                }
            }
            renderMenuItems();
        });
    }

    // Clear search handler
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            searchKeyword = '';
            clearSearchBtn.classList.remove('visible');
            renderMenuItems();
            if (searchInput) searchInput.focus();
        });
    }

    // Reset filters button handler
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            activeCategory = 'all';
            activeDiet = 'all';
            searchKeyword = '';
            if (searchInput) searchInput.value = '';
            if (clearSearchBtn) clearSearchBtn.classList.remove('visible');

            catButtons.forEach(b => {
                b.classList.toggle('active', b.dataset.category === 'all');
                b.setAttribute('aria-selected', b.dataset.category === 'all' ? 'true' : 'false');
            });
            dietButtons.forEach(b => {
                b.classList.toggle('active', b.dataset.diet === 'all');
            });

            renderMenuItems();
        });
    }

    // Footer category link triggers
    footerCatLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetCat = link.dataset.catLink;
            if (targetCat) {
                const targetBtn = document.querySelector(`.cat-btn[data-category="${targetCat}"]`);
                if (targetBtn) {
                    targetBtn.click();
                }
            }
        });
    });
}

function renderMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    const noResults = document.getElementById('noMenuResults');
    if (!menuGrid) return;

    // Filter items
    const filtered = MENU_ITEMS.filter(item => {
        // Category filter
        const matchCategory = (activeCategory === 'all') || (item.category === activeCategory);

        // Dietary filter
        let matchDiet = true;
        if (activeDiet === 'veg') matchDiet = item.diet === 'veg';
        else if (activeDiet === 'non-veg') matchDiet = item.diet === 'non-veg';
        else if (activeDiet === 'chef') matchDiet = item.isChefSpecial === true;

        // Search keyword filter
        let matchSearch = true;
        if (searchKeyword) {
            matchSearch = item.name.toLowerCase().includes(searchKeyword) ||
                          item.desc.toLowerCase().includes(searchKeyword) ||
                          item.category.toLowerCase().includes(searchKeyword);
        }

        return matchCategory && matchDiet && matchSearch;
    });

    if (filtered.length === 0) {
        menuGrid.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }

    if (noResults) noResults.classList.add('hidden');

    menuGrid.innerHTML = filtered.map(item => {
        // Build spice level icons
        let spiceIcons = '';
        if (item.spicyLevel > 0) {
            spiceIcons = '<div class="spice-meter" title="Spiciness: ' + item.spicyLevel + '/3">';
            for (let i = 0; i < item.spicyLevel; i++) {
                spiceIcons += '<i class="fa-solid fa-pepper-hot"></i>';
            }
            spiceIcons += '</div>';
        }

        // Diet badge dot
        const dietDotClass = item.diet === 'veg' ? 'veg-dot' : 'nonveg-dot';
        const dietTitle = item.diet === 'veg' ? 'Pure Vegetarian' : 'Non-Vegetarian';

        // Chef special badge
        const chefBadge = item.isChefSpecial ?
            `<span class="badge-chef"><i class="fa-solid fa-crown"></i> Chef's Special</span>` : '';

        return `
            <div class="food-card" data-id="${item.id}">
                <div class="food-img-container">
                    <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy">
                    <span class="badge-price">${item.price}</span>
                    <div class="badge-diet" title="${dietTitle}">
                        <span class="badge-dot ${dietDotClass}"></span>
                    </div>
                    ${chefBadge}
                </div>
                <div class="food-card-body">
                    <div class="food-header">
                        <h3 class="food-title">${item.name}</h3>
                        ${spiceIcons}
                    </div>
                    <p class="food-desc">${item.desc}</p>
                    <div class="food-footer">
                        <span class="food-category-label">${formatCategoryName(item.category)}</span>
                        <button class="btn-order-quick" onclick="handleQuickOrder('${escapeQuotes(item.name)}', '${item.price}')">
                            <i class="fa-solid fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function formatCategoryName(cat) {
    if (cat === 'main-course') return 'Main Course';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'");
}

// Quick Add / Order button handler
window.handleQuickOrder = function(itemName, price) {
    showToast(`Added <strong>${itemName}</strong> (${price}) to your dining interest!`, 'success');
};

/* --------------------------------------------------------------------------
   2. Gallery Lightbox & Filtering
   -------------------------------------------------------------------------- */
const GALLERY_ITEMS = [
    {
        id: 1,
        title: 'Earthen Tandoor Feast',
        category: 'food',
        categoryLabel: 'Signature Dish',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
        desc: 'Succulent spiced chops fresh out of our clay charcoal tandoor.'
    },
    {
        id: 2,
        title: 'The Royal Banquet Hall',
        category: 'ambiance',
        categoryLabel: 'Dining Ambiance',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        desc: 'Opulent warm ambient lighting with comfortable royal velvet seating.'
    },
    {
        id: 3,
        title: 'Master Chef Fire & Spice',
        category: 'kitchen',
        categoryLabel: 'Chef in Action',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
        desc: 'Executive chefs flambéing artisanal whole spices with precision.'
    },
    {
        id: 4,
        title: 'Saffron Hyderabadi Dum Handi',
        category: 'food',
        categoryLabel: 'Signature Dish',
        image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
        desc: 'Sealed dough earthen pot bursting with aromatic dum biryani.'
    },
    {
        id: 5,
        title: 'Lush Garden Alfresco Patio',
        category: 'ambiance',
        categoryLabel: 'Dining Ambiance',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
        desc: 'Serene botanical patio seating under fairy lights and starlit skies.'
    },
    {
        id: 6,
        title: 'Tasting Platter & Spiced Chutneys',
        category: 'food',
        categoryLabel: 'Signature Dish',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
        desc: 'Assortment of roasted kebabs served with artisanal house chutneys.'
    },
    {
        id: 7,
        title: 'Handcrafting Artisanal Breads',
        category: 'kitchen',
        categoryLabel: 'Chef in Action',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80',
        desc: 'Freshly stretched garlic naan and butter kulcha baked against clay walls.'
    },
    {
        id: 8,
        title: 'Private Candlelit Lounge',
        category: 'ambiance',
        categoryLabel: 'Dining Ambiance',
        image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
        desc: 'Intimate dining enclave curated for romantic dinners and celebrations.'
    }
];

let currentGalleryIndex = 0;
let filteredGalleryItems = [...GALLERY_ITEMS];

function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const modalCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (!galleryGrid) return;

    // Render Gallery items
    function renderGallery(filter = 'all') {
        filteredGalleryItems = filter === 'all' 
            ? GALLERY_ITEMS 
            : GALLERY_ITEMS.filter(item => item.category === filter);

        galleryGrid.innerHTML = filteredGalleryItems.map((item, idx) => `
            <div class="gallery-item" data-index="${idx}">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-caption-cat">${item.categoryLabel}</span>
                    <h4 class="gallery-caption-title">${item.title}</h4>
                </div>
                <div class="gallery-zoom-icon">
                    <i class="fa-solid fa-expand"></i>
                </div>
            </div>
        `).join('');

        // Attach click to open lightbox
        document.querySelectorAll('.gallery-item').forEach(el => {
            el.addEventListener('click', () => {
                const idx = parseInt(el.dataset.index, 10);
                openLightbox(idx);
            });
        });
    }

    renderGallery();

    // Filter button clicks
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.galleryFilter);
        });
    });

    // Lightbox Open
    function openLightbox(idx) {
        currentGalleryIndex = idx;
        const currentItem = filteredGalleryItems[currentGalleryIndex];
        if (!currentItem) return;

        modalImg.src = currentItem.image;
        modalCaption.innerHTML = `<strong>${currentItem.title}</strong> — ${currentItem.desc}`;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    // Lightbox Close
    function closeLightbox() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Navigation in Lightbox
    function nextLightbox() {
        currentGalleryIndex = (currentGalleryIndex + 1) % filteredGalleryItems.length;
        openLightbox(currentGalleryIndex);
    }

    function prevLightbox() {
        currentGalleryIndex = (currentGalleryIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
        openLightbox(currentGalleryIndex);
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', nextLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevLightbox);

    // Close on overlay backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeLightbox();
        });
    }

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
    });
}

/* --------------------------------------------------------------------------
   3. Reservation Form Validation & Confirmation Modal
   -------------------------------------------------------------------------- */
function initReservation() {
    const resForm = document.getElementById('reservationForm');
    const dateInput = document.getElementById('resDate');
    const modal = document.getElementById('reservationModal');
    const modalDetails = document.getElementById('modalBookingDetails');
    const closeResModalBtn = document.getElementById('closeReservationModal');
    const printBtn = document.getElementById('printReservationBtn');

    if (!resForm) return;

    // Set min date to today's date
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        dateInput.value = today;
    }

    resForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve form fields
        const nameInput = document.getElementById('resName');
        const phoneInput = document.getElementById('resPhone');
        const emailInput = document.getElementById('resEmail');
        const guestsInput = document.getElementById('resGuests');
        const timeInput = document.getElementById('resTime');
        const seatingInput = document.getElementById('resSeating');
        const requestInput = document.getElementById('resRequest');

        // Validation flags
        let isValid = true;

        // Validate Name
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            showInputError('nameError', nameInput, 'Please provide your valid full name (min 2 letters).');
            isValid = false;
        } else {
            clearInputError('nameError', nameInput);
        }

        // Validate Phone (at least 7 digits)
        const phonePattern = /^[\d\s+\-()]{7,20}$/;
        if (!phoneInput.value.trim() || !phonePattern.test(phoneInput.value.trim())) {
            showInputError('phoneError', phoneInput, 'Please enter a valid contact phone number.');
            isValid = false;
        } else {
            clearInputError('phoneError', phoneInput);
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
            showInputError('emailError', emailInput, 'Please provide a valid email address.');
            isValid = false;
        } else {
            clearInputError('emailError', emailInput);
        }

        // Validate Guests
        if (!guestsInput.value) {
            showInputError('guestsError', guestsInput, 'Please select number of guests.');
            isValid = false;
        } else {
            clearInputError('guestsError', guestsInput);
        }

        // Validate Date
        if (!dateInput.value) {
            showInputError('dateError', dateInput, 'Please select a reservation date.');
            isValid = false;
        } else {
            clearInputError('dateError', dateInput);
        }

        // Validate Time
        if (!timeInput.value) {
            showInputError('timeError', timeInput, 'Please select your preferred time slot.');
            isValid = false;
        } else {
            clearInputError('timeError', timeInput);
        }

        if (!isValid) {
            showToast('Please correct the highlighted errors in the form.', 'info');
            return;
        }

        // Generate Booking Reference
        const bookingRef = 'SG-' + Math.floor(100000 + Math.random() * 900000);
        const reservationData = {
            bookingRef,
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            guests: guestsInput.value,
            date: formatDate(dateInput.value),
            time: timeInput.value,
            seating: seatingInput ? seatingInput.value : 'Indoor Royal Dining',
            request: requestInput ? requestInput.value.trim() : '',
            createdAt: new Date().toISOString()
        };

        // Store reservation in localStorage
        try {
            const existing = JSON.parse(localStorage.getItem('spice_garden_reservations') || '[]');
            existing.push(reservationData);
            localStorage.setItem('spice_garden_reservations', JSON.stringify(existing));
        } catch (err) {
            console.warn('LocalStorage error:', err);
        }

        // Populate Success Modal
        modalDetails.innerHTML = `
            <div class="booking-summary-grid">
                <div class="summary-ref-box">
                    <span class="summary-label">Reservation Reference ID</span>
                    <div class="summary-ref-code">${reservationData.bookingRef}</div>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Guest Name</span>
                    <span class="summary-val">${reservationData.name}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Party Size</span>
                    <span class="summary-val">${reservationData.guests} Guest(s)</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Date</span>
                    <span class="summary-val">${reservationData.date}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Time Slot</span>
                    <span class="summary-val">${reservationData.time}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Seating Preference</span>
                    <span class="summary-val">${reservationData.seating}</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Contact</span>
                    <span class="summary-val">${reservationData.phone}</span>
                </div>
                ${reservationData.request ? `
                <div class="summary-item" style="grid-column: 1 / -1;">
                    <span class="summary-label">Special Request</span>
                    <span class="summary-val" style="font-size: 0.88rem; font-style: italic;">"${reservationData.request}"</span>
                </div>` : ''}
            </div>
        `;

        // Show Modal
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Trigger Success Toast
        showToast(`Table booked successfully for <strong>${reservationData.name}</strong>!`, 'success');

        // Reset Form
        resForm.reset();
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    });

    // Close Modal handler
    if (closeResModalBtn) {
        closeResModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    }

    // Print details handler
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

function showInputError(errorElementId, inputElement, message) {
    const errorEl = document.getElementById(errorElementId);
    if (errorEl) errorEl.textContent = message;
    if (inputElement) inputElement.classList.add('is-invalid');
}

function clearInputError(errorElementId, inputElement) {
    const errorEl = document.getElementById(errorElementId);
    if (errorEl) errorEl.textContent = '';
    if (inputElement) inputElement.classList.remove('is-invalid');
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        const d = new Date(parts[0], parts[1] - 1, parts[2]);
        return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    }
    return dateStr;
}

/* --------------------------------------------------------------------------
   4. Navigation, Sticky Shrink & Scroll Spy
   -------------------------------------------------------------------------- */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Sticky navbar effect on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Mobile Hamburger Toggle
    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            hamburgerBtn.classList.toggle('active', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close drawer when any mobile link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                hamburgerBtn.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });

        const drawerCta = document.querySelector('.mobile-drawer-btn');
        if (drawerCta) {
            drawerCta.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                hamburgerBtn.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        }
    }

    // Scroll Spy for Desktop Nav Links
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPos = window.scrollY + 160;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                const href = link.getAttribute('href').replace('#', '');
                if (href === currentSectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }, { passive: true });
}

/* --------------------------------------------------------------------------
   5. Contact Form & Newsletter Subscription
   -------------------------------------------------------------------------- */
function initContactAndNewsletter() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');

    // Contact Quick Form
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value.trim();
            const email = document.getElementById('contactEmail').value.trim();
            const msg = document.getElementById('contactMessage').value.trim();

            if (!name || !email || !msg) {
                showToast('Please fill out all fields in the contact form.', 'info');
                return;
            }

            showToast(`Thank you, <strong>${name}</strong>! Your message has been sent. We will reply within 2 hours.`, 'success');
            contactForm.reset();
        });
    }

    // Footer Newsletter Form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const email = emailInput.value.trim();

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showToast('Please enter a valid email address for subscription.', 'info');
                return;
            }

            showToast('🎉 You have successfully subscribed to the Spice Garden Newsletter!', 'success');
            newsletterForm.reset();
        });
    }
}

/* --------------------------------------------------------------------------
   6. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 450) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* --------------------------------------------------------------------------
   7. Toast Notification Utility
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' 
        ? '<i class="fa-solid fa-circle-check"></i>' 
        : '<i class="fa-solid fa-circle-info"></i>';

    toast.innerHTML = `
        ${icon}
        <div class="toast-msg">${message}</div>
    `;

    container.appendChild(toast);

    // Auto dismiss after 4.2 seconds
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.35s ease forwards';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 350);
    }, 4200);
}

/* --------------------------------------------------------------------------
   8. Dynamic Copyright Year
   -------------------------------------------------------------------------- */
function updateCopyrightYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
