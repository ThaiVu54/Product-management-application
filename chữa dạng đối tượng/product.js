class Product {
    // tên, giá, mô tả sp
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
    setName(newName) {
        this.name = newName;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
}