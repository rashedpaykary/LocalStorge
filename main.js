// "use strict";

const section = document.querySelector("section");
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addedData);

function renderContacts(contacts) {
  section.innerHTML = "";
  contacts.forEach((item) => {
    const article = document.createElement("article");
    article.className = "contact w-[90%] bg-gray-500 flex";

    const info = document.createElement("div");
    info.className = "info flex flex-col text-white p-2 mt-2";
    info.innerHTML = `
  <div class="name-user">
  <strong class="font-[16]">name:</strong><span>${item.name}</span>
</div>
<div class="phone-user">
  <strong class="font-[14]">PhoneNumber:</strong><span>${item.phoneNumber}</span>
</div>
<div class="email-user">
  <strong class="font-[14]">email:</strong><span>${item.email}</span>
</div>
  `;

    const action = document.createElement("div");
    action.className = "action flex items-center justify-center gap-4 w-full";

    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteContacts);
    deleteBtn.className = "bg-green-500";
    deleteBtn.textContent = "Delete";

    const editBtn = document.createElement("button");
    editBtn.addEventListener("click", editContacts);
    editBtn.className = "bg-yellow-300";
    editBtn.textContent = "Edit";

    action.append(deleteBtn, editBtn);
    article.append(info, action);

    section.appendChild(article);
  });
}

function deleteContacts() {
  console.log("salmm aziz");
}

function editContacts() {
  console.log("salmm aziz");
}

function addedData() {
  const article = document.createElement("article");
  article.className = "contact w-[90%] bg-gray-500 flex";
  article.innerHTML = `
  <div class="info flex flex-col p-2 mt-2">
  <div class="name-user">
    <strong class="font-[16]">name:</strong
    ><input id="name" type="text" />
  </div>
  <div class="phone-user">
    <strong class="font-[14]">PhoneNumber:</strong
    ><input id="phone" type="text" />
  </div>
  <div class="email-user">
    <strong class="font-[14]">email:</strong
    ><input id="email" type="text" />
  </div>
</div>
<div class="action flex items-center justify-center gap-4 w-full">
  <button class="bg-yellow-300" onclick="getInputValue(event)">Save</button>
</div>
  `;

  section.append(article);
}

function getInputValue(event) {
  const parent = event.target.closest("article").children[0];

  const name = parent.children[0].children[1];
  const phoneNumber = parent.children[1].children[1];
  const email = parent.children[2].children[1];

  const information = {
    name: name.value,
    phoneNumber: phoneNumber.value,
    email: email.value,
  };

  //   const data = JSON.parse(localStorage.getItem("data"));

  if (!data) {
    const data = [];
    // localStorage.setItem("data", JSON.stringify(data));
    // const data = JSON.parse(localStorage.getItem("data"));
    // renderContacts(data);
  }

  data.push(information);
  console.log(data, information);
  localStorage.setItem("data", JSON.stringify(data));
  //   const arr = ["sib"];
  //   localStorage.setItem("data", "sib");
  renderContacts(JSON.parse(localStorage.getItem("data")));
}
// localStorage.removeItem("data");

// const data = [];
// console.log(data);

const data = JSON.parse(localStorage.getItem("data"));
renderContacts(data);
