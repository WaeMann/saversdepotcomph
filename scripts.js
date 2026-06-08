// This is scripts.js Do not remove this comment
const PRODUCTS=[{id:1,name:'Brillio Red Marble Wall Tile',cat:'Tiles',sub:'Wall Tiles',price:480,oldPrice:560,badge:'New',inStock:true,emoji:'🪟',img:'https://saversdepot.com.ph/wp-content/uploads/2024/01/Brillio-Red-Marble.jpg',desc:'Elegant red marble-effect ceramic wall tile. Perfect for feature walls, backsplashes, and bathroom interiors. 300x600mm.',specs:[['Size','300 × 600 mm'],['Material','Ceramic'],['Finish','Glossy'],['Coverage','~6 pcs/sqm'],['Min. Order','1 box (10 pcs)']],tags:['Marble Effect','Glossy','Indoor'],new:true},{id:2,name:'Brillo Brown Mesh Marble Tile',cat:'Tiles',sub:'Wall Tiles',price:520,oldPrice:null,badge:'Popular',inStock:true,emoji:'🪟',img:'https://saversdepot.com.ph/wp-content/uploads/2024/01/Brillo-Brown-Mesh-Marble.jpg',desc:'Natural stone-inspired brown marble mesh tile for walls and feature areas.',specs:[['Size','300 × 600 mm'],['Material','Ceramic'],['Finish','Matt'],['Coverage','~6 pcs/sqm']],tags:['Marble','Stone Effect'],new:false},{id:3,name:'Rock Charcoal Wall Tile',cat:'Tiles',sub:'Wall Tiles',price:390,oldPrice:450,badge:'Sale',inStock:true,emoji:'🪟',img:'https://saversdepot.com.ph/wp-content/uploads/2024/03/Wall-Tiles-Rock-Charcoal-Tiles-300x195.jpg',desc:'Dramatic dark charcoal rock-textured wall tile.',specs:[['Size','300 × 600 mm'],['Material','Porcelain'],['Finish','Matt Textured'],['Coverage','~6 pcs/sqm']],tags:['Textured','Dark','Contemporary'],new:false},{id:4,name:'Ceramic Floor Tile (Beige)',cat:'Tiles',sub:'Floor Tiles',price:320,oldPrice:null,badge:null,inStock:true,emoji:'🪟',img:'https://saversdepot.com.ph/wp-content/uploads/2024/03/Floor-Tiles--300x195.jpg',desc:'Classic beige ceramic floor tile.',specs:[['Size','600 × 600 mm'],['Material','Ceramic'],['Finish','Semi-Gloss'],['PEI Rating','3 — Residential']],tags:['Floor','Beige','Classic'],new:false},{id:5,name:'Outdoor Porcelain Tile (Grey)',cat:'Tiles',sub:'Outdoor Tiles',price:550,oldPrice:620,badge:'Sale',inStock:true,emoji:'🪟',img:'https://saversdepot.com.ph/wp-content/uploads/2024/03/Ourdoor-Tiles-300x195.jpg',desc:'Heavy-duty anti-slip porcelain tile for outdoor areas.',specs:[['Size','600 × 600 mm'],['Material','Porcelain'],['Finish','Anti-Slip'],['Frost Resistant','Yes']],tags:['Outdoor','Anti-Slip','Porcelain'],new:false},{id:6,name:'Kitchen Backsplash Mosaic Tile',cat:'Tiles',sub:'Mosaic',price:680,oldPrice:null,badge:'New',inStock:true,emoji:'🪟',img:'https://saversdepot.com.ph/wp-content/uploads/2024/03/Kitchen-Tiles-300x195.jpg',desc:'Modern glass-blend mosaic tile ideal for kitchen backsplashes.',specs:[['Size','300 × 300 mm (sheet)'],['Material','Glass Blend'],['Finish','Glossy']],tags:['Mosaic','Kitchen','Glass'],new:true},{id:7,name:'Marble-Effect Bathroom Tile Set',cat:'Bathroom',sub:'Bathroom Tiles',price:750,oldPrice:890,badge:'Sale',inStock:true,emoji:'🛁',img:'https://saversdepot.com.ph/wp-content/uploads/2024/03/Bathroom-Tiles-300x195.jpg',desc:'Complete bathroom tile set with matching floor and wall tiles.',specs:[['Includes','Wall + Floor tiles'],['Size','300×600 wall / 300×300 floor'],['Material','Porcelain']],tags:['Bathroom','Marble','Set'],new:false},{id:8,name:'Rainfall Shower Head (Chrome)',cat:'Bathroom',sub:'Shower',price:1850,oldPrice:2200,badge:'Sale',inStock:true,emoji:'🚿',desc:'Large 10-inch overhead rainfall shower head in polished chrome.',specs:[['Size','250 mm diameter'],['Material','Stainless Steel'],['Finish','Chrome'],['Pressure','Low to medium']],tags:['Shower','Chrome','Modern'],new:false},{id:9,name:'Wall-Mounted Lavatory (White)',cat:'Bathroom',sub:'Sanitary Ware',price:3200,oldPrice:null,badge:null,inStock:true,emoji:'🚰',desc:'Sleek wall-mounted ceramic lavatory basin.',specs:[['Material','Vitreous China'],['Color','White'],['Mounting','Wall-hung'],['Includes','Overflow drain']],tags:['Lavatory','Wall-Mount','White'],new:false},{id:10,name:'One-Piece Water Closet',cat:'Bathroom',sub:'Sanitary Ware',price:5800,oldPrice:6500,badge:'Sale',inStock:true,emoji:'🚽',desc:'Dual-flush one-piece toilet. Soft-close seat included.',specs:[['Flush','Dual flush 4/6L'],['Seat','Soft-close included'],['Color','White']],tags:['Toilet','Dual Flush','Eco'],new:false},{id:11,name:'Freestanding Bathtub (White)',cat:'Bathroom',sub:'Bathtub',price:18500,oldPrice:null,badge:'New',inStock:true,emoji:'🛁',desc:'Elegant freestanding acrylic bathtub.',specs:[['Size','1500 × 750 × 580 mm'],['Material','Acrylic'],['Drain','Center']],tags:['Bathtub','Freestanding','Luxury'],new:true},{id:12,name:'Chrome Bathroom Faucet Set',cat:'Bathroom',sub:'Faucets',price:1200,oldPrice:1450,badge:'Sale',inStock:true,emoji:'🔧',desc:'Classic chrome basin faucet with hot/cold mixer.',specs:[['Finish','Chrome'],['Valve','Ceramic Disc'],['Connection','1/2 inch']],tags:['Faucet','Chrome','Classic'],new:false},{id:13,name:'Boysen Permacoat Latex (White 5L)',cat:'Paints',sub:'Latex Paints',price:650,oldPrice:null,badge:null,inStock:true,emoji:'🎨',desc:'Premium interior latex wall paint. Washable, low-VOC formula.',specs:[['Volume','5 Liters'],['Coverage','~20 sqm/coat'],['Finish','Flat'],['Dry Time','2 hours']],tags:['Interior','Latex','White'],new:false},{id:14,name:'Davies Gloss Enamel Paint (Black 1L)',cat:'Paints',sub:'Enamel',price:320,oldPrice:360,badge:'Sale',inStock:true,emoji:'🎨',desc:'High-gloss oil-based enamel paint for metal, wood, and concrete.',specs:[['Volume','1 Liter'],['Finish','High Gloss'],['Dry Time','4–6 hours']],tags:['Enamel','Gloss','Metal'],new:false},{id:15,name:'Boysen Roof Paint (Red Oxide 4L)',cat:'Paints',sub:'Roof Paints',price:780,oldPrice:null,badge:null,inStock:true,emoji:'🎨',desc:'Weather-resistant acrylic roof paint.',specs:[['Volume','4 Liters'],['Coverage','~15 sqm/coat'],['Weather Resistant','Yes']],tags:['Roof','Outdoor','Acrylic'],new:false},{id:16,name:'Tile Adhesive & Grout Kit',cat:'Paints',sub:'Adhesives',price:420,oldPrice:null,badge:'New',inStock:true,emoji:'🪣',desc:'Ready-mix tile adhesive with matching grout set.',specs:[['Weight','5 kg adhesive + 1 kg grout'],['Coverage','~5 sqm']],tags:['Adhesive','Grout','Tile'],new:true},{id:17,name:'Boysen Lagoon Blue Interior Paint 4L',cat:'Paints',sub:'Latex Paints',price:720,oldPrice:800,badge:'Sale',inStock:true,emoji:'🎨',desc:'Calming lagoon blue latex paint for interior walls.',specs:[['Volume','4 Liters'],['Coverage','~16 sqm/coat'],['Color','Lagoon Blue']],tags:['Interior','Blue','Latex'],new:false},{id:18,name:'Omni 8W LED Bulb (Daylight, 4-pack)',cat:'Electrical',sub:'Bulbs',price:280,oldPrice:340,badge:'Sale',inStock:true,emoji:'💡',desc:'Energy-saving 8W LED bulb. 6500K cool daylight. E27 base.',specs:[['Wattage','8W'],['Lumens','720 lm'],['Color Temp','6500K Daylight'],['Life','25,000 hours']],tags:['LED','Daylight','Energy Saving'],new:false},{id:19,name:'Ceiling LED Panel Light 18W',cat:'Electrical',sub:'Lighting Fixtures',price:560,oldPrice:null,badge:null,inStock:true,emoji:'💡',desc:'Ultra-slim recessed LED panel for ceilings.',specs:[['Wattage','18W'],['Size','300 × 300 mm'],['Color Temp','4000K Neutral']],tags:['LED Panel','Recessed','Modern'],new:false},{id:20,name:'Circuit Breaker 20A (Single Pole)',cat:'Electrical',sub:'Circuit Protection',price:180,oldPrice:null,badge:null,inStock:true,emoji:'⚡',desc:'Standard 20-ampere single-pole circuit breaker.',specs:[['Amperage','20A'],['Voltage','240V'],['Breaking Capacity','6kA']],tags:['Circuit Breaker','Safety'],new:false},{id:21,name:'3-Gang Outlet with USB (White)',cat:'Electrical',sub:'Wiring Devices',price:420,oldPrice:480,badge:'Sale',inStock:true,emoji:'🔌',desc:'3-gang universal outlet with 2 USB charging ports.',specs:[['Outlets','3 universal + 2 USB'],['USB Output','5V 2.1A'],['Rating','16A 250V']],tags:['Outlet','USB','Wiring'],new:false},{id:22,name:'1.5mm² THHN Wire (50m Coil, Blue)',cat:'Electrical',sub:'Wires',price:480,oldPrice:null,badge:null,inStock:true,emoji:'🔌',desc:'PVC-insulated THHN copper wire. 1.5mm² gauge.',specs:[['Gauge','1.5 mm²'],['Length','50 meters'],['Insulation','PVC THHN']],tags:['Wire','Copper','Residential'],new:false},{id:24,name:'Makita 13mm Drill (650W)',cat:'Hardware',sub:'Power Tools',price:3500,oldPrice:3900,badge:'Sale',inStock:true,emoji:'🔧',desc:'Reliable 650W corded drill.',specs:[['Power','650W'],['Chuck','13 mm key'],['No-Load Speed','0-2800 rpm'],['Weight','1.7 kg']],tags:['Power Tool','Drill','Makita'],new:false},{id:25,name:'Stanley 16-Piece Hand Tool Set',cat:'Hardware',sub:'Hand Tools',price:1200,oldPrice:null,badge:null,inStock:true,emoji:'🪛',desc:'Complete household tool set in a carrying case.',specs:[['Pieces','16'],['Brand','Stanley'],['Warranty','1 year']],tags:['Hand Tools','Set','Stanley'],new:false},{id:26,name:'5-Meter Steel Tape Measure',cat:'Hardware',sub:'Measuring Tools',price:180,oldPrice:220,badge:'Sale',inStock:true,emoji:'📏',desc:'5-meter auto-lock steel tape measure.',specs:[['Length','5 meters'],['Auto-Lock','Yes']],tags:['Measuring','Tape','Tool'],new:false},{id:28,name:'Concrete Hollow Blocks (per 10 pcs)',cat:'Hardware',sub:'Building Materials',price:350,oldPrice:null,badge:null,inStock:true,emoji:'🧱',desc:'Standard 6-inch CHB concrete hollow blocks.',specs:[['Size','6 × 8 × 16 inches'],['Bundle','10 pieces'],['Compressive Strength','700 psi']],tags:['CHB','Concrete','Building'],new:false},{id:30,name:'Solid Wood Panel Door (Pre-Hung)',cat:'Doors & Windows',sub:'Interior Doors',price:8500,oldPrice:null,badge:'New',inStock:true,emoji:'🚪',desc:'Pre-hung solid wood 5-panel interior door.',specs:[['Size','800 × 2100 mm'],['Material','Solid Wood'],['Panel Style','5-Panel']],tags:['Wood Door','Pre-Hung','Interior'],new:true},{id:31,name:'Aluminum Sliding Window (60×45)',cat:'Doors & Windows',sub:'Windows',price:2800,oldPrice:3200,badge:'Sale',inStock:true,emoji:'🪟',desc:'Double-pane aluminum sliding window with mosquito screen.',specs:[['Size','600 × 450 mm'],['Frame','Aluminum'],['Screen','Mosquito net included']],tags:['Aluminum','Sliding','Window'],new:false},{id:32,name:'Steel Security Door (Black)',cat:'Doors & Windows',sub:'Exterior Doors',price:12500,oldPrice:14000,badge:'Sale',inStock:true,emoji:'🚪',desc:'Heavy-duty steel security door with multi-point lock.',specs:[['Size','900 × 2100 mm'],['Material','Steel'],['Lock','Multi-point']],tags:['Steel','Security','Exterior'],new:false},{id:33,name:'Laticrete Hydro Ban Waterproofing Kit',cat:'Plumbing',sub:'Waterproofing',price:1850,oldPrice:null,badge:null,inStock:true,emoji:'💧',desc:'Ready-to-use waterproofing membrane for wet areas.',specs:[['Coverage','10 sqm per kit'],['Curing Time','1–2 hours']],tags:['Waterproofing','Shower','Laticrete'],new:false},{id:34,name:'PVC Pipe 4-inch (6m Length)',cat:'Plumbing',sub:'Pipes',price:380,oldPrice:null,badge:null,inStock:true,emoji:'🔩',desc:'4-inch diameter PVC drainage pipe. 6-meter length.',specs:[['Diameter','4 inches (100 mm)'],['Length','6 meters'],['Class','1000']],tags:['PVC Pipe','Drainage','4 inch'],new:false},{id:35,name:'Gate Valve 1-inch (Brass)',cat:'Plumbing',sub:'Valves',price:280,oldPrice:320,badge:'Sale',inStock:true,emoji:'🔧',desc:'Brass gate valve for water shut-off.',specs:[['Size','1 inch'],['Material','Brass']],tags:['Valve','Brass','Plumbing'],new:false},{id:36,name:'Springfield Strata SPC Flooring (per sqm)',cat:'Wood Works',sub:'SPC Flooring',price:780,oldPrice:920,badge:'Sale',inStock:true,emoji:'🪵',img:'https://saversdepot.com.ph/wp-content/uploads/2024/01/Springfield-Strata-Flooring-Slider1.jpg',desc:'Premium SPC flooring with ISOCORE technology. 100% waterproof.',specs:[['Thickness','6 mm'],['Wear Layer','0.5 mm'],['Install','Click-lock floating'],['Waterproof','100%']],tags:['SPC','Waterproof','Click-Lock'],new:false},{id:37,name:'LVT Luxury Vinyl Plank (per sqm)',cat:'Wood Works',sub:'LVT Flooring',price:520,oldPrice:null,badge:null,inStock:true,emoji:'🪵',img:'https://saversdepot.com.ph/wp-content/uploads/2024/01/LVT-COVER-UPDATED-01.png',desc:'Luxury vinyl tile with realistic wood grain texture.',specs:[['Thickness','4.5 mm'],['Wear Layer','0.3 mm'],['Pattern','Wood Grain']],tags:['LVT','Wood Look','Vinyl'],new:false},{id:38,name:'Shera Fibre Cement Board 4×8 ft',cat:'Wood Works',sub:'Boards',price:420,oldPrice:null,badge:null,inStock:true,emoji:'🪵',img:'https://saversdepot.com.ph/wp-content/uploads/2024/02/Shera-Fibre-Cement-Board-slider-3.jpg',desc:'Versatile fibre cement board. Moisture and fire resistant.',specs:[['Size','4 × 8 feet'],['Thickness','8 mm'],['Fire Resistant','Yes']],tags:['Fiber Cement','Board','Shera'],new:false},{id:41,name:'Portland Cement (50 kg bag)',cat:'Hardware',sub:'Building Materials',price:280,oldPrice:null,badge:null,inStock:true,emoji:'🧱',desc:'Type I Portland cement for general concrete and masonry.',specs:[['Weight','50 kg'],['Type','Portland Type I']],tags:['Cement','Concrete','Masonry'],new:false},{id:42,name:'Exhaust Fan 6-inch (White)',cat:'Electrical',sub:'Ventilation',price:650,oldPrice:780,badge:'Sale',inStock:true,emoji:'💡',desc:'Quiet 6-inch ceiling/wall exhaust fan.',specs:[['Size','6 inches'],['Airflow','180 m³/h'],['Noise','≤38 dB']],tags:['Exhaust Fan','Ventilation','Bathroom'],new:false},{id:44,name:'Aluminum Ladder 6-Step (A-Frame)',cat:'Hardware',sub:'Ladders',price:1800,oldPrice:2100,badge:'Sale',inStock:true,emoji:'🪜',desc:'Heavy-duty 6-step aluminum A-frame ladder. 150 kg load.',specs:[['Steps','6'],['Material','Aluminum'],['Load','150 kg']],tags:['Ladder','Aluminum','Safety'],new:false},{id:46,name:'Kitchen Sink Stainless 60×45 cm',cat:'Bathroom',sub:'Kitchen Sinks',price:2200,oldPrice:2600,badge:'Sale',inStock:true,emoji:'🛁',desc:'Single-bowl stainless steel kitchen sink.',specs:[['Size','600 × 450 mm'],['Material','SUS304 Stainless Steel']],tags:['Kitchen Sink','Stainless','Single Bowl'],new:false},{id:47,name:'Latex Primer Sealer (White 4L)',cat:'Paints',sub:'Primers',price:380,oldPrice:null,badge:null,inStock:true,emoji:'🎨',desc:'Water-based latex primer and sealer.',specs:[['Volume','4 Liters'],['Coverage','~20 sqm/coat']],tags:['Primer','Sealer','Interior'],new:false},{id:48,name:'Bidet Spray (Stainless Steel)',cat:'Bathroom',sub:'Bidet',price:420,oldPrice:480,badge:'Sale',inStock:true,emoji:'🚽',desc:'Stainless steel hand-held bidet spray with shut-off valve.',specs:[['Material','SUS304 Stainless Steel'],['Hose','1.2 m braided']],tags:['Bidet','Stainless','Bathroom'],new:false}];

