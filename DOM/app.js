const input = document.querySelector(".input-text");
const ul = document.querySelector(".list");
const addBtn = document.querySelector(".add");


input.addEventListener('keyup', (event) => {
    const listItems = input.value;
    const key = event.key;
    console.log(key);
    if(key === "Enter"){
        const li = document.createElement("li");
        li.innerHTML=listItems;
        ul.appendChild(li);
        input.value = "";
    }
})
addBtn.addEventListener('click', () => { 
    const listItems = input.value;

        const li = document.createElement("li");
        li.innerHTML=listItems;
        ul.appendChild(li);
        input.value = "";
})