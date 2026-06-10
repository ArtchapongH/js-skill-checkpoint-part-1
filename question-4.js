// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let minQty;
let minQtyProduct;

for(let index in inventory){
  if(index==0){
    minQty = inventory[index].quantity;
    minQtyProduct = inventory[index].name;
  }else{
    if(minQty>inventory[index].quantity){
      minQty = inventory[index].quantity;
      minQtyProduct = inventory[index].name
    };
  };
};

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQtyProduct} ซึ่งมี ${minQty} ชิ้น`)