const JOBS=[{id:1,title:'Sales Associate',dept:'Sales',type:'Full-Time',location:'Multiple Branches',experience:'0–2 years',salary:'₱15,000 – ₱18,000/mo',desc:'Assist customers on the floor, process transactions, and maintain product displays.',tags:['Customer Service','POS System'],urgent:true},{id:2,title:'Senior Sales Consultant',dept:'Sales',type:'Full-Time',location:'A.S. Fortuna, Cebu',experience:'3–5 years',salary:'₱20,000 – ₱26,000/mo',desc:'Lead sales for high-value products.',tags:['B2B Sales','Team Leadership'],urgent:false},{id:3,title:'Branch Manager',dept:'Operations',type:'Full-Time',location:'Bohol / Iligan',experience:'5+ years',salary:'₱35,000 – ₱45,000/mo',desc:'Oversee branch operations, inventory, staffing, and customer satisfaction.',tags:['Leadership','Operations'],urgent:true},{id:4,title:'Warehouse Associate',dept:'Warehouse',type:'Full-Time',location:'Mandaue City, Cebu',experience:'0–1 year',salary:'₱14,000 – ₱16,000/mo',desc:'Receive, organize, and pick inventory.',tags:['Inventory','Physical Work'],urgent:false},{id:8,title:'Social Media Coordinator',dept:'IT',type:'Full-Time',location:'Head Office, Mandaue',experience:'1–3 years',salary:'₱18,000 – ₱23,000/mo',desc:'Create and schedule content for Facebook, Instagram, and TikTok.',tags:['Social Media','Canva','Content Creation'],urgent:false},{id:9,title:'Delivery Driver',dept:'Operations',type:'Full-Time',location:'Cebu Branches',experience:'1+ year',salary:'₱14,000 – ₱17,000/mo',desc:'Drive company delivery truck for customer orders.',tags:["Driver's License","Cebu Routes"],urgent:true},{id:11,title:'Part-Time Sales Staff',dept:'Sales',type:'Part-Time',location:'All Branches',experience:'No experience',salary:'₱90 – ₱110/hour',desc:'Weekends and holidays. Great for students.',tags:['Flexible Hours','No Experience','Student-Friendly'],urgent:false},{id:12,title:'Marketing Intern',dept:'IT',type:'Internship',location:'Head Office, Mandaue',experience:'Currently enrolled',salary:'Allowance provided',desc:'Support the marketing team with campaign research and photography.',tags:['OJT','Marketing','Photography'],urgent:false}];

