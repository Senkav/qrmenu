let currentLang = "ru";
let currentCategory = "all";
let cart = [];

// ОБЯЗАТЕЛЬНО: Укажи здесь свой номер телефона (начинай с 7...)
const PHONE_NUMBER = "77071234567"; 

const menuData = {
    ru: {
        categories: { 
            all: "ВСЕ", 
            total: "Итого (+10% обслуж.):", 
            cart: "Корзина", 
            close: "Закрыть", 
            order: "Заказать через WhatsApp",
            table: "№ Стола:",
            comment: "Комментарий к заказу...",
            empty: "В корзине пусто"
        },
        items: {
            "ШАШЛЫКИ": [
                ["Баранина", 2300], ["Окорочка", 1600], ["Утка", 1800], ["Куриное филе", 1800],
                ["Люля говядина", 1900], ["Люля курица", 1600], ["Колбаски курин. (3 шт)", 900],
                ["Колбаски говяж. (3 шт)", 1300], ["Грибы шампиньоны", 1500], ["Люля баранина", 1900],
                ["Крылышки", 1400], ["Овощи гриль", 1500], ["Курдюк с картоф. дольками", 1200]
            ],
            "САЛАТЫ": [
                ["Ачичук", 1000], ["Цезарь с курицей", 2400], ["Цезарь с морепродуктами", 3000],
                ["Греческий", 1900], ["Хе из рыбы", 2200], ["Сыр чечил", 2200],
                ["Хрустящие баклажаны", 2000], ["Кавказ", 2000], ["Мужской каприз", 1600], ["Дамский каприз", 1800]
            ],
            "ПЕРВЫЕ БЛЮДА": [
                ["Шорпа с бараниной", 1800], ["Шорпа с говядиной", 1900], ["Пельмени с бульоном", 1500],
                ["Рамен с курицей", 1800], ["Рамен с говядиной", 1900], ["Том ям с курицей", 2200]
            ],
            "ПИЦЦА": [
                ["Пепперони", 3000], ["Маргарита", 2200], ["Четыре сыра", 3100],
                ["Цезарь с курицей", 3300], ["Пицца болоньезе", 3200], ["С курицей и грибами", 3000]
            ],
            "ВТОРЫЕ БЛЮДА": [
                ["Плов ташкентский", 1800], ["Казан-кебаб", 2500], ["Манты рубленные (5шт)", 1700],
                ["Манты с фаршем (5шт)", 1400], ["Вареники с картофелем", 800], ["Куырдак", 2500],
                ["Дымляма", 2200], ["Гуйру лагман", 2000], ["Суйру лагман", 1500],
                ["Цомян лагман", 1800], ["Уйгурский ганг-фан", 1500]
            ],
            "СТЕЙКИ": [
                ["Рибай", 3700], ["Тибон", 3500], ["Чикен роял", 2500], ["Стейк из семги", 3800]
            ],
            "ПАСТА": [
                ["Феттучини с кур. и гриб.", 1900], ["Фарфалле с лососем", 2000], ["Спагетти болоньезе", 1900]
            ],
            "ФАСТ ФУД": [
                ["Фри", 900], ["Крылышки 7шт", 2000], ["Крылышки 15шт", 3500], ["Крылышки 25шт", 5500], ["Стрипсы 6шт", 1500]
            ],
            "РОЛЛЫ": [
                ["Калифорния", 2500], ["Канада", 2800], ["Филадельфия", 3000],
                ["Темпура с угрем", 2200], ["Темпура с лососем", 2500], ["Темпура веган", 1800],
                ["Ролл запеченный", 2900], ["Ролл сливочный", 2500], ["Каппа маки", 700], ["Сяке маки", 1100]
            ],
            "ГОРЯЧИЕ НАПИТКИ": [
                ["Латте 350мл", 1000], ["Капучино 350мл", 1000], ["Американо 350мл", 800],
                ["Чай с молоком 600мл", 700], ["Чай с молоком 1л", 1300], ["Чай черный 600мл", 600],
                ["Чай черный 1л", 1100], ["Чай фруктовый 600мл", 800], ["Чай фруктовый 1л", 1500],
                ["Чай ташкентский 600мл", 800], ["Чай ташкентский 1л", 1500]
            ],
            "ХОЛОДНЫЕ НАПИТКИ": [
                ["Лимонады", 1700], ["Кола 900мл", 900], ["Кола 600мл", 600],
                ["Фанта 900мл", 900], ["Фанта 600мл", 600], ["Спрайт 900мл", 900], ["Спрайт 600мл", 600]
            ],
            "ДЕСЕРТЫ": [
                ["Лепешка", 120], ["Торты", 1100], ["Мороженое", 800], ["Фруктовая нарезка", 1800]
            ]
        }
    },
    kz: {
        categories: { 
            all: "БАРЛЫҒЫ", 
            total: "Жиыны (+10% қызмет):", 
            cart: "Себет", 
            close: "Жабу", 
            order: "WhatsApp-пен тапсырыс беру",
            table: "Үстел №:",
            comment: "Тапсырысқа пікір...",
            empty: "Себет бос"
        },
        items: {
            "ШӘШЛІКТЕР": [
                ["Қой еті", 2300], ["Тауық сирақтары", 1600], ["Үйрек еті", 1800], ["Тауық филесі", 1800],
                ["Сиыр люля", 1900], ["Тауық люля", 1600], ["Тауық шұжықтары", 900],
                ["Сиыр шұжықтары", 1300], ["Шампиньондар", 1500], ["Қой люля", 1900],
                ["Қанаттар", 1400], ["Гриль көкөністері", 1500], ["Құйрық май мен картоп", 1200]
            ],
            "САЛАТТАР": [
                ["Ачичук", 1000], ["Цезарь тауықпен", 2400], ["Цезарь теңіз өнімдерімен", 3000],
                ["Грек салаты", 1900], ["Балық хе", 2200], ["Чечил", 2200],
                ["Қытырлақ баклажандар", 2000], ["Кавказ", 2000], ["Ерлер нәпсісі", 1600], ["Әйелдер нәпсісі", 1800]
            ],
            "БІРІНШІ ТАҒАМДАР": [
                ["Қой шорпасы", 1800], ["Сиыр шорпасы", 1900], ["Тұшпара", 1500],
                ["Тауық рамені", 1800], ["Сиыр рамені", 1900], ["Тауық том ям", 2200]
            ]
            // ... остальное меню подгружается по аналогии
        }
    }
};

