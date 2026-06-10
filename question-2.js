// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

// 1) ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200

for(item of inventory){
  if (item.name === "Apple"){
    item.quantity=200;
  };
};


// 2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก

newProduct = {
  name: "Orange",
  price: 20,
  quantity:300
}

inventory.push(newProduct)


// 3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
let totAmount=0;
for(item of inventory){
  totAmount += item.price*item.quantity
};


console.log(inventory)
console.log("\n")
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totAmount} บาท`);

