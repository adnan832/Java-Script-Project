const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //   console.log(newItem);

  //Validate Input Form

  if (newItem === "" || newItem === " ") {
    alert("Please add an Item");
    return;
  }

  // Create List item

  const li = document.createElement("li");
  const textNode = document.createTextNode(newItem);
  li.appendChild(textNode);

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon);

  li.appendChild(button);
  itemList.appendChild(li);

  itemInput.value = "";
//   console.log(itemList);
}

itemForm.addEventListener("submit", addItem);
