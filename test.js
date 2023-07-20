const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
});

const products = [
  {
    id: 1,
    image: 'asus.png',
    brand: 'ASUS',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 1500,
    button: 'Free Shipping',
    count: 0,

  },
  {
    id: 2,
    image: 'proart.png',
    brand: 'ProArt',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 400,
    button: 'Free Shipping',
    count: 0,

  },
  {
    id: 3,
    image: 'acer.png',
    brand: 'Acer',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 450,
    button: 'Free Shipping',
    count: 0,

  },
  {
    id: 4,
    image: 'Surface.jpg',
    brand: 'Microsoft Surface',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 1340,
    button: 'Free Shipping',
    count: 0,

  },
  {
    id: 5,
    image: 'Huawei.jpg',
    brand: 'Huawei',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 800,
    button: 'Free Shipping',
    count: 0,

  },
  {
    id: 6,
    image: 'mc3.jpg',
    brand: 'Minecraft',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 20,
    button: 'Free Shipping',
    count: 0,

  },
  {
    id: 7,
    image: 'head3.jpg',
    brand: 'Headphone 3',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 20,
    button: 'Free Shipping',
    count: 0,

  },
  {
    id: 8,
    image: 'head2.png',
    brand: 'Headphone 4',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 20,
    button: 'Free Shipping',
    count: 0,
  },
  {
    id: 9,
    image: 'ear1.png',
    brand: 'Earphone X',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 60,
    button: 'Free Shipping',
    count: 0,
  },
  {
    id: 10,
    image: 'ear2.png',
    brand: 'Earphone X',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 30,
    button: 'Free Shipping',
    count: 0,
  },
  {
    id: 11,
    image: 'case1.jpg',
    brand: 'Case X',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 900,
    button: 'Free Shipping',
    count: 0,
  },
  {
    id: 12,
    image: 'case2.jpg',
    brand: 'Case Y',
    description: 'Lorem ipsum dolor sit amet ....',
    price: 790,
    button: 'Free Shipping',
    count: 0,
  }
  
];

const images = document.querySelectorAll('.product-card-image');
const productContainer = $('.product-container');
const productDetailSection = $('.product-detail');

function renderProducts() {
  const productCards = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.brand}" class="product-card-image">
      <button>${product.button}</button>
      <h3 class="product-card-brand">${product.brand}</h3>
      <span class="product-card-price">${product.price}$</span><br>
      <span class="product-card-price">${product.description}</span>
    </div>
  `);
  productContainer.html(productCards);
}

function showProductDetail(productIndex) {
  const product = products[productIndex];
  $('.product-card-image').css('width','10%');
  $('.product-card-image').attr('src', product.image);
  $('.product-card-brand').text(product.brand);
  $('.product-card-description').text(product.description);
  $('.product-card-price').text(product.price);
}

renderProducts();
$(document).ready(function() {
   $(".product-card button:contains('Free Shipping')").click(function() {
    const productIndex = $(this).closest('.product-card').index();
    const product = products[productIndex];
    const productHTML = `
    <div class="row">
      <div class="col-sm-4 product-card">
        <img src="${product.image}" alt="${product.brand}" class="product-card-image" style="width: 100px;height:100px;">
      </div>
      <div class="col-sm-5">                                                          
      <h3 class="product-card-brand">${product.brand}</h3>
      <p class="product-card-description" style="font-weight: 5;">${product.description}</p>
      <div class="row">
      <span class="col-sm-4 product-card-price">${product.price}$</span><br>
      <button class="col-sm-2 minus"><i class="fa-solid fa-square-minus" style="color: #e0a1f7;"></i></button>
      <span class="col-sm-2 count">${product.count+1}</span>
      <button class="col-sm-4 plus"><i class="fa-regular fa-square-plus" style="color: #db80cc;"></i></button>
      </div>
      </div>
    </div>
    `;
    $('.offcanvas-body').append(productHTML);
    $('.offcanvas-body').css({
      'max-height': '520px',
      'display': 'block'
    });
    $('.minus').click(function() {
      const productIndex = $(this).closest('.product-card').index();
      const product = products[productIndex];
      if (product && product.count !== undefined) {
        product.count--;
        $(this).siblings('.count').text(product.count);
        console.log("Product count:", product.count);
        console.log("Selected element:", $(this).siblings('.count'));
      }
    });
    
    $('.plus').click(function(){
      const productIndex = $(this).closest('.product-card').index();
      const product = products[productIndex];
      if (product && product.count !== undefined) {
        product.count++;
        $(this).siblings('.count').text(product.count);
        console.log("Product count:", product.count);
        console.log("Selected element:", $(this).siblings('.count'));
      }
    });
  });
 });
 $(document).ready(function() {
  const recentViewIds = [];

  $(".product-card-image").click(function() {
    const productIndex = $(this).closest('.product-card').index();
    const product = products[productIndex];
    const productId = product.id;
    const existingIndex = recentViewIds.indexOf(productId);
    if (existingIndex === -1) {
      const recentView = `
        <div class="row">
          <div class="col-sm-4 product-card">
            <img src="${product.image}" alt="${product.brand}" class="product-card-image product-${productId}" style="width: 100px;height:100px;">
          </div>
          <div class="col-sm-5">                                                          
            <h3 class="product-card-brand">${product.brand}</h3>
            <p class="product-card-description" style="font-weight: 5;">${product.description}</p>
            <div class="row">
              <span class="col-sm-4 product-card-price">${product.price}$</span><br>
            </div>
          </div>
        </div>
      `;
      $('.recent-view').prepend(recentView);
      $('.recent-view').css({
        'margin-left': '10%',
        'display': 'block'
      });
      recentViewIds.unshift(productId);
    } else if (existingIndex > 0) {
      const existingId = recentViewIds[existingIndex];
      recentViewIds.splice(existingIndex, 1);
      recentViewIds.unshift(existingId);
      const existingProduct = $(`.product-${existingId}`).closest('.row');
      existingProduct.remove();
      $('.recent-view').prepend(existingProduct);
    }
  });
});
$(document).ready(function() {
  $(".category-button").click(function() {
    
    
  });
});



