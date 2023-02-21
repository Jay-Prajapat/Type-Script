"use strict";
function onSubmit() {
    var prodData;
    if (localStorage.getItem("prodData") == null) {
        prodData = [];
    }
    else {
        //@ts-ignore: object is possibly 'null'
        prodData = JSON.parse(localStorage.getItem("prodData"));
    }
    if (validateData()) {
        const fileEl = document.getElementById("image");
        const fr = new FileReader();
        //@ts-ignore: object is possibly 'null'
        fr.readAsDataURL(fileEl.files[0]);
        fr.addEventListener("load", () => {
            prodData.push({
                prodId: document.getElementById("prodId").value,
                name: document.getElementById("name").value,
                image: fr.result,
                price: document.getElementById("price").value,
                description: document.getElementById("description").value,
            });
            localStorage.setItem("prodData", JSON.stringify(prodData));
        });
    }
}
function changeStyle(idName1, idName2) {
    document.getElementById(idName1).style.display = "block";
    document.getElementById(idName2).style.border = "solid red";
}
function validateData() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let id = document.getElementById("prodId").value;
    let str = parseFloat(document.getElementById("prodId").value);
    //@ts-ignore: object is possibly 'null'
    let img = document.getElementById("image").files[0];
    let len = str.toString().length;
    if (id == "") {
        changeStyle("pId", "prodId");
        document.getElementById("pId").innerHTML = "Product Id is required !!";
        return false;
    }
    if (len != 8) {
        changeStyle("pId", "prodId");
        document.getElementById("pId").innerHTML =
            "Product Id is exactly 8 character.";
        return false;
    }
    if (isNaN(str)) {
        changeStyle("pId", "prodId");
        document.getElementById("pId").innerHTML =
            "Product Id should contain only number.";
        return false;
    }
    if (name == "") {
        changeStyle("pName", "name");
        document.getElementById("pName").innerHTML = "Product name is required !!";
        return false;
    }
    if (img == null) {
        changeStyle("pImage", "image");
        document.getElementById("pImage").innerHTML = "Product Image is required !!";
        return false;
    }
    if (price == "") {
        changeStyle("pPrice", "price");
        document.getElementById("pPrice").innerHTML =
            "Product price is required !!";
        return false;
    }
    return true;
}
function searchById() {
    let id = document.getElementById("search");
    //@ts-ignore: object is possibly 'null'
    let prodData = JSON.parse(localStorage.getItem("prodData"));
    let html = ``;
    prodData.forEach((element, index) => {
        if (element.prodId == id.value ||
            element.name.toLowerCase().includes(id.value.toLowerCase())) {
            html += `
          <div class="column">
            <div class="card">
              <h3>${element.name}</h3>
              <img src="${element.image}" alt="image">
              <p class="id">${element.prodId}</p>
              <p class="price">&#8377 ${element.price}</p>
              <p class="desc">${element.description}</p>
              <button type="button" onclick="deleteData(${index})" class="btn btn-danger">
            Delete
          </button>
          <button type="button" onclick="edit(${index})" class="btn btn-info">
            Edit
          </button>
            </div>
          </div>
          `;
            document.querySelector("#insertData").innerHTML = html;
        }
    });
    id.value = "";
}
function sortByNameAsc() {
    //@ts-ignore: object is possibly 'null'
    let prodData = JSON.parse(localStorage.getItem("prodData"));
    document.getElementById("sortByName").innerHTML = `<button onclick="sortByNameDes()"><i class="fa fa-arrow-up"></i> Product name</button>`;
    prodData.sort((a, b) => {
        let str1 = a.name.toLowerCase();
        let str2 = b.name.toLowerCase();
        if (str1 < str2) {
            return -1;
        }
        if (str1 > str2) {
            return 1;
        }
        return 0;
    });
    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}
function sortByNameDes() {
    //@ts-ignore: object is possibly 'null'
    let prodData = JSON.parse(localStorage.getItem("prodData"));
    document.getElementById("sortByName").innerHTML = `<button onclick="sortByNameAsc()"><i class="fa">&#xf063;</i> Product name</button>`;
    prodData.sort((a, b) => {
        let str1 = a.name.toLowerCase();
        let str2 = b.name.toLowerCase();
        if (str1 < str2) {
            return 1;
        }
        if (str1 > str2) {
            return -1;
        }
        return 0;
    });
    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}