// ── STORAGE KEYS ──
const SD_USERS   = 'sd_users';
const SD_SESSION = 'sd_session';
const SD_ORDERS  = 'sd_orders';

// ── STATE ──
let cart=[];let currentPage='home';let shopCurrentPage=1;const SHOP_PER_PAGE=12;let activeJobDept='All';let jobSearchQuery='';let homeTabCat='Tiles';let currentQty=1;let currentProdId=null;let currentJobTitle='';
let chatHistory=[];let chatIsOpen=false;let chatIsLoading=false;
// account & checkout state
let currentUser=null;let checkoutStep=1;let checkoutDelivery={};let checkoutPayment='';

// ── STORAGE HELPERS ──
function getUsers(){return JSON.parse(localStorage.getItem(SD_USERS)||'[]');}
function saveUsers(u){localStorage.setItem(SD_USERS,JSON.stringify(u));}
function getOrders(){return JSON.parse(localStorage.getItem(SD_ORDERS)||'[]');}
function saveOrders(o){localStorage.setItem(SD_ORDERS,JSON.stringify(o));}
function saveCart(){localStorage.setItem('sd_cart_'+(currentUser?currentUser.id:'guest'),JSON.stringify(cart));}
function loadCart(){const saved=localStorage.getItem('sd_cart_'+(currentUser?currentUser.id:'guest'));cart=saved?JSON.parse(saved):[];updateCartBadge();}

// ── SESSION ──
function loadSession(){
  try{
    const s=localStorage.getItem(SD_SESSION);
    if(s){currentUser=JSON.parse(s);updateNavAuth();loadCart();}
  }catch(e){localStorage.removeItem(SD_SESSION);}
}

// ── PAGE NAVIGATION ──
function showPage(name){
  if(name==='profile'&&!currentUser){openSignIn();return;}
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  const navEl=document.getElementById('nav-'+name);if(navEl)navEl.classList.add('active');
  currentPage=name;window.scrollTo({top:0,behavior:'smooth'});
  if(name==='shop')renderShop();
  if(name==='careers')renderJobs();
  if(name==='home')renderHomeProducts();
  if(name==='profile'){renderProfile();}
  document.getElementById('userDropdown')?.classList.remove('open');
}
function goToSection(section){
  const homeVisible=document.getElementById('page-home').classList.contains('active');
  if(!homeVisible){showPage('home');requestAnimationFrame(()=>{document.getElementById(section)?.scrollIntoView({behavior:'smooth'});});}
  else{document.getElementById(section)?.scrollIntoView({behavior:'smooth'});}
}

// ── SLIDESHOW ──
let currentSlide=0;
const slides=()=>document.querySelectorAll('.slide');
const dots=()=>document.querySelectorAll('.dot');
function goSlide(n){slides().forEach((s,i)=>{s.classList.toggle('active',i===n);});dots().forEach((d,i)=>{d.classList.toggle('active',i===n);});currentSlide=n;}
setInterval(()=>goSlide((currentSlide+1)%3),4000);

