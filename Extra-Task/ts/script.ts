function onSubmit() {
    var prodData:any;

    if (localStorage.getItem("prodData") == null) {
        prodData = [];
    } else {
    //@ts-ignore: object is possibly 'null'

        prodData = JSON.parse(localStorage.getItem("prodData"));
    }
    if (validateData()) {
        const fileEl : HTMLElement | null = document.getElementById("image");
        const fr:FileReader = new FileReader();
    //@ts-ignore: object is possibly 'null'
        fr.readAsDataURL(fileEl.files[0]);

        fr.addEventListener("load", () => {
            prodData.push({
                prodId: (<HTMLInputElement>document.getElementById("prodId")).value,
                name: (<HTMLInputElement>document.getElementById("name")).value,
                image: fr.result,
                price: (<HTMLInputElement>document.getElementById("price")).value,
                description: (<HTMLInputElement>document.getElementById("description")).value,
            });

            localStorage.setItem("prodData", JSON.stringify(prodData));
        });
    }
}

function changeStyle(idName1 : string, idName2:string) {
    (<HTMLInputElement>document.getElementById(idName1)).style.display = "block";
    (<HTMLInputElement>document.getElementById(idName2)).style.border = "solid red";
}

function validateData() {
    let name:string = (<HTMLInputElement>document.getElementById("name")).value;
    let price:string = (<HTMLInputElement>document.getElementById("price")).value;
    let id:string = (<HTMLInputElement>document.getElementById("prodId")).value;
    let str:number = parseFloat((<HTMLInputElement>document.getElementById("prodId")).value);
    //@ts-ignore: object is possibly 'null'
    let img:File = (<HTMLInputElement>document.getElementById("image")).files[0];

    let len:number = str.toString().length;

    if (id == "") {
        changeStyle("pId", "prodId");
        (<HTMLInputElement>document.getElementById("pId")).innerHTML = "Product Id is required !!";
        return false;
    }
    if (len != 8) {
        changeStyle("pId", "prodId");
        (<HTMLInputElement>document.getElementById("pId")).innerHTML =
            "Product Id is exactly 8 character.";
        return false;
    }
    if (isNaN(str)) {
        changeStyle("pId", "prodId");
        (<HTMLInputElement>document.getElementById("pId")).innerHTML =
            "Product Id should contain only number.";
        return false;
    }

    if (name == "") {
        changeStyle("pName", "name");
        (<HTMLInputElement>document.getElementById("pName")).innerHTML = "Product name is required !!";
        return false;
    }
    if (img == null) {
        changeStyle("pImage", "image");
        (<HTMLInputElement>document.getElementById("pImage")).innerHTML = "Product Image is required !!";
        return false;
    }
    if (price == "") {
        changeStyle("pPrice", "price");
        (<HTMLInputElement>document.getElementById("pPrice")).innerHTML =
            "Product price is required !!";
        return false;
    }

    return true;
}

function searchById() {
    let id:HTMLElement = document.getElementById("search")!;
    //@ts-ignore: object is possibly 'null'

    let prodData:string[] = JSON.parse(localStorage.getItem("prodData"));
    let html:string = ``;
    prodData.forEach((element:any, index:number) => {
        if (
            element.prodId == (<HTMLInputElement>id).value ||
            element.name.toLowerCase().includes((<HTMLInputElement>id).value.toLowerCase())
        ) {
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
            (<HTMLInputElement>document.querySelector("#insertData")).innerHTML = html;
        }
    });
    (<HTMLInputElement>id).value = "";
}

