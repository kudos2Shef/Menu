


//Get only unique categories -HARDEST ONE
//iterate over categories return buttons
// make sure to select buttons when they are available
//tag filter buttons manually but menu items dynamically method1
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "freak shake",
      category: "shakes",
      price: 16.99,
      img: "https://chefmeathome.com/cdn/shop/articles/Freak_Shake_Blog_Image_1000x.jpg?v=1633880329",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id:10,
      img:"https://skinnyspatula.com/wp-content/uploads/2022/09/Creamy_Chicken_Sausage_Pasta_1.jpg",
      desc:"Creamy Chicken and Sausage Pasta skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
      price:20.99,
      category:"dinner",
      title:"Creamy Pasta"
    }
  ];

  const sectionCenter = document.querySelector('.section-center');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // load items
  window.addEventListener("DOMContentLoaded",function(){
   displayMenuItems(menu);
  });

  // tag filter buttons manunally
  filterBtns.forEach(function (btn){
    btn.addEventListener('click',function(e){
        //console.log(e.currentTarget);
        const category = e.currentTarget.dataset.id;
        //console.log(e.currentTarget.dataset);//DOMStringMap {id: 'shakes'}
       // console.log(e.currentTarget.dataset.id);//shakes
       const menuCategory = menu.filter(function(menuItem) {

        //console.log(menuItem.category);// all 10 menus category is printed 
        //return menuItem;// when clicked all menu is printed

        if(menuItem.category == category)
        {
            return menuItem;// return  respective menu item clicked shakes then all three shakes displayed

        }
       })
       //console.log(menuCategory)

       if(category == 'all')
       {
        displayMenuItems(menu);
       }
       else{
        displayMenuItems(menuCategory);
       }
      });
  });
  
  // dynamically display menu items
  function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
     return `
     <article class="menu-item">
         <img src=${item.img} alt="menu-item" class='photo'>
         <div class="item-info">
         <header>
             <h4>${item.title}</h4>
             <h4 class='price'>$${item.price}</h4>
         </header>
         <p class='item-text'>${item.desc}</p>
     </div>
     </article>`;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
  }