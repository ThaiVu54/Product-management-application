//biến toàn cục
// let productList=["Iphone 11", "Iphone X", "Iphone 8", "Iphone XS", "Iphone 8 plus"];
let productList = [
    new Product("Note 10", 12000, "Mo ta 1"),
    new Product("Note 8", 9000, "Mo ta 2"),
    new Product("Note 9", 11000, "Mo ta 3"),
];
//ten ham: showAllProduct
//ds tham so: khong co:
//dl tra ve: khong co
//chuc nang: lap danh sach san pham, dien vao trong the co id products
function showAllProduct() {
    let content = "";
    let demo;
    for (let i = 0; i < productList.length; i++) {

        // demo+= 'so tiep theo la '+ i;
        // demo+= 'So tiep theo la '+ i + 'don vi';
        content += '<tr>\n' +
            '            <td>' + productList[i].getName() + '</td>\n' +
            '            <td>' + productList[i].getPrice() + '</td>\n' +
            '            <td>' + productList[i].getDescription() + '</td>\n' +
            '            <td><button onclick="editProduct(' + i + ')">sua</button></td>\n' +
            '            <td><button onclick="deleteProduct(' + i + ')">xoa</button></td>\n' +
            '        </tr>'
    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("sumOfProduct").innerText = productList.length + " sp";
}
showAllProduct();
//ten ham: creatNewProduct
//ds tham so: khong co:
//dl tra ve: khong co
//chuc nang:
//Lấy dữ liệu
// Push vào mảng
// hiển thị lại dữ liệu
function createNewProduct() {
    // let newP = prompt("Moi ban nhap ten sp moi");
    //lay du lieu
    let newName = document.getElementById("newName").value;
    let newPrice = document.getElementById("newPrice").value;
    let newDescription = document.getElementById("newDescription").value;
    // tao moi doi tuong
    let newP = new Product(newName, newPrice, newDescription);
    // push vao mang
    productList.push(newP);
    showAllProduct();
    document.getElementById("newP").value = "";
}
//ten ham: deleteProduct
//ds tham so: index
//dl tra ve: khong co
//chuc nang: xoa san pham theo index
// hien thi lai danh sach
function deleteProduct(index) {
    productList.splice(index, 1);
    showAllProduct();
}
//ten ham: editProduct
//ds tham so: index
//dl tra ve: khong co
//chuc nang: sua san pham theo index
//1. cho nguoi dung nhap vao sp moi
//2. gan lai sp cho sp cu
//3. hien thi lai danh sach

function editProduct(index) {
    //biến cục bộ
    let newValue = prompt("Moi ban nhap vao ten moi", productList[index]);
    productList[index] = newValue;
    showAllProduct();

}

let $a = [3, 4, 6];