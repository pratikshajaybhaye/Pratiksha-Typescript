interface IProduct{

    // all the method are abstractn method in interface
    // all methods from interfaces from default public

     id : number;
     name : string;
     description: string;
     price: number;
     display(): void;  // by default property
}

var objProduct : IProduct = {
    id: 101,
    name: "Iphone",
    description: "It's Awesome",
    price: 100000,
    display: function (): void {
        console.log(this.id + " " + this.name);
    }
}

objProduct.display();