// ── HOME ──
function renderHomeProducts(){const grid=document.getElementById('homeProductGrid');if(!grid)return;const items=PRODUCTS.filter(p=>p.cat===homeTabCat).slice(0,4);grid.innerHTML=items.map(p=>prodCardHTML(p)).join('');animateNewCards(grid);}
function homeTab(btn,cat){homeTabCat=cat;document.querySelectorAll('#homeTabs .ptab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderHomeProducts();}

// ── SHOP ──
function getFilteredProducts(){let items=[...PRODUCTS];const cat=document.querySelector('input[name="cat"]:checked')?.value||'All';if(cat!=='All')items=items.filter(p=>p.cat===cat);const minVal=parseFloat(document.getElementById('priceMin')?.value)||0;const maxVal=parseFloat(document.getElementById('priceMax')?.value)||Infinity;items=items.filter(p=>p.price>=minVal&&p.price<=maxVal);if(document.getElementById('fInStock')?.checked)items=items.filter(p=>p.inStock);if(document.getElementById('fOnSale')?.checked)items=items.filter(p=>p.oldPrice);const sort=document.getElementById('shopSort')?.value||'default';if(sort==='price-asc')items.sort((a,b)=>a.price-b.price);else if(sort==='price-desc')items.sort((a,b)=>b.price-a.price);else if(sort==='name-asc')items.sort((a,b)=>a.name.localeCompare(b.name));else if(sort==='newest')items.sort((a,b)=>(b.new?1:0)-(a.new?1:0));return items;}
function renderShop(){const items=getFilteredProducts();const total=items.length;document.getElementById('shopCountDisplay').textContent=total;const start=(shopCurrentPage-1)*SHOP_PER_PAGE;const paged=items.slice(start,start+SHOP_PER_PAGE);const grid=document.getElementById('shopGrid');if(!paged.length){grid.innerHTML='<div class="no-results"><div class="icon">🔍</div><h3>No products found</h3><p>Try adjusting your filters.</p><button class="btn-primary" style="margin-top:16px" onclick="clearFilters()">Clear Filters</button></div>';}else{grid.innerHTML=paged.map(p=>prodCardHTML(p)).join('');animateNewCards(grid);}renderPagination(total);renderActiveFilterPills();}
function applyFilters(){shopCurrentPage=1;renderShop();}
function filterShopCat(cat){document.querySelectorAll('input[name="cat"]').forEach(r=>{r.checked=r.value===cat;});shopCurrentPage=1;renderShop();window.scrollTo({top:0,behavior:'smooth'});}
function clearFilters(){document.querySelector('input[name="cat"][value="All"]').checked=true;document.getElementById('priceMin').value='';document.getElementById('priceMax').value='';document.getElementById('fInStock').checked=false;document.getElementById('fOnSale').checked=false;document.getElementById('shopSort').value='default';shopCurrentPage=1;renderShop();}
function renderPagination(total){const pages=Math.ceil(total/SHOP_PER_PAGE);const el=document.getElementById('shopPagination');if(pages<=1){el.innerHTML='';return;}let html='';if(shopCurrentPage>1)html+=`<button class="page-btn" onclick="goShopPage(${shopCurrentPage-1})">‹</button>`;for(let i=1;i<=pages;i++)html+=`<button class="page-btn${i===shopCurrentPage?' active':''}" onclick="goShopPage(${i})">${i}</button>`;if(shopCurrentPage<pages)html+=`<button class="page-btn" onclick="goShopPage(${shopCurrentPage+1})">›</button>`;el.innerHTML=html;}
function goShopPage(n){shopCurrentPage=n;renderShop();document.querySelector('.shop-layout').scrollIntoView({behavior:'smooth'});}
function renderActiveFilterPills(){const el=document.getElementById('activeFilterPills');let pills='';const cat=document.querySelector('input[name="cat"]:checked')?.value;if(cat&&cat!=='All')pills+=`<button class="active-filter-pill" onclick="filterShopCat('All')">✕ ${cat}</button>`;if(document.getElementById('fInStock')?.checked)pills+=`<button class="active-filter-pill" onclick="document.getElementById('fInStock').checked=false;applyFilters()">✕ In Stock</button>`;if(document.getElementById('fOnSale')?.checked)pills+=`<button class="active-filter-pill" onclick="document.getElementById('fOnSale').checked=false;applyFilters()">✕ On Sale</button>`;el.innerHTML=pills;}
function navSearchHandler(val){if(val.length>1){showPage('shop');setTimeout(()=>{const grid=document.getElementById('shopGrid');const items=PRODUCTS.filter(p=>p.name.toLowerCase().includes(val.toLowerCase()));if(!items.length){grid.innerHTML='<div class="no-results"><div class="icon">🔍</div><h3>No results for "'+val+'"</h3><p>Try a different search term.</p></div>';}else{grid.innerHTML=items.map(p=>prodCardHTML(p)).join('');animateNewCards(grid);}},100);}}

// ── PRODUCT CARD ──
function prodCardHTML(p){const badgeClass=p.badge==='Sale'?'sale':'';const imgContent=p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy">`:`<span>${p.emoji||'📦'}</span>`;const badgeHTML=p.badge?`<div class="prod-badge ${badgeClass}">${p.badge}</div>`:'';const oldPriceHTML=p.oldPrice?`<s>₱${p.oldPrice.toLocaleString()}</s>`:'';const stockStyle=p.inStock?'':'opacity:.5;';return`<div class="prod-card" style="${stockStyle}" onclick="openProduct(${p.id})"><div class="prod-img">${imgContent}${badgeHTML}${!p.inStock?'<div class="prod-badge" style="background:#6B5E56">Out of Stock</div>':''}</div><div class="prod-body"><div class="prod-cat">${p.sub}</div><div class="prod-name">${p.name}</div><div class="prod-footer"><div class="prod-price">${oldPriceHTML}₱${p.price.toLocaleString()}</div>${p.inStock?`<button class="btn-add" onclick="event.stopPropagation();addToCartDirect(${p.id})">+</button>`:''}</div></div></div>`;}

// ── PRODUCT DETAIL ──
function openProduct(id){const p=PRODUCTS.find(x=>x.id===id);if(!p)return;currentProdId=id;currentQty=1;const imgContent=p.img?`<img src="${p.img}" alt="${p.name}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:80px">${p.emoji}</div>`;const specsHTML=p.specs.map(s=>`<div class="spec-row"><span>${s[0]}</span><span>${s[1]}</span></div>`).join('');const tagsHTML=p.tags.map(t=>`<span class="job-tag-pill">${t}</span>`).join('');const oldPriceHTML=p.oldPrice?`<s>₱${p.oldPrice.toLocaleString()}</s> `:'';document.getElementById('prodModalContent').innerHTML=`<button class="modal-close" onclick="document.getElementById('prodModal').classList.remove('open')">×</button><div class="pdetail-grid"><div class="pdetail-img">${imgContent}</div><div><div class="pdetail-cat">${p.cat} › ${p.sub}</div><div class="pdetail-name">${p.name}</div><div class="pdetail-price">${oldPriceHTML}₱${p.price.toLocaleString()}</div><div class="pdetail-desc">${p.desc}</div><div class="pdetail-specs"><h4>Specifications</h4>${specsHTML}</div><div class="job-tags" style="margin-bottom:16px">${tagsHTML}</div>${p.inStock?`<div class="qty-row"><button class="qty-btn" onclick="changeQty(-1)">−</button><div class="qty-val" id="qtyDisplay">1</div><button class="qty-btn" onclick="changeQty(1)">+</button><span style="font-size:13px;color:var(--mid);margin-left:4px">in cart</span></div><button class="btn-add-cart" onclick="addToCartFromModal()"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>Add to Cart</button>`:`<button class="btn-add-cart" disabled style="opacity:.5;cursor:not-allowed">Out of Stock</button>`}</div></div>`;document.getElementById('prodModal').classList.add('open');}
function changeQty(delta){currentQty=Math.max(1,Math.min(99,currentQty+delta));const el=document.getElementById('qtyDisplay');if(el)el.textContent=currentQty;}
function addToCartFromModal(){const p=PRODUCTS.find(x=>x.id===currentProdId);if(!p)return;for(let i=0;i<currentQty;i++)cart.push({...p});saveCart();updateCartBadge();showToast(`${currentQty}× ${p.name} added to cart`);document.getElementById('prodModal').classList.remove('open');}
function addToCartDirect(id){const p=PRODUCTS.find(x=>x.id===id);if(!p||!p.inStock)return;cart.push({...p});saveCart();updateCartBadge();showToast(`${p.name} added to cart`);}
function closeProdModal(e){if(e.target===document.getElementById('prodModal'))document.getElementById('prodModal').classList.remove('open');}

// ── CART ──
function updateCartBadge(){document.getElementById('cartCount').textContent=cart.length;}
function openCart(){
  const el=document.getElementById('cartItems');
  const totalRow=document.getElementById('cartTotalRow');
  if(!cart.length){
    el.innerHTML='<div style="text-align:center;padding:32px 0;color:var(--mid)"><div style="font-size:40px;margin-bottom:10px">🛒</div><p style="font-size:14px">Your cart is empty.</p><button class="btn-primary" style="margin-top:12px" onclick="document.getElementById(\'cartModal\').classList.remove(\'open\');showPage(\'shop\')">Start Shopping</button></div>';
    totalRow.style.display='none';
  }else{
    const counts={};
    cart.forEach(p=>{counts[p.id]=counts[p.id]||{name:p.name,price:p.price,qty:0,id:p.id};counts[p.id].qty++;});
    el.innerHTML=Object.values(counts).map(c=>`<div class="cart-item-row"><div class="cart-item-name">${c.name}<span style="color:var(--mid);font-size:12px;display:block">×${c.qty} unit${c.qty>1?'s':''}</span></div><div class="cart-item-right"><span class="cart-item-price">₱${(c.price*c.qty).toLocaleString()}</span><button class="cart-item-del" onclick="removeFromCart(${c.id})">×</button></div></div>`).join('');
    const total=cart.reduce((sum,p)=>sum+p.price,0);
    totalRow.style.display='flex';
    totalRow.innerHTML=`<span>Subtotal (${cart.length} item${cart.length>1?'s':''})</span><span style="color:var(--orange)">₱${total.toLocaleString()}</span>`;
  }
  document.getElementById('cartModal').classList.add('open');
}
function removeFromCart(id){const idx=cart.findIndex(p=>p.id==id);if(idx!==-1)cart.splice(idx,1);saveCart();updateCartBadge();openCart();}
function closeCartModal(e){if(e.target===document.getElementById('cartModal'))document.getElementById('cartModal').classList.remove('open');}

// ── JOBS ──
function renderJobs(){const grid=document.getElementById('jobsGrid');if(!grid)return;const query=jobSearchQuery.toLowerCase();let items=JOBS.filter(j=>{const deptMatch=activeJobDept==='All'||j.dept===activeJobDept;const searchMatch=!query||j.title.toLowerCase().includes(query)||j.dept.toLowerCase().includes(query)||j.tags.some(t=>t.toLowerCase().includes(query));return deptMatch&&searchMatch;});if(!items.length){grid.innerHTML=`<div class="no-jobs"><div class="icon">💼</div><h3>No positions found</h3><p>Try a different department or search term.</p></div>`;return;}grid.innerHTML=items.map(j=>jobCardHTML(j)).join('');animateNewCards(grid);}
function jobCardHTML(j){const typeColor={'Full-Time':'full-time','Part-Time':'part-time','Internship':'internship'}[j.type]||'full-time';const tagsHTML=j.tags.map(t=>`<span class="job-tag-pill">${t}</span>`).join('');return`<div class="job-card"><div class="job-header"><div class="job-dept">${j.dept}</div><span class="job-type-badge ${typeColor}">${j.type}${j.urgent?' 🔥':''}</span></div><div class="job-title">${j.title}</div><div class="job-meta"><span>📍 ${j.location}</span><span>🎓 ${j.experience}</span></div><div class="job-desc">${j.desc}</div><div class="job-tags">${tagsHTML}</div><div class="job-footer"><div class="job-salary">${j.salary}</div><button class="btn-apply" onclick="openApply('${j.title.replace(/'/g,"\\'")}')">Apply Now</button></div></div>`;}
function filterJobDept(btn,dept){activeJobDept=dept;document.querySelectorAll('.job-filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderJobs();}
function filterJobs(){jobSearchQuery=document.getElementById('jobSearch').value;renderJobs();}

// ── APPLY ──
function openApply(title){currentJobTitle=title;document.getElementById('applyJobTitle').textContent='Position: '+title;['appFname','appLname','appEmail','appPhone','appMessage'].forEach(id=>document.getElementById(id).value='');document.getElementById('applyModal').classList.add('open');}
function closeApplyModal(e){if(e.target===document.getElementById('applyModal'))document.getElementById('applyModal').classList.remove('open');}
function submitApplication(){const fn=document.getElementById('appFname').value.trim();const ln=document.getElementById('appLname').value.trim();const em=document.getElementById('appEmail').value.trim();const ph=document.getElementById('appPhone').value.trim();if(!fn||!ln||!em||!ph){showToast('Please fill in all required fields');return;}if(!em.includes('@')){showToast('Please enter a valid email');return;}document.getElementById('applyModal').classList.remove('open');showToast(`Application for "${currentJobTitle}" submitted!`);}

// ── NEWSLETTER ──
function subscribeNewsletter(){const input=document.getElementById('emailInput');if(!input.value||!input.value.includes('@')){showToast('Please enter a valid email address');return;}showToast('Subscribed! Welcome to the Savers Depot family 🎉');input.value='';}

// ── TOAST ──
let toastTimer;
function showToast(msg){const t=document.getElementById('toast');document.getElementById('toastMsg').textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),3000);}

// ── ANIMATIONS ──
function animateNewCards(container){container.querySelectorAll('.prod-card,.job-card,.branch-card,.blog-card,.why-card,.cat-card,.perk-card,.order-card').forEach((el,i)=>{el.style.opacity='0';el.style.transform='translateY(16px)';el.style.transition=`opacity 0.4s ease ${i*0.04}s, transform 0.4s ease ${i*0.04}s`;requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.opacity='1';el.style.transform='translateY(0)';}));});}
const scrollObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)';}});},{threshold:.1});

