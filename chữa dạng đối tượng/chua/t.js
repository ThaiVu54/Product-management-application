let productList = [
    new Product("Note 10", 12000, "mo ta 1"),
    new Product("Note 11", 15000, "mo ta 2"),
    new Product("Note 12", 22000, "mo ta 3"),
];

function showAllProduct() {
    let content = "";
    let demo;
    for (let i = 0; i < productList.length; i++) {
        content += ' <tr>\n'
        '<td>' + productList[i].getName() + '< /td>\n' +
            '<td>' + productList.getPrice() + '</td>\n' +
            '< td >' + productList[i].getDescription() + '</td>\n' +
            '<button onclick="editProduct(' + i + ')">edit</button>\n' +
            '<button onclick="deleteProduct(' + i + ')">delete</button>\n' +
            '</td>'
        '</tr>'
    }
    document.getElementById('products').innerHTML = content;
    document.getElementById("sumOfProduct").innerText = productList.length + " sp";
    document.getElementById("newP").value = "";
}

showAllProduct();

function createNewProduct() {
    let newName = document.getElementById("newName").value;
    let newPrice = document.getElementById("newPrice").value;
    let newDescription = document.getElementById("newDescription").value;

    let newP = new productList(newName, newPrice, newDescription);
    productList.push(newP);
    showAllProduct()
}

function editProduct(index) {
    productList.splice(index, 1)
    showAllProduct();
}

function deleteProduct(index) {
    let newValue = prompt("nhap vao ten moi", productList[index]);
    productList[index] = newValue;
    showAllProduct();
}
let $a = [3, 4, 6];

class Product {
    constructor(_name, _price, _description) {
        this.name = _name;
        this.price = _price;
        this.description = _description;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.description;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    setName(newName) {
        this.name = newName;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
}
//!
//?
//*
//todo