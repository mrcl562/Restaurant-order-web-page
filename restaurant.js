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
            item_quantitys(ev.target.parentElement.classList);
        }
    })
})

const add_order_item = (quantity, name, price) =>{
    order_items
            .appendChild(Object.assign(document.createElement("div"), {classList: "order_item"}))
            .append(
                Object.assign(document.createElement("div"), {classList: "item_quantity", innerText: quantity}),
                Object.assign(document.createElement("div"), {classList: "item_name", innerText: name}),
                Object.assign(document.createElement("div"), {classList: "item_price", innerText: price})
            )
}

const item_quantitys = (click_item) => {
    click_item.contains("classic_burger") 
        ? menu_keys.burger[2]++ : click_item.contains("veggie_burger") 
            ? menu_keys.veggie[2]++ : click_item.contains("bbq_burger") 
                ? menu_keys.bbq[2]++ :click_item.contains("chicken_sandwich") 
                    ? menu_keys.chicken[2]++ :click_item.contains("fries") 
                        ? menu_keys.fries[2]++ :click_item.contains("milkshake") 
                            ? menu_keys.milkshake[2]++ : false;
}