// ── BRANCH MAP ──
function showBranchMap(branchName,mapUrl){
  document.querySelectorAll('.branch-card').forEach(card=>{card.classList.remove('active');});
  event.currentTarget.classList.add('active');
  const iframe=document.getElementById('branchMap');
  const label=document.getElementById('mapBranchName');
  iframe.src=mapUrl;
  label.textContent=branchName;
}

// ══════════════ ACCOUNT SYSTEM ══════════════

function updateNavAuth(){
  const signInBtn=document.getElementById('signInBtn');
  const userMenu =document.getElementById('userMenu');
  const avatarEl =document.getElementById('navUserAvatar');
  const nameEl   =document.getElementById('navUserName');
  if(currentUser){
    if(signInBtn)signInBtn.style.display='none';
    if(userMenu)userMenu.style.display='flex';
    const initials=currentUser.name.split(' ').map(n=>n[0]||'').join('').slice(0,2).toUpperCase()||'U';
    if(avatarEl)avatarEl.textContent=initials;
    if(nameEl)nameEl.textContent=currentUser.name.split(' ')[0];
  }else{
    if(signInBtn)signInBtn.style.display='flex';
    if(userMenu)userMenu.style.display='none';
  }
}

function openSignIn(){switchAuthTab('login');document.getElementById('signInModal').classList.add('open');}
function openRegister(){switchAuthTab('register');document.getElementById('signInModal').classList.add('open');}
function closeSignIn(e){if(e.target===document.getElementById('signInModal'))document.getElementById('signInModal').classList.remove('open');}

function switchAuthTab(tab){
  document.getElementById('authFormLogin').style.display   =tab==='login'?'block':'none';
  document.getElementById('authFormRegister').style.display=tab==='register'?'block':'none';
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
  if(tab==='login')document.getElementById('authTabLogin').classList.add('active');
  else document.getElementById('authTabReg').classList.add('active');
}

function signIn(){
  const email=document.getElementById('siEmail').value.trim();
  const pw   =document.getElementById('siPw').value;
  if(!email||!pw){showToast('Please enter your email and password');return;}
  const users=getUsers();
  const user =users.find(u=>u.email.toLowerCase()===email.toLowerCase()&&u.password===pw);
  if(!user){showToast('Incorrect email or password');return;}
  loginUser(user);
  document.getElementById('signInModal').classList.remove('open');
  showToast(`Welcome back, ${user.name.split(' ')[0]}! 👋`);
  document.getElementById('siEmail').value='';
  document.getElementById('siPw').value='';
}

function doRegister(){
  const name     =document.getElementById('regName').value.trim();
  const email    =document.getElementById('regEmail').value.trim();
  const phone    =document.getElementById('regPhone').value.trim();
  const pw       =document.getElementById('regPw').value;
  const pwConfirm=document.getElementById('regPwConfirm').value;
  if(!name||!email||!pw){showToast('Please fill in all required fields');return;}
  if(!email.includes('@')){showToast('Please enter a valid email address');return;}
  if(pw.length<6){showToast('Password must be at least 6 characters');return;}
  if(pw!==pwConfirm){showToast('Passwords do not match');return;}
  const users=getUsers();
  if(users.find(u=>u.email.toLowerCase()===email.toLowerCase())){showToast('Email already registered. Please sign in.');return;}
  const user={id:Date.now(),name,email,phone,password:pw,address:'',city:'',createdAt:new Date().toISOString()};
  users.push(user);
  saveUsers(users);
  loginUser(user);
  document.getElementById('signInModal').classList.remove('open');
  showToast(`Account created! Welcome, ${name.split(' ')[0]}! 🎉`);
}

function loginUser(user){
  currentUser={id:user.id,name:user.name,email:user.email,phone:user.phone||''};
  localStorage.setItem(SD_SESSION,JSON.stringify(currentUser));
  updateNavAuth();
  loadCart();
  if(currentPage==='profile')renderProfile();
}

function logout(){
  saveCart();
  currentUser=null;cart=[];
  updateCartBadge();
  localStorage.removeItem(SD_SESSION);
  updateNavAuth();
  if(currentPage==='profile')showPage('home');
  showToast('You have been signed out');
  document.getElementById('userDropdown')?.classList.remove('open');
}

function toggleUserDropdown(){document.getElementById('userDropdown').classList.toggle('open');}

document.addEventListener('click',e=>{
  const menu=document.getElementById('userMenu');
  const dd  =document.getElementById('userDropdown');
  if(menu&&dd&&!menu.contains(e.target))dd.classList.remove('open');
});

function showProfile(){
  if(!currentUser){openSignIn();return;}
  showPage('profile');
}

