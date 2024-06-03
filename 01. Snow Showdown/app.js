window.addEventListener("load", solve);

function solve() {
  let body = document.getElementsByClassName("body")[0];
  let main = document.getElementById("hero");

  let snowman = {
    name: document.getElementById("snowman-name"),
    height: document.getElementById("snowman-height"),
    location: document.getElementById("location"),
    creator: document.getElementById("creator-name"),
    specialAttribute: document.getElementById("special-attribute")
  }

  let snowball = document.querySelector("div .snowball ul");
  let snow = document.querySelector("div .snow ul");
  let backImg = document.getElementById("back-img");

  let addBtn = document.getElementsByClassName("add-btn")[0];
  addBtn.addEventListener("click", onAddHandler)

  function onAddHandler(e) {
    e.preventDefault()

    let name = snowman.name.value;
    let height = snowman.height.value;
    let location = snowman.location.value;
    let creator = snowman.creator.value;
    let specialAttribute = snowman.specialAttribute.value;

    if (!name || !height || !location || !creator || !specialAttribute) {
      return
    }

    let details = createPreview(name, height, location, creator, specialAttribute);

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    let editBtn = newElement("button", "Edit");
    editBtn.addEventListener("click", () => onEditHandler(name, height, location, creator, specialAttribute));
    editBtn.classList.add("edit-btn");
    btnContainer.appendChild(editBtn);

    let nextBtn = newElement("button", "Next");
    nextBtn.classList.add("next-btn");
    nextBtn.addEventListener("click", onNextHandler);
    btnContainer.appendChild(nextBtn);

    details.appendChild(btnContainer);
    snowball.appendChild(details);

    addBtn.parentElement.reset();
    addBtn.disabled = true;
  }


  function onEditHandler(name, height, location, creator, specialAttribute) {
    snowman.name.value = name;
    snowman.height.value = height;
    snowman.location.value = location;
    snowman.creator.value = creator;
    snowman.specialAttribute.value = specialAttribute;

    snowball.childNodes[0].remove();
    addBtn.disabled = false;
  }

  function onNextHandler() {
    let el = snowball.childNodes[0];
    el.childNodes[1].remove();

    let sendBtn = newElement("button", "Send");
    sendBtn.classList.add("send-btn");
    sendBtn.addEventListener("click", onSendHandler);
    el.childNodes[0].appendChild(sendBtn)

    el.classList.remove("snowman-info");
    el.classList.add("snowman-content")
    snow.appendChild(el);
  }

  function onSendHandler() {
    main.remove();
    backImg.removeAttribute("hidden");

    let backBtn = newElement("button", "Back");
    backBtn.classList.add("back-btn");
    backBtn.addEventListener("click", () => { window.location.reload() })
    body.appendChild(backBtn);
  }

  function createPreview(name, height, location, creator, specialAttribute) {
    let li = document.createElement("li");
    li.classList.add("snowman-info")
    let article = document.createElement("article");
    article.appendChild(newElement("p", `Name: ${name}`));
    article.appendChild(newElement("p", `Height: ${height}`));
    article.appendChild(newElement("p", `Location: ${location}`));
    article.appendChild(newElement("p", `Creator: ${creator}`));
    article.appendChild(newElement("p", `Attribute: ${specialAttribute}`));

    li.appendChild(article)
    return li;
  }

  function newElement(type, content) {
    let el = document.createElement(type)

    if (content) {
      el.textContent = content;
    }

    return el;
  }
}