function sortByPriceAsc() {
    //@ts-ignore: object is possibly 'null'
    let prodData = JSON.parse(localStorage.getItem("prodData"));
    document.getElementById("sortByprice").innerHTML = `<button onclick="sortByPriceDes()"><i class="fa fa-arrow-up"></i> Product Price</button>`;
    prodData.sort((a, b) => {
        let str1 = a.price;
        let str2 = b.price;
        return str1 - str2;
    });
    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}
function sortByPriceDes() {
    //@ts-ignore: object is possibly 'null'
    let prodData = JSON.parse(localStorage.getItem("prodData"));
    document.getElementById("sortByprice").innerHTML = `<button onclick="sortByPriceAsc()"><i class="fa">&#xf063;</i> Product Price</button>`;
    prodData.sort((a, b) => {
        let str1 = a.price;
        let str2 = b.price;
        return str2 - str1;
    });
    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}
window.onload = () => showData();
function validateID(data) {
    let isValidate = true;
    data.forEach((item) => {
        if (item.prodId == document.getElementById("prodId").value &&
            document.getElementById("prodId").value != null) {
            isValidate = false;
        }
    });
    return isValidate;
}
function showData() {
    let html = ``;
    var prodData;
    if (localStorage.getItem("prodData") == null) {
        prodData = [];
    }
    else {
        //@ts-ignore: object is possibly 'null'
        prodData = JSON.parse(localStorage.getItem("prodData"));
    }
    prodData.forEach((item, index) => {
        html += `
          <div class="column">
            <div class="card">
              <h3>${item.name}</h3>
              <img src="${item.image}" alt="image">
              <p class="id">${item.prodId}</p>
              <p class="price">&#8377 ${item.price}</p>
              <p class="desc">${item.description}</p>
              <button type="button" onclick="deleteData(${index})" class="btn btn-danger">
            Delete
          </button>
          <button type="button" onclick="edit(${index})" class="btn btn-warning">
            Edit
          </button>
            </div>
          </div>
          `;
    });
    document.querySelector("#insertData").innerHTML = html;
}
function deleteData(index) {
    //@ts-ignore: object is possibly 'null'
    let prodData = JSON.parse(localStorage.getItem("prodData"));
    prodData.splice(index, 1);
    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}
function edit(index) {
    //@ts-ignore: object is possibly 'null'
    let prodData = JSON.parse(localStorage.getItem("prodData"));
    document.getElementById("prodId").value = prodData[index].prodId;
    document.getElementById("name").value = prodData[index].name;
    document.getElementById("price").value = prodData[index].price;
    document.getElementById("description").value = prodData[index].description;
    document.getElementById("prodId").disabled = prodData[index].prodId;
    document.getElementById("update").style.display = "block";
    document.getElementById("add").style.display = "none";
    document.querySelector("#update").onclick = function () {
        let name = document.getElementById("name").value;
        let price = document.getElementById("price").value;
        let description = document.getElementById("description").value;
        //@ts-ignore: object is possibly 'null'
        let fileEl = document.getElementById("image").files[0];
        if (fileEl != undefined) {
            const fr = new FileReader();
            fr.readAsDataURL(fileEl);
            fr.addEventListener("load", () => {
                prodData[index].name = name;
                prodData[index].price = price;
                prodData[index].description = description;
                prodData[index].image = fr.result;
                localStorage.setItem("prodData", JSON.stringify(prodData));
                showData();
            });
        }
        else {
            prodData[index].name = name;
            prodData[index].price = price;
            prodData[index].description = description;
            localStorage.setItem("prodData", JSON.stringify(prodData));
            showData();
        }
        document.getElementById("prodId").value = "";
        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("description").value = "";
        document.getElementById("prodId").disabled = false;
        document.getElementById("update").style.display = "none";
        document.getElementById("add").style.display = "block";
    };
}