function sortByNameAsc() {
    //@ts-ignore: object is possibly 'null'

    let prodData:string[] = JSON.parse(localStorage.getItem("prodData"));

    (<HTMLInputElement>document.getElementById(
        "sortByName"
    )).innerHTML = `<button onclick="sortByNameDes()"><i class="fa fa-arrow-up"></i> Product name</button>`;

    prodData.sort((a:any , b:any) => {
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

    let prodData:string[] = JSON.parse(localStorage.getItem("prodData"));

    (<HTMLInputElement>document.getElementById(
        "sortByName"
    )).innerHTML = `<button onclick="sortByNameAsc()"><i class="fa">&#xf063;</i> Product name</button>`;

    prodData.sort((a:any, b:any) => {
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
    
    let prodData:string[] = JSON.parse(localStorage.getItem("prodData"));

    (<HTMLInputElement>document.getElementById("sortByprice")).innerHTML = `<button onclick="sortByPriceDes()"><i class="fa fa-arrow-up"></i> Product Price</button>`;

    prodData.sort((a:any, b:any) => {
        let str1 = a.price;
        let str2 = b.price;
        return str1 - str2;
    });

    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}

function sortByPriceDes() {
    //@ts-ignore: object is possibly 'null'

    let prodData:string[] = JSON.parse(localStorage.getItem("prodData"));

    (<HTMLInputElement>document.getElementById(
        "sortByprice"
    )).innerHTML = `<button onclick="sortByPriceAsc()"><i class="fa">&#xf063;</i> Product Price</button>`;

    prodData.sort((a:any, b:any) => {
        let str1 = a.price;
        let str2 = b.price;
        return str2 - str1;
    });

    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}

window.onload = () => showData();

function validateID(data:any) {
    let isValidate:boolean = true;
    data.forEach((item:any) => {
        if (
            item.prodId == (<HTMLInputElement>document.getElementById("prodId")).value &&
            (<HTMLInputElement>document.getElementById("prodId")).value != null
        ) {
            isValidate = false;
        }
    });
    return isValidate;
}

function showData() {
    let html:string = ``;

    var prodData:string[];

    if (localStorage.getItem("prodData") == null) {
        prodData = [];
    } else {
    //@ts-ignore: object is possibly 'null'

        prodData = JSON.parse(localStorage.getItem("prodData"));
    }

    prodData.forEach((item:any, index:number) => {
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
    (document.querySelector("#insertData") as HTMLInputElement).innerHTML = html;
}

function deleteData(index:number) {
    //@ts-ignore: object is possibly 'null'

    let prodData:string[] = JSON.parse(localStorage.getItem("prodData"));

    prodData.splice(index, 1);
    localStorage.setItem("prodData", JSON.stringify(prodData));
    showData();
}
function edit(index:number) {
    //@ts-ignore: object is possibly 'null'

    let prodData:any = JSON.parse(localStorage.getItem("prodData"));
    (<HTMLInputElement>document.getElementById("prodId")).value = prodData[index].prodId;
    (<HTMLInputElement>document.getElementById("name")).value = prodData[index].name;
    (<HTMLInputElement>document.getElementById("price")).value = prodData[index].price;
    (<HTMLInputElement>document.getElementById("description")).value = prodData[index].description;
    (<HTMLInputElement>document.getElementById("prodId")).disabled = prodData[index].prodId;

    (<HTMLInputElement>document.getElementById("update")).style.display = "block";
    (<HTMLInputElement>document.getElementById("add")).style.display = "none";

    (document.querySelector("#update") as HTMLInputElement).onclick = function () {
        let name:string = (<HTMLInputElement>document.getElementById("name")).value;
        let price:string = (<HTMLInputElement>document.getElementById("price")).value;
        let description:string = (<HTMLInputElement>document.getElementById("description")).value;
        //@ts-ignore: object is possibly 'null'
        let fileEl:File = (<HTMLImageElement>document.getElementById("image")).files[0];
        if (fileEl != undefined) {
            const fr:FileReader = new FileReader();
            fr.readAsDataURL(fileEl);
            fr.addEventListener("load", () => {
                prodData[index].name = name;
                prodData[index].price = price;
                prodData[index].description = description;
                prodData[index].image = fr.result;

                localStorage.setItem("prodData", JSON.stringify(prodData));
                showData();
            });
        } else {
            prodData[index].name = name;
            prodData[index].price = price;
            prodData[index].description = description;

            localStorage.setItem("prodData", JSON.stringify(prodData));
            showData();
        }
        (<HTMLInputElement>document.getElementById("prodId")).value = "";
        (<HTMLInputElement>document.getElementById("name")).value = "";
        (<HTMLInputElement>document.getElementById("price")).value = "";
        (<HTMLInputElement>document.getElementById("description")).value = "";
        (<HTMLInputElement>document.getElementById("prodId")).disabled = false;

        (<HTMLInputElement>document.getElementById("update")).style.display = "none";
        (<HTMLInputElement>document.getElementById("add")).style.display = "block";
    };
}