// ── PROFILE PAGE ──
function renderProfile(){
  if(!currentUser)return;
  const users=getUsers();
  const user =users.find(u=>u.id===currentUser.id);
  if(!user)return;
  const initials=user.name.split(' ').map(n=>n[0]||'').join('').slice(0,2).toUpperCase()||'U';
  document.getElementById('profileAvatar').textContent=initials;
  document.getElementById('profileFullName').textContent=user.name;
  document.getElementById('profileUserEmail').textContent=user.email;
  const joined=new Date(user.createdAt).toLocaleDateString('en-PH',{year:'numeric',month:'long',day:'numeric'});
  document.getElementById('profileJoined').textContent='Member since '+joined;
  document.getElementById('editName').value   =user.name;
  document.getElementById('editEmail').value  =user.email;
  document.getElementById('editPhone').value  =user.phone||'';
  document.getElementById('editAddress').value=user.address||'';
  document.getElementById('editCity').value   =user.city||'';
  // order count badge
  const myOrders=getOrders().filter(o=>o.userId===currentUser.id);
  document.getElementById('profileOrderCount').textContent=myOrders.length;
  renderOrderHistory();
}

function switchProfileTab(btn,tab){
  document.querySelectorAll('.profile-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.profile-panel').forEach(p=>p.style.display='none');
  document.getElementById('profile-'+tab).style.display='block';
  if(tab==='orders')renderOrderHistory();
}

function saveProfileChanges(){
  const name   =document.getElementById('editName').value.trim();
  const phone  =document.getElementById('editPhone').value.trim();
  const address=document.getElementById('editAddress').value.trim();
  const city   =document.getElementById('editCity').value.trim();
  if(!name){showToast('Name cannot be empty');return;}
  const users=getUsers();
  const idx  =users.findIndex(u=>u.id===currentUser.id);
  if(idx===-1)return;
  users[idx]={...users[idx],name,phone,address,city};
  saveUsers(users);
  currentUser={...currentUser,name,phone};
  localStorage.setItem(SD_SESSION,JSON.stringify(currentUser));
  updateNavAuth();
  document.getElementById('profileFullName').textContent=name;
  const initials=name.split(' ').map(n=>n[0]||'').join('').slice(0,2).toUpperCase()||'U';
  document.getElementById('profileAvatar').textContent=initials;
  document.getElementById('navUserAvatar').textContent=initials;
  showToast('Profile updated successfully ✓');
}

function renderOrderHistory(){
  const container=document.getElementById('orderHistoryList');
  if(!container||!currentUser)return;
  const all   =getOrders();
  const orders=all.filter(o=>o.userId===currentUser.id).sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  if(!orders.length){
    container.innerHTML=`<div class="no-orders"><div class="no-orders-icon">📦</div><h3>No orders yet</h3><p>Your order history will appear here after your first purchase.</p><button class="btn-primary" style="margin-top:20px" onclick="showPage('shop')">Start Shopping →</button></div>`;
    return;
  }
  container.innerHTML=orders.map(order=>{
    const statusColors={'Pending':'#f59e0b','Confirmed':'#3b82f6','Preparing':'#8b5cf6','Out for Delivery':'#f97316','Delivered':'#10b981','Cancelled':'#ef4444'};
    const sc=statusColors[order.status]||'#6b7280';
    const preview=order.items.slice(0,2).map(i=>`${i.name} ×${i.qty}`).join(', ')+(order.items.length>2?` +${order.items.length-2} more`:'');
    return`<div class="order-card" onclick="openOrderDetail('${order.orderId}')">
      <div class="order-card-header">
        <div><div class="order-id">${order.orderId}</div><div class="order-date">${new Date(order.createdAt).toLocaleDateString('en-PH',{year:'numeric',month:'short',day:'numeric'})}</div></div>
        <div style="text-align:right"><div class="order-status-badge" style="background:${sc}18;color:${sc};border:1px solid ${sc}40">● ${order.status}</div><div class="order-total-display">₱${order.total.toLocaleString()}</div></div>
      </div>
      <div class="order-items-preview">${preview}</div>
      <div class="order-meta-row"><span>📍 ${order.delivery.address}, ${order.delivery.city}</span><span>💳 ${order.payment}</span></div>
      <div class="order-card-footer"><span style="font-size:11px;color:var(--mid)">${order.items.reduce((s,i)=>s+i.qty,0)} item${order.items.reduce((s,i)=>s+i.qty,0)>1?'s':''}</span><span class="order-view-link">View Details →</span></div>
    </div>`;
  }).join('');
  animateNewCards(container);
}

function openOrderDetail(orderId){
  const order=getOrders().find(o=>o.orderId===orderId);
  if(!order)return;
  const steps=['Pending','Confirmed','Preparing','Out for Delivery','Delivered'];
  const curIdx=steps.indexOf(order.status);
  const tracker=steps.map((step,i)=>{
    const done=i<curIdx,active=i===curIdx;
    return`<div class="ost-item ${done?'done':''} ${active?'active':''}">
      <div class="ost-dot">${done?'✓':i+1}</div>
      <div class="ost-label">${step}</div>
    </div>${i<steps.length-1?`<div class="ost-line ${done?'done':''}"></div>`:''}`;
  }).join('');
  document.getElementById('orderDetailContent').innerHTML=`
    <button class="modal-close" onclick="document.getElementById('orderDetailModal').classList.remove('open')">×</button>
    <div style="margin-bottom:4px"><span class="order-detail-badge">Order</span></div>
    <div class="order-detail-id">${order.orderId}</div>
    <div class="order-detail-date">Placed ${new Date(order.createdAt).toLocaleDateString('en-PH',{year:'numeric',month:'long',day:'numeric',hour:'2-digit',minute:'2-digit'})}</div>
    <div class="order-status-tracker">${tracker}</div>
    <div class="order-detail-body">
      <div class="order-detail-section">
        <h4 class="ods-title">📦 Items Ordered</h4>
        ${order.items.map(item=>`<div class="odi-row"><div class="odi-emoji">${item.emoji||'📦'}</div><div class="odi-info"><div class="odi-name">${item.name}</div><div class="odi-sub">${item.cat||''} · ×${item.qty}</div></div><div class="odi-price">₱${(item.price*item.qty).toLocaleString()}</div></div>`).join('')}
        <div class="order-detail-total"><span>Order Total</span><span>₱${order.total.toLocaleString()}</span></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div class="order-detail-section">
          <h4 class="ods-title">🚚 Delivery</h4>
          <p style="font-weight:600;margin-bottom:4px">${order.delivery.name}</p>
          <p style="color:var(--mid);font-size:13px">${order.delivery.phone}</p>
          <p style="color:var(--mid);font-size:13px">${order.delivery.address}, ${order.delivery.city}</p>
          <p style="color:var(--mid);font-size:13px">Branch: ${order.delivery.branch}</p>
          ${order.delivery.notes?`<p style="font-size:12px;color:var(--mid);font-style:italic;margin-top:4px">"${order.delivery.notes}"</p>`:''}
        </div>
        <div class="order-detail-section">
          <h4 class="ods-title">💳 Payment</h4>
          <p style="font-weight:500;margin-bottom:8px">${order.payment}</p>
          ${order.payment==='Cash on Delivery (COD)'?'<p style="font-size:12px;color:var(--mid)">Pay in cash upon delivery.</p>':''}
          ${order.payment==='GCash'?'<p style="font-size:12px;color:var(--mid)">GCash: <strong>0928-554-7373</strong></p>':''}
          ${order.payment.includes('Bank')?'<p style="font-size:12px;color:var(--mid)">BDO: 1234-5678-9012<br>BPI: 9876-5432-1098<br>Acct: Savers Depot Inc.</p>':''}
        </div>
      </div>
    </div>`;
  document.getElementById('orderDetailModal').classList.add('open');
}
function closeOrderDetailModal(e){if(e.target===document.getElementById('orderDetailModal'))document.getElementById('orderDetailModal').classList.remove('open');}

// ══════════════ CHECKOUT SYSTEM ══════════════

function openCheckout(){
  if(!cart.length){showToast('Your cart is empty!');return;}
  checkoutStep=1;checkoutDelivery={};checkoutPayment='';
  document.getElementById('cartModal').classList.remove('open');
  document.getElementById('checkoutModal').classList.add('open');
  renderCheckoutStep();
}

function getCartSummary(){
  const counts={};
  cart.forEach(p=>{if(!counts[p.id])counts[p.id]={...p,qty:0};counts[p.id].qty++;});
  return Object.values(counts);
}

