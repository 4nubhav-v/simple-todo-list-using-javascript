// let input_user=prompt("What would you like to do ? ").toLowerCase;
// while (input_user !=  "quit"){
//     let list=[];
//     let userInput=prompt("Enter command ").toLowerCase;
//     if (userInput === "list"){
//         alert("hello world");
//     }
//     else if (userInput === "new") {
//         let newList = prompt("Enter the new list ");
//         list = list.push(newList);
//     }
//     else if (userInput === "delete") {
//         let deleteList = parseInt(prompt("Enter the position of the list to be deleted "));
//         list =list.slice(deleteList);
//     }
//     else if (userInput === "quit"){
//         break;
//     }
// }
let input_user="";
const list=["helllo","world"];
while(input_user !== "quit" || input_user !== "q"){
    input_user=prompt("Enter something or Type 'quit/q' to Quit");
    if (input_user === "list"){
        console.log("***************");
        for (let i =0;i<list.length;i++){
            console.log(`${i} : ${list[i]}`);
        }
        console.log("***************");
    }
    else if(input_user === "new"){
        const newEle=prompt("Enter the new todo ");
        list.push(newEle);
        console.log(`"${newEle}" was added to Todo List `)
    }
    else if (input_user === "delete"){
        const deleteEle=parseInt(prompt("Enter the index of the element to be deleted"));
        if (deleteEle < list.length && deleteEle > -1){
            console.log(`"${list[deleteEle]}" was removed in Todo List `);
            list.splice(deleteEle,1);
        }
        else {
            alert("Invalid Index");
        }
    }
}
console.log("ok u quit")