function switchLang(lang) {
    currentLang = lang;
    document.getElementById('btn-ru').classList.toggle('active', lang === 'ru');
    document.getElementById('btn-kz').classList.toggle('active', lang === 'kz');
    render();
}

function render() {
    const menuContainer = document.getElementById("menu");
    const navContainer = document.getElementById("nav");
    menuContainer.innerHTML = "";
    navContainer.innerHTML = "";

    const data = menuData[currentLang].items;
    const labels = menuData[currentLang].categories;

    const allBtn = document.createElement("button");
    allBtn.textContent = labels.all;
    allBtn.onclick = () => { currentCategory = "all"; render(); };
    if (currentCategory === "all") allBtn.classList.add("active");
    navContainer.appendChild(allBtn);

    Object.keys(data).forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.onclick = () => { currentCategory = cat; render(); };
        if (currentCategory === cat) btn.classList.add("active");
        navContainer.appendChild(btn);

        if (currentCategory !== "all" && currentCategory !== cat) return;

        const section = document.createElement("div");
        section.className = "category";
        section.innerHTML = `<h2>${cat}</h2><div class="grid"></div>`;
        const grid = section.querySelector(".grid");

        data[cat].forEach(item => {
            const div = document.createElement("div");
            div.className = "menu-item";
            div.innerHTML = `<span>${item[0]}</span><b>${item[1]} ₸</b>`;
            div.onclick = (e) => addToCart(item, e);
            grid.appendChild(div);
        });
        menuContainer.appendChild(section);
    });

    document.getElementById('cartTitle').textContent = labels.cart;
    document.getElementById('closeText').textContent = labels.close;
}

