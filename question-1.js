// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

// 1) เพิ่ม Object ใหม่เข้าไปใน myTodo ซึ่งมี id เป็น 5 และมี todo เป็น "Walk the dog"

let newId = myTodo.length + 1;

newTask = {
  id: newId,
  todo: "Walk the dog"
}

myTodo.push(newTask);


// 2) แก้ไขชื่อ Object ที่มี id เป็น 4 เพื่อให้ todo ของ Object นั้นมีค่าเป็น "Go to the gym"

for(let task of myTodo){
  if(task.id === 4){
    task.todo = "Go to the gym"
  };
};


// 3) ลบ Object สุดท้ายใน Array ออก

myTodo.pop()


// 4) นำ myTodo มาแสดงบนหน้าจอ Console

console.log(myTodo);
console.log("\n")


// 5) ให้นำข้อมูลใน Object สุดท้ายมาแสดงบนหน้าจอ Console ในรูปแบบ
// "To-do id: <ค่าของ id>, <ค่าของ todo>" (ห้าม Hard-Code ค่าเข้าไปใน String โดยตรง)

let lastIndex = myTodo.length-1;
console.log(`To-do id: ${myTodo[lastIndex].id}, ${myTodo[lastIndex].todo}` )