function renderCheckoutStep(){
  updateCheckoutProgress();
  const content=document.getElementById('checkoutContent');
  const actions=document.getElementById('checkoutActions');
  const summary=getCartSummary();
  const total  =summary.reduce((s,i)=>s+i.price*i.qty,0);

  if(checkoutStep===1){
    content.innerHTML=`
      <h3 class="co-step-title">Review Your Order</h3>
      <div class="co-item-list">
        ${summary.map(item=>`<div class="co-item-row">
          <div class="co-item-thumb">${item.img?`<img src="${item.img}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:6px">`:(item.emoji||'📦')}</div>
          <div class="co-item-info"><div class="co-item-name">${item.name}</div><div class="co-item-sub">${item.sub||item.cat}</div></div>
          <div class="co-item-right"><div class="co-item-qty">×${item.qty}</div><div class="co-item-price">₱${(item.price*item.qty).toLocaleString()}</div></div>
        </div>`).join('')}
      </div>
      <div class="co-total-bar"><span>Subtotal (${cart.length} item${cart.length>1?'s':''})</span><span class="co-total-price">₱${total.toLocaleString()}</span></div>
      <div class="co-info-note">💡 Delivery fee will be confirmed by our branch team after order placement.</div>`;
    actions.innerHTML=`
      <button class="btn-ghost" onclick="document.getElementById('checkoutModal').classList.remove('open');openCart()">← Back to Cart</button>
      <button class="btn-primary co-next-btn" onclick="nextCheckout()">Delivery Details →</button>`;
  }
  else if(checkoutStep===2){
    const users=currentUser?getUsers():[];
    const fullUser=currentUser?users.find(u=>u.id===currentUser.id):null;
    content.innerHTML=`
      <h3 class="co-step-title">Delivery Information</h3>
      ${!currentUser?`<div class="co-auth-note">Have an account? <span onclick="document.getElementById('checkoutModal').classList.remove('open');openSignIn()" style="color:var(--orange);cursor:pointer;font-weight:500;text-decoration:underline">Sign in</span> to auto-fill your details.</div>`:''}
      <div class="form-2col">
        <div class="form-row"><label>Full Name *</label><input type="text" id="coName" value="${checkoutDelivery.name||currentUser?.name||''}" placeholder="Juan dela Cruz"></div>
        <div class="form-row"><label>Phone Number *</label><input type="tel" id="coPhone" value="${checkoutDelivery.phone||currentUser?.phone||''}" placeholder="09XX XXX XXXX"></div>
      </div>
      <div class="form-row"><label>Delivery Address *</label><input type="text" id="coAddress" value="${checkoutDelivery.address||fullUser?.address||''}" placeholder="Street no., Barangay"></div>
      <div class="form-row"><label>City / Province *</label><input type="text" id="coCity" value="${checkoutDelivery.city||fullUser?.city||''}" placeholder="e.g. Cebu City, Cebu"></div>
      <div class="form-row"><label>Nearest Branch</label>
        <select id="coBranch">
          <option ${checkoutDelivery.branch==='A.S. Fortuna, Mandaue Cebu'?'selected':''}>A.S. Fortuna, Mandaue Cebu</option>
          <option ${checkoutDelivery.branch==='Lapu-Lapu, Cebu'?'selected':''}>Lapu-Lapu, Cebu</option>
          <option ${checkoutDelivery.branch==='Talamban, Cebu City'?'selected':''}>Talamban, Cebu City</option>
          <option ${checkoutDelivery.branch==='Tacloban, Leyte'?'selected':''}>Tacloban, Leyte</option>
          <option ${checkoutDelivery.branch==='Tagbilaran, Bohol'?'selected':''}>Tagbilaran, Bohol</option>
          <option ${checkoutDelivery.branch==='Iligan City'?'selected':''}>Iligan City</option>
        </select>
      </div>
      <div class="form-row"><label>Special Instructions <span style="font-weight:400;color:var(--mid)">(optional)</span></label><textarea id="coNotes" placeholder="Gate code, landmark, delivery time preference…" style="height:72px">${checkoutDelivery.notes||''}</textarea></div>`;
    actions.innerHTML=`
      <button class="btn-ghost" onclick="checkoutStep=1;renderCheckoutStep()">← Back</button>
      <button class="btn-primary co-next-btn" onclick="nextCheckout()">Payment Method →</button>`;
  }
  else if(checkoutStep===3){
    content.innerHTML=`
      <h3 class="co-step-title">Choose Payment Method</h3>
      <div class="pay-options">
        ${[
          {val:'Cash on Delivery (COD)',icon:'💵',label:'Cash on Delivery',sub:'Pay in cash when your order arrives'},
          {val:'GCash',icon:'📱',label:'GCash Transfer',sub:'Send to GCash no. 0928-554-7373'},
          {val:'Bank Transfer (BDO / BPI)',icon:'🏦',label:'Bank Transfer',sub:'BDO or BPI — well send account details'},
        ].map(opt=>`
          <label class="pay-option ${checkoutPayment===opt.val?'selected':''}">
            <input type="radio" name="payMethod" value="${opt.val}" ${checkoutPayment===opt.val?'checked':''} onchange="checkoutPayment=this.value;document.querySelectorAll('.pay-option').forEach(el=>el.classList.remove('selected'));this.closest('.pay-option').classList.add('selected')">
            <div class="pay-icon">${opt.icon}</div>
            <div class="pay-info"><strong>${opt.label}</strong><span>${opt.sub}</span></div>
            <div class="pay-check">✓</div>
          </label>`).join('')}
      </div>`;
    actions.innerHTML=`
      <button class="btn-ghost" onclick="checkoutStep=2;renderCheckoutStep()">← Back</button>
      <button class="btn-primary co-next-btn" onclick="nextCheckout()">Review Order →</button>`;
  }
  else if(checkoutStep===4){
    content.innerHTML=`
      <h3 class="co-step-title">Confirm Your Order</h3>
      <div class="co-confirm-grid">
        <div class="co-confirm-section">
          <div class="co-confirm-label">🛒 Items (${summary.reduce((s,i)=>s+i.qty,0)})</div>
          ${summary.map(i=>`<div class="co-confirm-item"><span>${i.name}</span><span>×${i.qty} · ₱${(i.price*i.qty).toLocaleString()}</span></div>`).join('')}
          <div class="co-confirm-total">Total: <strong>₱${total.toLocaleString()}</strong></div>
        </div>
        <div class="co-confirm-section">
          <div class="co-confirm-label">🚚 Delivery To</div>
          <p><strong>${checkoutDelivery.name}</strong> · ${checkoutDelivery.phone}</p>
          <p style="color:var(--mid);font-size:13px">${checkoutDelivery.address}, ${checkoutDelivery.city}</p>
          <p style="color:var(--mid);font-size:13px">Branch: ${checkoutDelivery.branch}</p>
          ${checkoutDelivery.notes?`<p style="color:var(--mid);font-size:12px;font-style:italic">"${checkoutDelivery.notes}"</p>`:''}
        </div>
        <div class="co-confirm-section">
          <div class="co-confirm-label">💳 Payment</div>
          <p><strong>${checkoutPayment}</strong></p>
          ${checkoutPayment==='GCash'?`<p style="font-size:12px;color:var(--mid)">Transfer to GCash: 0928-554-7373</p>`:''}
          ${checkoutPayment.includes('Bank')?`<p style="font-size:12px;color:var(--mid)">BDO: 1234-5678-9012 · BPI: 9876-5432-1098</p>`:''}
        </div>
      </div>`;
    actions.innerHTML=`
      <button class="btn-ghost" onclick="checkoutStep=3;renderCheckoutStep()">← Back</button>
      <button class="btn-primary co-next-btn" style="background:#059669;border-color:#059669" onclick="placeOrder()"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Place Order</button>`;
  }
}

function nextCheckout(){
  if(checkoutStep===1){checkoutStep=2;renderCheckoutStep();}
  else if(checkoutStep===2){
    const name   =document.getElementById('coName').value.trim();
    const phone  =document.getElementById('coPhone').value.trim();
    const address=document.getElementById('coAddress').value.trim();
    const city   =document.getElementById('coCity').value.trim();
    if(!name||!phone||!address||!city){showToast('Please fill in all required fields');return;}
    checkoutDelivery={name,phone,address,city,branch:document.getElementById('coBranch').value,notes:document.getElementById('coNotes').value.trim()};
    checkoutStep=3;renderCheckoutStep();
  }
  else if(checkoutStep===3){
    if(!checkoutPayment){showToast('Please select a payment method');return;}
    checkoutStep=4;renderCheckoutStep();
  }
}

function generateOrderId(){
  const d=new Date();
  const ds=d.getFullYear().toString().slice(2)+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0');
  return'SD-'+ds+'-'+Math.floor(Math.random()*9000+1000);
}

function placeOrder(){
  const summary=getCartSummary();
  const total  =summary.reduce((s,i)=>s+i.price*i.qty,0);
  const order={
    orderId  :generateOrderId(),
    userId   :currentUser?currentUser.id:null,
    items    :summary,
    total,
    delivery :checkoutDelivery,
    payment  :checkoutPayment,
    status   :'Pending',
    createdAt:new Date().toISOString()
  };
  const orders=getOrders();
  orders.push(order);
  saveOrders(orders);
  cart=[];saveCart();updateCartBadge();
  document.getElementById('checkoutModal').classList.remove('open');
  showOrderConfirmation(order);
}