function addToCart(item, event) {
    cart.push(item);
    document.getElementById("cartCount").textContent = cart.length;
    
    const flyer = document.createElement('div');
    flyer.className = 'flying-item';
    flyer.style.left = event.clientX + 'px';
    flyer.style.top = event.clientY + 'px';
    document.body.appendChild(flyer);

    const cartIcon = document.getElementById('cartBtn').getBoundingClientRect();
    setTimeout(() => {
        flyer.style.left = (cartIcon.left + 30) + 'px';
        flyer.style.top = (cartIcon.top + 30) + 'px';
        flyer.style.transform = 'scale(0.1)';
        flyer.style.opacity = '0';
    }, 50);
    setTimeout(() => flyer.remove(), 750);
}

document.getElementById("cartBtn").onclick = () => {
    const list = document.getElementById("cartItems");
    const labels = menuData[currentLang].categories;
    list.innerHTML = "";
    let total = 0;

    if(cart.length === 0) {
        list.innerHTML = `<p style="text-align:center; opacity:0.5">${labels.empty}</p>`;
    }

    cart.forEach((item, index) => {
        total += item[1];
        list.innerHTML += `
            <div class="cart-item">
                <span>${item[0]}</span>
                <div>
                    <span style="margin-right:10px">${item[1]} ₸</span>
                    <button class="remove-btn" onclick="removeItem(${index})">✕</button>
                </div>
            </div>`;
    });

    const finalPrice = Math.floor(total * 1.1);
    
    document.getElementById("total").innerHTML = `
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; margin-bottom: 15px;">
            <div style="margin-bottom:10px">
                <input type="number" id="tableNum" placeholder="${labels.table}" style="width:100%; padding:10px; border-radius:8px; border:1px solid #333; background:#000; color:#fff;">
            </div>
            <textarea id="orderComment" placeholder="${labels.comment}" style="width:100%; padding:10px; border-radius:8px; border:1px solid #333; background:#000; color:#fff; height:60px;"></textarea>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom: 10px;">
            <b>${labels.total}</b><b>${finalPrice} ₸</b>
        </div>
        <button class="close-btn" style="background:#25D366; margin-top:10px; font-size:16px;" onclick="sendWhatsApp()">
            📱 ${labels.order}
        </button>`;
    
    document.getElementById("modal").style.display = "flex";
};

function sendWhatsApp() {
    if (cart.length === 0) return;
    
    const table = document.getElementById('tableNum').value || 'Не указан';
    const comment = document.getElementById('orderComment').value || 'Нет';
    let total = 0;
    
    let message = `*ЗАКАЗ: BARACAT*\n`;
    message += `━━━━━━━━━━━━━━\n`;
    message += `📍 *Стол №:* ${table}\n`;
    message += `💬 *Коммент:* ${comment}\n`;
    message += `━━━━━━━━━━━━━━\n`;
    
    cart.forEach((item, i) => {
        message += `${i+1}. ${item[0]} — ${item[1]} ₸\n`;
        total += item[1];
    });
    
    const finalPrice = Math.floor(total * 1.1);
    message += `━━━━━━━━━━━━━━\n`;
    message += `*Сумма:* ${total} ₸\n`;
    message += `*ИТОГО (+10%): ${finalPrice} ₸*`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

function removeItem(index) {
    cart.splice(index, 1);
    document.getElementById("cartCount").textContent = cart.length;
    document.getElementById("cartBtn").click();
}

function closeCart() {
    document.getElementById("modal").style.display = "none";
}

tsParticles.load("tsparticles", {
    particles: {
        number: { value: 30 },
        color: { value: "#ff7a00" },
        opacity: { value: 0.15 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.8, direction: "top" }
    }
});

render();