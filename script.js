
// Product Database - Contains all products for different categories
const productDatabase = {
    'boohooMAN': [
        { id: 1, company: "boohooMAN", name: "Slim Fit Cotton Shirt", image: "https://cdn02.nnnow.com/web-images/large/styles/SZQ22LOXHWB/1751626540373/1.jpg", price: 1299, originalPrice: 2599, discount: 50, rating: 4.2 },
        { id: 2, company: "boohooMAN", name: "Printed Casual Shirt", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/shirt/a/2/7/m-st222bk-majestic-man-original-imagab9aegnz4wmk-bb.jpeg?q=90", price: 1499, originalPrice: 2999, discount: 50, rating: 4.3 },
        { id: 3, company: "boohooMAN", name: "Relaxed Fit T-Shirt", image: "https://m.media-amazon.com/images/I/8176m6KuIHL._AC_UY1100_.jpg", price: 899, originalPrice: 1799, discount: 50, rating: 4.1 },
        { id: 4, company: "boohooMAN", name: "Denim Jacket", image: "https://img.freepik.com/free-photo/medium-shot-man-posing-outdoors_23-2150204428.jpg?semt=ais_hybrid&w=740&q=80", price: 2499, originalPrice: 4999, discount: 50, rating: 4.5 },
        { id: 5, company: "boohooMAN", name: "Cargo Pants", image: "https://assets.ajio.com/medias/sys_master/root/20241203/yUKL/674f22880f47f80c87d08a26/-473Wx593H-700873234-khaki-MODEL.jpg", price: 1799, originalPrice: 3599, discount: 50, rating: 4.4 },
        { id: 6, company: "boohooMAN", name: "Graphic Print Hoodie", image: "https://images.bewakoof.com/original/men-s-black-monster-graphic-printed-oversized-hoodies-625376-1721130991-1.jpg", price: 1999, originalPrice: 3999, discount: 50, rating: 4.6 },
        { id: 7, company: "boohooMAN", name: "Slim Fit Jeans", image: "https://m.media-amazon.com/images/I/914d-362jwL._AC_UY1100_.jpg", price: 2199, originalPrice: 4399, discount: 50, rating: 4.3 },
        { id: 8, company: "boohooMAN", name: "Striped Polo T-Shirt", image: "https://cobbitaly.com/cdn/shop/files/TSSI2550RED_2_ce9e33cf-0f23-4000-9dba-ed98637dfb7a_1800x1800.jpg?v=1756703862", price: 1099, originalPrice: 2199, discount: 50, rating: 4.2 }
    ],
    'Calvin Klein': [
        { id: 9, company: "Calvin Klein", name: "Logo Crew Neck T-Shirt", image: "https://uspoloassn.in/cdn/shop/files/7_5ef6aa08-bfe3-4b0d-83a8-a9c5b0508648.jpg?v=1738060445", price: 2499, originalPrice: 4999, discount: 50, rating: 4.7 },
        { id: 10, company: "Calvin Klein", name: "Slim Fit Polo Shirt", image: "https://cdn14.nnnow.com/web-images/large/styles/39CK3A223PG/1729681628912/1.jpg", price: 2799, originalPrice: 5599, discount: 50, rating: 4.6 },
        { id: 11, company: "Calvin Klein", name: "Denim Regular Fit Jeans", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/jean/0/5/u/28-dt-mj-db-baggy06-denim-trendy-original-imah57b9kgrc2caz.jpeg?q=90", price: 4999, originalPrice: 9999, discount: 50, rating: 4.8 },
        { id: 12, company: "Calvin Klein", name: "Monogram Sweatshirt", image: "https://psofsweden-products.imgix.net/images/1231_992b0f34e2-2241-033-760-carl-monogram-sweatshirt-760-dark-grey-00011-1500x2000-original.jpg?q=80&fit=clip&w=800&fm=jpg&auto=format", price: 3999, originalPrice: 7999, discount: 50, rating: 4.5 },
        { id: 13, company: "Calvin Klein", name: "Essential Slim Fit Shirt", image: "https://rukminim2.flixcart.com/image/412/494/xif0q/shirt/i/y/p/-original-imahfqhcjpajqxgt.jpeg?q=90&crop=false", price: 3499, originalPrice: 6999, discount: 50, rating: 4.4 },
        { id: 14, company: "Calvin Klein", name: "Logo Bomber Jacket", image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/19059928/2023/9/27/52b8de52-0f72-4277-9537-136c8c0a717f1695798998123-Mens--Polyester-Printed-Regular-Khakhi-Jackets-8451695798997-1.jpg", price: 7999, originalPrice: 15999, discount: 50, rating: 4.9 },
        { id: 15, company: "Calvin Klein", name:"graphic print T-shirt", image:"https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013962865-Black-BLACK-1000013962865_01-2100.jpg", price: 2199, originalPrice: 4399, discount: 50, rating: 4.3 },
        { id: 16, company: "Calvin Klein", name: "Track Pants", image: "https://images.meesho.com/images/products/460548072/sq5e3_512.webp?width=512", price: 2999, originalPrice: 5999, discount: 50, rating: 4.5 }
    ],
    'ALDO': [
        { id: 17, company: "ALDO", name: "Leather Formal Shoes", image: "https://allencooperindia.com/cdn/shop/files/1_3431008d-c049-41c8-b4e8-de2e23223924.jpg?v=1753097189", price: 4999, originalPrice: 9999, discount: 50, rating: 4.6 },
        { id: 18, company: "ALDO", name: "Casual Loafers", image: "https://egoss.in/cdn/shop/files/DSC_2146.jpg?v=1753878920&width=1950", price: 3999, originalPrice: 7999, discount: 50, rating: 4.5 },
        { id: 19, company: "ALDO", name: "Sneakers White", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/17097806/2022/2/10/aa9f5212-f2eb-4531-b836-1df0c3d3fe2d1644484313283MastHarbourMenWhiteStripedSneakers1.jpg", price: 4499, originalPrice: 8999, discount: 50, rating: 4.7 },
        { id: 20, company: "ALDO", name: "Leather Boots", image: "https://hitz.co.in/cdn/shop/files/3003-RED.jpg?v=1755619269", price: 6999, originalPrice: 13999, discount: 50, rating: 4.8 },
        { id: 21, company: "ALDO", name: "Canvas Slip-Ons", image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/25762130/2024/2/13/aeba2604-4516-4be5-bb08-f009038e230c1707801401415-Styli-Men-Eric-Boardwalk-Canvas-Slip-On-Shoes-with-Gusset-De-1.jpg", price: 2999, originalPrice: 5999, discount: 50, rating: 4.4 },
        { id: 22, company: "ALDO", name: "Sports Shoes", image: "https://abrosshoes.com/cdn/shop/files/LGreyMustard_0000_GenerativeFill.jpg?v=1756296568&width=1600", price: 5499, originalPrice: 10999, discount: 50, rating: 4.6 },
        { id: 23, company: "ALDO", name: "Oxford Shoes", image: "https://admin.mochishoes.com/product/19-179/660/19-179H23.jpg", price: 5999, originalPrice: 11999, discount: 50, rating: 4.7 },
        { id: 24, company: "ALDO", name: "Driving Shoes", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/309236/01/sv01/fnd/IND/fmt/png/BMW-MMS-Neo-Cat-Mid-2.0-Driving-Shoes", price: 4499, originalPrice: 8999, discount: 50, rating: 4.5 }
    ],
    'Collective Outfits': [
        { id: 25, company: "Collective Outfits", name: "Ethnic Kurta Set", image: "https://www.ethnicmela.in/cdn/shop/files/020___6890_1_2a41b58d-eda0-408d-9ad2-bffd60284a4e.jpg?v=1737234117", price: 1999, originalPrice: 3999, discount: 50, rating: 4.4 },
        { id: 26, company: "Collective Outfits", name: "Wedding Sherwani", image: "https://khushboobaheti.com/cdn/shop/products/DreamyDusk-EmbroideredWeddingSherwaniSetbyDesignerKhushbooBaheti1.webp?v=1680200974", price: 7999, originalPrice: 15999, discount: 50, rating: 4.8 },
        { id: 27, company: "Collective Outfits", name: "Cotton Kurta", image: "https://www.nihalfashions.com/media/catalog/product/cache/caa15edf98145413286703527de7b8dd/b/l/blue-cotton-kurta-pajama-for-men-nmk-6221.jpg", price: 1499, originalPrice: 2999, discount: 50, rating: 4.3 },
        { id: 28, company: "Collective Outfits", name: "Nehru Jacket", image: "https://artimen.in/cdn/shop/products/LCM_1369.jpg?v=1652348151&width=2579", price: 2499, originalPrice: 4999, discount: 50, rating: 4.5 },
        { id: 29, company: "Collective Outfits", name: "Printed Kurta Pajama", image: "https://pictures.kartmax.in/cover/live/600x800/quality=6/sites/9s145MyZrWdIAwpU0JYS/product-images/n_stylish_blue_shaded_silk_printed_kurta_suit_1720270288gkl_feasta_l232_a_2.jpg", price: 2199, originalPrice: 4399, discount: 50, rating: 4.4 },
        { id: 30, company: "Collective Outfits", name: "Festive Kurta", image: "https://clothsvilla.com/cdn/shop/files/Navy-Blue_Rani-Color-Elegant-Men_s-Kurta-for-Navratri-Festival-and-Dandiya-Night-Party-KF-6021_2_1024x1024.webp?v=1741938514", price: 1799, originalPrice: 3599, discount: 50, rating: 4.6 },
        { id: 31, company: "Collective Outfits", name: "Indo Western Outfit", image: "https://shreeman.in/cdn/shop/files/1J8A1644.jpg?v=1740479922", price: 3999, originalPrice: 7999, discount: 50, rating: 4.7 },
        { id: 32, company: "Collective Outfits", name: "Designer Kurta Set", image: "https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21.jpg?v=1681723151", price: 2999, originalPrice: 5999, discount: 50, rating: 4.5 }
    ],
    'NAUTICA': [
        { id: 33, company: "NAUTICA", name: "Striped Polo T-Shirt", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MARCH/21/HLMVlrdy_d40dcf8bd5094a0d8f65fdb70b21bbf8.jpg", price: 1999, originalPrice: 3999, discount: 50, rating: 4.4 },
        { id: 34, company: "NAUTICA", name: "Sailing Graphic T-Shirt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBOH1OX2AfG92jIGsW4CqaOQxwtuCpDzqqQ&s", price: 1599, originalPrice: 3199, discount: 50, rating: 4.3 },
        { id: 35, company: "NAUTICA", name: "Regular Fit Chinos", image: "https://images-cdn.ubuy.co.in/66f7cf75a2a44a401f281c9c-amazon-essentials-men-39-s-slim-fit.jpg", price: 2499, originalPrice: 4999, discount: 50, rating: 4.5 },
        { id: 36, company: "NAUTICA", name: "Denim Casual Shirt", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/24/90lU3Tyn_63b0eb8efb20403babfad93c825a1d87.jpg", price: 2199, originalPrice: 4399, discount: 50, rating: 4.6 },
        { id: 37, company: "NAUTICA", name: "Hooded Sweatshirt", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/8/pxtcgiOl_1175e36fadf2485c915e9447d79042c1.jpg", price: 2999, originalPrice: 5999, discount: 50, rating: 4.7 },
        { id: 38, company: "NAUTICA", name: "Windbreaker Jacket", image: "https://www.nautica.com/dw/image/v2/BDCV_PRD/on/demandware.static/-/Sites-nautica-master-catalog/default/dwfd4557f7/images/0731516000016_JR1703_134_A.jpg?sw=2000&sh=2000&sm=fit", price: 4999, originalPrice: 9999, discount: 50, rating: 4.8 },
        { id: 39, company: "NAUTICA", name: "Classic Fit Jeans", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/35599211/2025/7/18/0912ce1c-9d1c-4f81-ac7a-b8b590e064121752822991464-Nautica-Men-Jeans-1941752822990825-1.jpg", price: 2799, originalPrice: 5599, discount: 50, rating: 4.4 },
        { id: 40, company: "NAUTICA", name: "Crew Neck Sweater", image: "https://m.media-amazon.com/images/I/91DUZxXy6vL._AC_UY1000_.jpg", price: 3499, originalPrice: 6999, discount: 50, rating: 4.5 }
    ],
    'Sandles': [
        { id: 41, company: "Red Tape", name: "Men Leather Sandals", image: "https://m.media-amazon.com/images/I/616ANIcGZFL._AC_UY1000_.jpg", price: 1499, originalPrice: 2999, discount: 50, rating: 4.3 },
        { id: 42, company: "Woodland", name: "Outdoor Sandals", image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021333086_437Wx649H_202402242108331.jpeg", price: 1999, originalPrice: 3999, discount: 50, rating: 4.5 },
        { id: 43, company: "Bata", name: "Comfort Sandals", image: "https://m.media-amazon.com/images/I/51zpsfEOIWL._AC_UY1000_.jpg", price: 899, originalPrice: 1799, discount: 50, rating: 4.2 },
        { id: 44, company: "Puma", name: "Sports Sandals", image: "https://m.media-amazon.com/images/I/51WGItJswpL._AC_UY1000_.jpg", price: 1799, originalPrice: 3599, discount: 50, rating: 4.4 },
        { id: 45, company: "Adidas", name: "Slide Sandals", image: "https://m.media-amazon.com/images/I/71Be-B5elHL._AC_UY1000_.jpg", price: 1299, originalPrice: 2599, discount: 50, rating: 4.3 },
        { id: 46, company: "Crocs", name: "Classic Clogs", image: "https://m.media-amazon.com/images/I/713HKaLciZL._AC_SL1500_.jpg", price: 2499, originalPrice: 4999, discount: 50, rating: 4.6 },
        { id: 47, company: "Sparx", name: "Casual Sandals", image: "https://5.imimg.com/data5/DJ/LV/JP/ANDROID-49727842/product-jpeg-500x500.jpg", price: 699, originalPrice: 1399, discount: 50, rating: 4.1 },
        { id: 48, company: "Lee Cooper", name: "Beach Sandals", image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/11054658/2019/12/14/d95ba951-f7ff-4557-8c44-1879fa2580391576307293615-Lee-Cooper-Men-Tan-Sandals-1841576307291281-1.jpg", price: 999, originalPrice: 1999, discount: 50, rating: 4.2 }
    ],
    'Shirt': [
        { id: 49, company: "Peter England", name: "Formal White Shirt", image: "https://rukminim2.flixcart.com/image/368/490/xif0q/shirt/n/r/2/44-pesfwslbp68671-peter-england-original-imahyakdv8m77fy9.jpeg?q=90&crop=false", price: 999, originalPrice: 1999, discount: 50, rating: 4.4 },
        { id: 50, company: "Van Heusen", name: "Slim Fit Shirt", image: "https://imagescdn.vanheusenindia.com/img/app/product/3/39946813-19334314.jpg?auto=format&w=390", price: 1299, originalPrice: 2599, discount: 50, rating: 4.5 },
        { id: 51, company: "Allen Solly", name: "Casual Checkered Shirt", image: "https://images-magento.shoppersstop.com/pub/media/catalog/product/S25SFACUFO42409/S25SFACUFO42409_MULTI/S25SFACUFO42409_MULTI_alt1.jpg_2000Wx3000H", price: 1099, originalPrice: 2199, discount: 50, rating: 4.3 },
        { id: 52, company: "Arrow", name: "Business Formal Shirt", image: "https://assets.myntassets.com/w_200,q_30,dpr_3,fl_progressive,f_webp/assets/images/30019840/2024/8/5/f094ec85-8c98-423b-9772-d0046c30fe9d1722850159242-Hancock-Men-Solid-Wrinkle-Resistant-Stretchable-Slim-Fit-For-1.jpg", price: 1499, originalPrice: 2999, discount: 50, rating: 4.6 },
        { id: 53, company: "Raymond", name: "Premium Cotton Shirt", image: "https://myraymond.com/cdn/shop/files/RMSX12789-P3_20_281_29.webp?v=1729597495&width=533", price: 1799, originalPrice: 3599, discount: 50, rating: 4.7 },
        { id: 54, company: "Louis Philippe", name: "Printed Casual Shirt", image: "https://m.media-amazon.com/images/I/81d2Q0jWcVL._AC_UY1100_.jpg", price: 1599, originalPrice: 3199, discount: 50, rating: 4.4 },
        { id: 55, company: "Park Avenue", name: "Solid Formal Shirt", image: "https://m.media-amazon.com/images/I/81vSsZ+YjeL._AC_UY1100_.jpg", price: 1399, originalPrice: 2799, discount: 50, rating: 4.5 },
        { id: 56, company: "Blackberrys", name: "Slim Fit Striped Shirt", image: "https://rukminim2.flixcart.com/image/264/280/xif0q/shirt/a/8/y/-original-imahf5299aqjkdg4.jpeg?q=90&crop=false", price: 1699, originalPrice: 3399, discount: 50, rating: 4.6 }
    ],
    'Levis': [
        { id: 57, company: "Levis", name: "511 Slim Fit Jeans", image: "https://m.media-amazon.com/images/I/71wLCkS7gpL._AC_UY1100_.jpg", price: 2999, originalPrice: 5999, discount: 50, rating: 4.7 },
        { id: 58, company: "Levis", name: "Classic Denim Jacket", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4h-gMKS8uCOSYGvqUPZvU_fAu_qCWD9dQAQ&s", price: 3999, originalPrice: 7999, discount: 50, rating: 4.8 },
        { id: 59, company: "Levis", name: "501 Original Fit Jeans", image: "https://levi.co.id/cdn/shop/files/levis-mens-501-original-jeans-005011485_1_ON_FV_3558X2000.progressive.jpg?v=1713358724", price: 3499, originalPrice: 6999, discount: 50, rating: 4.6 },
        { id: 60, company: "Levis", name: "Graphic Logo T-Shirt", image: "https://www.80scasualclassics.co.uk/images/levis-strauss-co-logo-t-shirt-burgundy-p2913-36943_image.jpg", price: 1299, originalPrice: 2599, discount: 50, rating: 4.4 },
        { id: 61, company: "Levis", name: "Sherpa Trucker Jacket", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPumsrcTewSEc3BV73Sz-48WLhHieB2W5Jg&s", price: 4999, originalPrice: 9999, discount: 50, rating: 4.9 },
        { id: 62, company: "Levis", name: "Western Denim Shirt", image: "https://www.gh-stores.com/media/catalog/product/cache/47c676186d030e7811bf9085c2d25b0f/8/5/8574400470_Levis_Camicie_Jeans_Uomo_Blu-A_6.jpg", price: 2499, originalPrice: 4999, discount: 50, rating: 4.5 },
        { id: 63, company: "Levis", name: "505 Regular Fit Jeans", image: "https://www.mynavyexchange.com/products/images/large/9800156_001.jpg", price: 3199, originalPrice: 6399, discount: 50, rating: 4.6 },
        { id: 64, company: "Levis", name: "Classic Crew Neck Tee", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_avpKFKZDZNXEurojLCYdHN_QkXnfEM73dg&s", price: 999, originalPrice: 1999, discount: 50, rating: 4.3 }
    ],
    'Woodland': [
        { id: 65, company: "Woodland", name: "Leather Outdoor Boots", image: "https://m.media-amazon.com/images/I/510oDcsrqjL._AC_UY1000_.jpg", price: 3999, originalPrice: 7999, discount: 50, rating: 4.7 },
        { id: 66, company: "Woodland", name: "Adventure Sandals", image: "https://m.media-amazon.com/images/I/71tiCQ4kAOL._AC_UY1000_.jpg", price: 1999, originalPrice: 3999, discount: 50, rating: 4.5 },
        { id: 67, company: "Woodland", name: "Casual Sneakers", image: "https://assets.woodland.social/product/images/FGC0JE0BD842A/GREY/FGC0JE0BD842A_021_0.webp", price: 2499, originalPrice: 4999, discount: 50, rating: 4.6 },
        { id: 68, company: "Woodland", name: "Trekking Shoes", image: "https://5.imimg.com/data5/SELLER/Default/2023/10/350035616/HZ/BT/IL/195667710/fgc0l80r7421z-010-1-500x500.jpg", price: 3499, originalPrice: 6999, discount: 50, rating: 4.8 },
        { id: 69, company: "Woodland", name: "Leather Wallet", image: "https://m.media-amazon.com/images/I/91gGfQcB-5L._AC_UY1100_.jpg", price: 799, originalPrice: 1599, discount: 50, rating: 4.4 },
        { id: 70, company: "Woodland", name: "Canvas Backpack", image: "https://5.imimg.com/data5/SELLER/Default/2025/8/536307973/OO/YC/UA/85415285/contentcom-whatsapp-provider-media2fitem2fb2eab2c4-123c-47d7-af22-220f75fd7f74-page-0022.jpg", price: 1499, originalPrice: 2999, discount: 50, rating: 4.5 },
        { id: 71, company: "Woodland", name: "Formal Leather Shoes", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdDno5aU5DIVA7O7mLKmkitAd0H47BcMTW9Q&s", price: 2999, originalPrice: 5999, discount: 50, rating: 4.6 },
        { id: 72, company: "Woodland", name: "Waterproof Jacket", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrfEjKrlYh85Wxcgol_MfHlMNIybU2mQaNA&s", price: 4499, originalPrice: 8999, discount: 50, rating: 4.7 }
    ],
    'flats': [
        { id: 73, company: "Bata", name: "Women Ballet Flats", image: "https://loefflerrandall.com/cdn/shop/files/LEONIE-SWL-ESPRE_5.jpg?v=1723742630&width=1920", price: 799, originalPrice: 1599, discount: 50, rating: 4.3 },
        { id: 74, company: "Inc 5", name: "Pointed Toe Flats", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSMhIhAIDZf9bN6xPxr-xYR_qBhiKkIwbQpDkdIiSlJRDoAciyxicGQaQ2AlhthSu_zQ&usqp=CAU", price: 999, originalPrice: 1999, discount: 50, rating: 4.4 },
        { id: 75, company: "Carlton London", name: "Embellished Flats", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyFXcFNeqokyKMeSZRxp61XQ1pWQn1uRYVQ&s", price: 1299, originalPrice: 2599, discount: 50, rating: 4.5 },
        { id: 76, company: "Metro", name: "Casual Slip-On Flats", image: "https://m.media-amazon.com/images/I/31PDj+R8hkS.jpg", price: 699, originalPrice: 1399, discount: 50, rating: 4.2 },
        { id: 77, company: "Catwalk", name: "Ethnic Flats", image: "https://m.media-amazon.com/images/I/61L5desTewL._AC_UY1000_.jpg", price: 899, originalPrice: 1799, discount: 50, rating: 4.4 },
        { id: 78, company: "Mochi", name: "Formal Flats", image: "https://admin.mochishoes.com/product/31-1098/660/31-1098LA80.jpg", price: 1499, originalPrice: 2999, discount: 50, rating: 4.5 },
        { id: 79, company: "Lavie", name: "Designer Flats", image: "https://i.ebayimg.com/images/g/BmkAAOSwIuhmpGxm/s-l400.jpg", price: 1199, originalPrice: 2399, discount: 50, rating: 4.3 },
        { id: 80, company: "Crocs", name: "Comfortable Flats", image: "https://media.crocs.com/images/w_364/marketing/category-carousel-unfurgettablebootie/Crocs", price: 1799, originalPrice: 3599, discount: 50, rating: 4.6 }
    ],
    'Sleepwear': [
        { id: 81, company: "Jockey", name: "Cotton Night Suit", image: "https://5.imimg.com/data5/SELLER/Default/2022/6/HQ/GI/SG/152108469/whatsapp-image-2022-06-09-at-2-03-07-pm-2-.jpeg", price: 999, originalPrice: 1999, discount: 50, rating: 4.4 },
        { id: 82, company: "Clovia", name: "Women Nightdress", image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/productimage/2020/12/5/d6cc019e-be5e-4e34-96b8-80db0f5f671d1607182188074-1.jpg", price: 799, originalPrice: 1599, discount: 50, rating: 4.3 },
        { id: 83, company: "Enamor", name: "Satin Nightwear Set", image: "https://shyaway.static.n7.io/media/catalog/product/c/s/csn2005-babypink-front_1.jpg?aio=w-243;h-323;", price: 1299, originalPrice: 2599, discount: 50, rating: 4.5 },
        { id: 84, company: "PrettySecrets", name: "Shorts & Tee Set", image: "https://assets0.mirraw.com/images/3362234/PS0916STRPSCHC01_(1)_zoom.jpg?1679014197", price: 899, originalPrice: 1799, discount: 50, rating: 4.2 }
    ],
    'Footwear': [
        { id: 85, company: "Nike", name: "Running Shoes", image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/ac6672b0-33da-49ad-9a6f-412ae3987bcc/NIKE+DOWNSHIFTER+13.png", price: 4999, originalPrice: 9999, discount: 50, rating: 4.7 },
        { id: 86, company: "Adidas", name: "Sports Sneakers", image: "https://img500.exportersindia.com/product_images/bc-500/2023/9/11869425/mens-adidas-sports-shoes-1680339826-6829444.jpeg", price: 4499, originalPrice: 8999, discount: 50, rating: 4.6 },
        { id: 87, company: "Puma", name: "Casual Shoes", image: "https://images-static.nykaa.com/media/catalog/product/4/f/4fdcd85puma-37476509_1.jpg?tr=w-500", price: 3999, originalPrice: 7999, discount: 50, rating: 4.5 },
        { id: 88, company: "Reebok", name: "Training Shoes", image: "https://img.tatacliq.com/images/i13/658Wx734H/MP000000019080971_658Wx734H_202309062015001.jpeg", price: 3499, originalPrice: 6999, discount: 50, rating: 4.4 }
    ],
    'jewellery': [
        { id: 89, company: "Zaveri Pearls", name: "Gold Plated Necklace", image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/25976986/2023/11/29/6c57725f-8ef6-4064-af87-3d27dfdf94401701237604911-Zaveri-Pearls-Gold-Plated-Stone--Beads-Studded-Jewellery-Set-1.jpg", price: 599, originalPrice: 1199, discount: 50, rating: 4.5 },
        { id: 90, company: "Rubans", name: "Ethnic Earrings", image: "https://rubans.in/cdn/shop/files/rubans-oxidised-silver-toned-earrings-with-peacock-motif-pastel-pink-stones-pearl-drops-earrings-1183330886.jpg?v=1755711875&width=1080", price: 399, originalPrice: 799, discount: 50, rating: 4.4 },
        { id: 91, company: "Accessorize", name: "Bracelet Set", image: "https://images-cdn.ubuy.co.in/668cbbc2b695c927001cc7be-guess-gold-tone-3-piece-mixed-chain.jpg", price: 499, originalPrice: 999, discount: 50, rating: 4.3 },
        { id: 92, company: "Youbella", name: "Statement Ring", image: "https://cdn.grofers.com/da/cms-assets/cms/product/aa3afcd9-e2ac-4596-b1e3-74692018ee64.jpg", price: 299, originalPrice: 599, discount: 50, rating: 4.2 }
    ],
    'Ethnic Wear': [
        { id: 93, company: "Libas", name: "Anarkali Kurta", image: "https://www.shoplibas.com/cdn/shop/products/48483A_1.jpg?v=1748350571", price: 1499, originalPrice: 2999, discount: 50, rating: 4.6 },
        { id: 94, company: "Biba", name: "Palazzo Suit Set", image: "https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw8dc87f8f/images/ss23/skdphulkari8481ss23beg_1.jpg?sw=242&sh=363&q=100&strip=false", price: 1799, originalPrice: 3599, discount: 50, rating: 4.5 },
        { id: 95, company: "W", name: "Printed Kurta", image: "https://wforwoman.com/cdn/shop/files/23FEWS19280-120835_57435037-537a-4490-9516-f539ef6e80d9.jpg?v=1753259091", price: 999, originalPrice: 1999, discount: 50, rating: 4.4 },
        { id: 96, company: "Aurelia", name: "Ethnic Top", image: "https://tantiofficial.com/wp-content/uploads/2025/09/KT006-kurta-1-scaled-500x750.jpg", price: 899, originalPrice: 1799, discount: 50, rating: 4.3 }
    ],
    'Workwear': [
        { id: 97, company: "Van Heusen", name: "Formal Blazer", image: "https://rukminim2.flixcart.com/image/704/844/jklgxow0/blazer/g/h/a/s-vwbz517f01277dark-grey-solid-van-heusen-original-imaf7x84ncu4vxku.jpeg?q=90&crop=false", price: 2999, originalPrice: 5999, discount: 50, rating: 4.6 },
        { id: 98, company: "Allen Solly", name: "Formal Trousers", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fZPenYdRBoEqThNa3BtJXoLYUcH1oilgNg&s", price: 1499, originalPrice: 2999, discount: 50, rating: 4.5 },
        { id: 99, company: "Park Avenue", name: "Business Shirt", image: "https://ckl.uk.com/wp-content/uploads/2017/10/SSHLPL-model4-2.jpg", price: 1299, originalPrice: 2599, discount: 50, rating: 4.4 },
        { id: 100, company: "Arrow", name: "Formal Shoes", image: "https://png.pngtree.com/png-clipart/20230427/original/pngtree-womens-formal-shoes-for-work-png-image_9114649.png", price: 2499, originalPrice: 4999, discount: 50, rating: 4.5 }
    ],
    'Handbags': [
        { id: 101, company: "Lavie", name: "Shoulder Bag", image: "https://m.media-amazon.com/images/I/71wo74mZQFL._AC_UY1000_.jpg", price: 1299, originalPrice: 2599, discount: 50, rating: 4.5 },
        { id: 102, company: "Caprese", name: "Tote Bag", image: "https://www.capresebags.com/cdn/shop/files/TETOPLGBLU_2_1080x.webp?v=1733229011", price: 1499, originalPrice: 2999, discount: 50, rating: 4.4 },
        { id: 103, company: "Baggit", name: "Sling Bag", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/1/2120424_7_1728b497.jpg", price: 999, originalPrice: 1999, discount: 50, rating: 4.3 },
        { id: 104, company: "Hidesign", name: "Leather Handbag", image: "https://m.media-amazon.com/images/I/61RRoHUCZAL._AC_UY1000_.jpg", price: 3999, originalPrice: 7999, discount: 50, rating: 4.7 }
    ],
    'Innerwear': [
        { id: 105, company: "Jockey", name: "Cotton Briefs Pack", image: "https://m.media-amazon.com/images/I/81QUg6bz8PL._AC_UY1100_.jpg", price: 599, originalPrice: 1199, discount: 50, rating: 4.5 },
        { id: 106, company: "Enamor", name: "Sports Bra", image: "https://images.jdmagicbox.com/quickquotes/images_main/enamor-sb11-high-impact-sports-bra-padded-wirefree-front-zipper-grey-36d-164535481-apnj6.jpg", price: 799, originalPrice: 1599, discount: 50, rating: 4.4 },
        { id: 107, company: "Amante", name: "Padded Bra", image: "https://www.amantelingerie.in/cdn/shop/products/amante-bra-BRA14504-TIGER-LILLY_20_1.jpg?v=1598470629", price: 899, originalPrice: 1799, discount: 50, rating: 4.6 },
        { id: 108, company: "Calvin Klein", name: "Boxer Briefs", image: "https://imagescdn.simons.ca/images/3694-324303-9-A1_2/microfiber-stretch-neutral-trunks-3-pack.jpg?__=12", price: 999, originalPrice: 1999, discount: 50, rating: 4.5 }
    ],
    'Office Wear': [
        { id: 109, company: "AND", name: "Formal Shirt", image: "https://www.uniformbucket.com/img/product/original/black-formal-shirt-for-men_77850.jpg", price: 1299, originalPrice: 2599, discount: 50, rating: 4.5 },
        { id: 110, company: "Vero Moda", name: "Pencil Skirt", image: "https://www.veromoda.in/cdn/shop/files/901426401_g1.jpg?v=1745716607&width=1080", price: 1099, originalPrice: 2199, discount: 50, rating: 4.4 },
        { id: 111, company: "ONLY", name: "Blazer Jacket", image: "https://images-cdn.ubuy.co.in/667cfc56ec38ac4d1d0625d5-mens-floral-tuxedo-jacket-paisley-shawl.jpg", price: 1999, originalPrice: 3999, discount: 50, rating: 4.6 },
        { id: 112, company: "People", name: "Formal Trousers", image: "https://m.media-amazon.com/images/I/71TMynGQbsL._AC_UY1100_.jpg", price: 1399, originalPrice: 2799, discount: 50, rating: 4.3 }
    ],
    'Inclusive Styles': [
        { id: 113, company: "ASOS Curve", name: "Plus Size Dress", image: "https://www.lasabinaplussizebridal.com/wp-content/uploads/2023/03/Lasabina_Iris-2-1.jpg", price: 1799, originalPrice: 3599, discount: 50, rating: 4.5 },
        { id: 114, company: "Marks & Spencer", name: "Comfort Fit Jeans", image: "https://content.jdmagicbox.com/quickquotes/images_main/women-blue-skinny-fit-mid-rise-clean-look-stretchable-cropped-jeans-2188957157-mcahes07.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit", price: 1999, originalPrice: 3999, discount: 50, rating: 4.4 },
        { id: 115, company: "Chemistry", name: "Extended Size Top", image: "https://content.jdmagicbox.com/quickquotes/images_main/chemistry-pure-cotton-half-sleeve-women-t-shirt-pink-2101734946-h3rp3ckj.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit", price: 899, originalPrice: 1799, discount: 50, rating: 4.3 },
        { id: 116, company: "Aks", name: "Curve Fit Kurta", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/24487140/2023/8/16/7ddb5dd9-e84e-42fe-a930-13136c7720171692164382715AKSCoutureWomenBlueFloralEmbroideredRegularKurtawithShararaW1.jpg", price: 1299, originalPrice: 2599, discount: 50, rating: 4.6 }
    ],
    'Home Decor': [
        { id: 117, company: "Home Centre", name: "Decorative Cushions", image: "https://5.imimg.com/data5/SELLER/Default/2025/8/538125110/RX/UC/HP/23872878/texture-velvet-crochet-cushion-cover-set-250x250.png", price: 599, originalPrice: 1199, discount: 50, rating: 4.4 },
        { id: 118, company: "Urban Ladder", name: "Wall Art", image: "https://cdn.swadeshonline.com/v2/patient-paper-41f385/swad-p/wrkr/products/pictures/item/free/450x0/KZCTiVSlvD-VDWDWA61ML87444_1.jpg", price: 999, originalPrice: 1999, discount: 50, rating: 4.5 },
        { id: 119, company: "Fabindia", name: "Table Lamp", image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/productimage/2021/7/7/6819acdf-d72b-4c05-8b20-480a82609ee41625650401453-1.jpg", price: 1499, originalPrice: 2999, discount: 50, rating: 4.6 },
        { id: 120, company: "Chumbak", name: "Decorative Vase", image: "https://content.jdmagicbox.com/quickquotes/images_main/-g1zvwm1e.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit", price: 799, originalPrice: 1599, discount: 50, rating: 4.3 }
    ]
};

// Bag items storage
let bagItems = [];

// Function to show home page
function showHome() {
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('productsPage').classList.remove('active');
    window.scrollTo(0, 0);
}

// Function to show products for a specific category
function showProducts(category) {
    // Hide home page
    document.getElementById('homePage').classList.add('hidden');
    
    // Show products page
    const productsPage = document.getElementById('productsPage');
    productsPage.classList.add('active');
    
    // Update title
    const title = category.replace(/([A-Z])/g, ' $1').trim();
    document.getElementById('categoryTitle').textContent = title.toUpperCase();
    
    // Get products for this category
    const products = productDatabase[category] || [];
    
    // Render products
    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';
    
    if (products.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #94969f; grid-column: 1/-1; padding: 50px;">No products available in this category.</p>';
    } else {
        products.forEach(product => {
            const productHTML = `
                <div class="item_container">
                    <img class="item_image" src="${product.image}" alt="${product.name}">
                    <div class="item_details">
                        <div class="company_name">${product.company}</div>
                        <div class="item_name">${product.name}</div>
                        <div class="price">
                            <span class="current_price">₹${product.price}</span>
                            <span class="original_price">₹${product.originalPrice}</span>
                            <span class="discount">(${product.discount}% OFF)</span>
                        </div>
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            ${product.rating} | 2.5k
                        </div>
                        <button class="btn_add_bag" onclick="addToBag(${product.id}, '${product.company}', '${product.name}')">
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            `;
            container.innerHTML += productHTML;
        });
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Function to add item to bag
function addToBag(productId, company, name) {
    if (!bagItems.includes(productId)) {
        bagItems.push(productId);
        updateBagCount();
        showNotification('${company} ${name} added to bag!');
    } else {
        showNotification('Item already in bag!');
    }
}

// Function to update bag count
function updateBagCount() {
    document.getElementById('bagCount').textContent = bagItems.length;
}

// Function to show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #03a685;
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateBagCount();
    console.log('Myntra Clone loaded successfully!');
});