function showOrderConfirmation(order){
  const total=order.total;
  document.getElementById('orderConfirmContent').innerHTML=`
    <div class="oc-icon-wrap"><div class="oc-icon">✓</div></div>
    <h3 class="oc-title">Order Placed!</h3>
    <div class="oc-order-id">${order.orderId}</div>
    <p class="oc-msg">Thank you, <strong>${order.delivery.name}</strong>! Your order of <strong>₱${total.toLocaleString()}</strong> has been received.</p>
    <p class="oc-msg" style="margin-top:8px">Our team from <strong>${order.delivery.branch}</strong> will call you at <strong>${order.delivery.phone}</strong> to confirm your delivery schedule.</p>
    ${order.payment==='GCash'?`<div class="oc-payment-note">📱 <strong>GCash Payment:</strong> Send ₱${total.toLocaleString()} to <strong>0928-554-7373</strong> (Savers Depot) and message us the screenshot via Viber or Facebook.</div>`:''}
    ${order.payment.includes('Bank')?`<div class="oc-payment-note">🏦 <strong>Bank Transfer:</strong> BDO: 1234-5678-9012 or BPI: 9876-5432-1098 (Savers Depot Inc.). Send proof of payment to our branch.</div>`:''}
    <div class="oc-actions">
      ${currentUser?`<button class="btn-primary" onclick="document.getElementById('orderConfirmModal').classList.remove('open');showPage('profile');setTimeout(()=>{document.querySelectorAll('.profile-tab')[1]?.click()},400)">View My Orders</button>`:''}
      <button class="${currentUser?'btn-ghost':'btn-primary'}" onclick="document.getElementById('orderConfirmModal').classList.remove('open');showPage('shop')">Continue Shopping</button>
    </div>`;
  document.getElementById('orderConfirmModal').classList.add('open');
}

function updateCheckoutProgress(){
  for(let i=1;i<=4;i++){
    const el=document.getElementById('csi-'+i);
    if(!el)continue;
    el.classList.toggle('cps-active',i===checkoutStep);
    el.classList.toggle('cps-done',i<checkoutStep);
    if(i>checkoutStep){
      el.classList.remove('cps-active');
      el.classList.remove('cps-done');
    }
  }
}
function closeCheckoutModal(e){if(e.target===document.getElementById('checkoutModal'))document.getElementById('checkoutModal').classList.remove('open');}
function closeOrderConfirmModal(e){if(e.target===document.getElementById('orderConfirmModal'))document.getElementById('orderConfirmModal').classList.remove('open');}

// ══════════════ CHATBOT ══════════════
const GEMINI_API_KEY='YOUR_GEMINI_API_KEY_HERE';

const CHAT_SYSTEM=`You are the friendly and knowledgeable assistant for Savers Depot, a Philippine hardware and building materials store with 20+ years of experience. You help customers with:

PRODUCTS (many items across these categories):
- Tiles: Wall tiles, floor tiles, outdoor tiles, mosaic (₱320–₱680/pc or sqm)
- Bathroom: Sanitary ware, showers, faucets, bathtubs, accessories (₱420–₱18,000)
- Paints: Boysen, Davies brands; latex, enamel, roof paints, primers (₱320–₱780)
- Electrical: LED bulbs, panel lights, circuit breakers, outlets, wires (₱180–₱650)
- Hardware: Power tools (Makita drills), hand tools (Stanley), building materials (₱180–₱3,500)
- Doors & Windows: Wood doors, aluminum windows, steel security doors (₱2,800–₱12,500)
- Plumbing: Waterproofing, PVC pipes, valves (₱280–₱1,850)
- Wood Works: Springfield SPC flooring, LVT vinyl, Shera fiber cement boards (₱420–₱780/sqm)

BRANCHES:
- A.S. Fortuna (Mandaue, Cebu) — 0928-554-7373
- Lapu-Lapu (Cebu) — 0998-591-2651
- Talamban (Cebu City) — 0998-591-2654
- Tacloban (Leyte) — 0998-591-2661
- Bohol (Tagbilaran) — 0947-991-8063
- Iligan (Lanao del Norte) — 0919-089-6784

DELIVERY: Every branch offers delivery via Lalamove. Contact a branch directly to arrange.

ORDERING: Customers can add items to cart and checkout online. Payment options: COD, GCash (0928-554-7373), Bank Transfer (BDO/BPI).

CAREERS: 8+ open positions. Benefits: HMO, 13th month pay, employee discount, 15 days VL/SL.

CONTACT: +63 32 422-6223 | info@saversdepot.com.ph

Keep responses friendly, concise, and helpful. Use ₱ for prices. Reply in the same language the customer uses.`;

function toggleChat(){
  chatIsOpen=!chatIsOpen;
  const win=document.getElementById('chat-window');
  const fab=document.getElementById('chat-fab');
  if(chatIsOpen){
    win.classList.add('open');fab.classList.add('open');
    if(!chatHistory.length){setTimeout(()=>addBotMessage("Hello! 👋 Welcome to Savers Depot!\n\nI can help you with product info, branch locations, delivery, ordering, and career opportunities. What can I help you with today?"),400);}
    setTimeout(()=>document.getElementById('chatInput').focus(),350);
  }else{win.classList.remove('open');fab.classList.remove('open');}
}

function addBotMessage(text){
  const msgs=document.getElementById('chatMessages');
  const sug =document.getElementById('chatSuggestions');
  const now =new Date().toLocaleTimeString('en-PH',{hour:'2-digit',minute:'2-digit',hour12:true});
  const div =document.createElement('div');
  div.className='chat-msg bot';
  div.innerHTML=`<div><div class="chat-bubble bot">${text.replace(/\n/g,'<br>')}</div><div class="chat-time" style="margin-top:4px;margin-left:4px">${now}</div></div>`;
  msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
  sug.style.display='flex';
}

function addUserMessage(text){
  const msgs=document.getElementById('chatMessages');
  const sug =document.getElementById('chatSuggestions');
  const now =new Date().toLocaleTimeString('en-PH',{hour:'2-digit',minute:'2-digit',hour12:true});
  const div =document.createElement('div');
  div.className='chat-msg user';
  div.innerHTML=`<div><div class="chat-bubble user">${text}</div><div class="chat-time" style="margin-top:4px;text-align:right;margin-right:4px">${now}</div></div>`;
  msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;
  sug.style.display='none';
}

function showTyping(){const msgs=document.getElementById('chatMessages');const div=document.createElement('div');div.className='chat-msg bot';div.id='chatTyping';div.innerHTML=`<div class="chat-typing"><span></span><span></span><span></span></div>`;msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;}
function hideTyping(){const t=document.getElementById('chatTyping');if(t)t.remove();}

async function sendChat(){
  const input=document.getElementById('chatInput');
  const btn  =document.getElementById('chatSendBtn');
  const text =input.value.trim();
  if(!text||chatIsLoading)return;
  if(!GEMINI_API_KEY||GEMINI_API_KEY==='YOUR_GEMINI_API_KEY_HERE'){
    addBotMessage("⚠️ Please open scripts.js and replace <strong>YOUR_GEMINI_API_KEY_HERE</strong> with your free Gemini API key.<br><br>Get one free at: <a href='https://aistudio.google.com/app/apikey' target='_blank'>aistudio.google.com</a>");
    return;
  }
  input.value='';input.style.height='auto';
  addUserMessage(text);chatHistory.push({role:'user',content:text});
  chatIsLoading=true;btn.disabled=true;showTyping();
  try{
    const contents=chatHistory.slice(-6).map(m=>({role:m.role==='assistant'?'model':'user',parts:[{text:m.content}]}));
    const resp=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({system_instruction:{parts:[{text:CHAT_SYSTEM}]},contents,generationConfig:{maxOutputTokens:800,temperature:0.7}})});
    const data=await resp.json();hideTyping();
    if(data.error){addBotMessage(`Error: ${data.error.message}. Please check your API key.`);}
    else{const reply=data.candidates?.[0]?.content?.parts?.[0]?.text||"Sorry, I couldn't process that. Please call us at +63 32 422-6223.";chatHistory.push({role:'assistant',content:reply});addBotMessage(reply);}
  }catch(err){hideTyping();addBotMessage("Sorry, I'm having trouble connecting. Please call +63 32 422-6223 or email info@saversdepot.com.ph");}
  chatIsLoading=false;btn.disabled=false;
}

function sendSuggestion(btn){document.getElementById('chatInput').value=btn.textContent;sendChat();}
function chatKeydown(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat();}}
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,100)+'px';}

// ── INIT ──
document.addEventListener('DOMContentLoaded',()=>{
  loadSession();
  renderHomeProducts();
  document.querySelectorAll('.why-card,.branch-card,.blog-card,.cat-card').forEach(el=>{
    el.style.opacity='0';el.style.transform='translateY(16px)';
    el.style.transition='opacity 0.5s ease, transform 0.5s ease';
    scrollObs.observe(el);
  });
  setTimeout(()=>{if(!chatIsOpen)toggleChat();},1500);
});