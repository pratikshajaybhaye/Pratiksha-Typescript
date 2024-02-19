var objProduct = {
    id: 101,
    name: "Iphone",
    description: "It's Awesome",
    price: 100000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
objProduct.display();
