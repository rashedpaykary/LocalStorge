const section = document.querySelector("section");

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

/* <article class="contact w-[90%] bg-gray-500 flex">
<div class="info flex flex-col text-white p-2 mt-2">
  <div class="name-user">
    <strong class="font-[16]">name:</strong><span></span>
  </div>
  <div class="phone-user">
    <strong class="font-[14]">PhoneNumber:</strong><span></span>
  </div>
  <div class="email-user">
    <strong class="font-[14]">email:</strong><span></span>
  </div>
</div>
<div class="action flex items-center justify-center gap-4 w-full">
  <button class="bg-green-500">Delete</button>
  <button class="bg-yellow-300">Edit</button>
</div>
</article> */

const data = JSON.parse(localStorage.getItem("data"));
renderContacts(data);
console.log(data);
