const menu_items = document.querySelector(".order_wrapper");
const order_items = document.querySelector(".order_items");
var menu_item = document.querySelectorAll(".menu_item");
const menu_keys ={
    burger: [5.99, "Classic Burger", 0],
    bbq: [10.59, "BBQ Burger", 0],
    chicken: [10.59, "Chicken Sandwich", 0],
    veggie: [7.59, "Veggie Burger", 0],
    fries: [1.99, "Fries", 0],
    milkshake: [2.59, "milkshake", 0],
};

//listener to add items to order
menu_item.forEach(item => {
    item.addEventListener("click",(ev) =>{ 
        if(ev.target.parentElement.classList.contains("menu_item")){
            item_quantitys(ev.target.parentElement.classList.value.split(" ").pop(0,1));
        }
    })
})


const item_quantitys = (click_item) => {
  const menuMap = {
    "classic_burger": "burger",
    "veggie_burger": "veggie",
    "bbq_burger": "bbq",
    "chicken_sandwich": "chicken",
    "fries": "fries",
    "milkshake": "milkshake"
  };
  const menuKey = menuMap[click_item];
  if (menuKey) {
    menu_keys[menuKey][2]++;
    if(menu_keys[menuKey][2] == 1){
      add_order_item(menu_keys[menuKey] , `${menuKey}_quantity`, `${menuKey}_price`)
    }else{
      document.querySelector(`.${menuKey}_quantity`).innerText = menu_keys[menuKey][2];
      document.querySelector(`.${menuKey}_price`).innerText = menu_keys[menuKey][0] * menu_keys[menuKey][2];
    }
  } else {
    return false;
  }
}

const add_order_item = (item, unique_class, unique_price) =>{
    order_items
            .appendChild(Object.assign(document.createElement("div"), {classList: "order_item"}))
            .append(
                Object.assign(document.createElement("div"), {classList: `item_quantity ${unique_class}`, innerText: item[2]}),
                Object.assign(document.createElement("div"), {classList: "item_name", innerText: item[1]}),
                Object.assign(document.createElement("div"), {classList: `item_price ${unique_price}`, innerText: item[0]})
            )              
}


