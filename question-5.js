// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode){
  
  let totAmount=0;
  for(let item of products){
    totAmount+=item.price*item.quantity;
  }

  if(promotionCode==="SALE20"){
    return totAmount*0.8;
  }else if(promotionCode==="SALE50"){
    return totAmount*0.5;
  }else{
    return totAmount;
  };

};

console.log(calculateTotalPrice(products,promotionCode));
