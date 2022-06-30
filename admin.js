//change badge number when items added or removed




// //id of tasks
//   for (var i = 0; i < arrProperties.length; i++) {
//     console.log(i); }
//   //get index
//   let id = i;


// //delete function
// function delProperty(id) {
//     property = property.filter(property => {
//         property.id === id;
//     })

//     property = property.splice(index, 1)

// }

function addItem() {
  let property = {
    id: property.length + 1,
     imageURL : document.querySelector("#imageURL-add").value,
     title : document.querySelector("#title-add").value,
    address : document.querySelector("#address-add").value,
     bedrooms: document.querySelector("#bed-add").value,
     bathrooms : document.querySelector("#bath-add").value,
     garages : document.querySelector("#garage-add").value,
     size: document.querySelector("#size-add").value,
     price : document.querySelector("#price-add").value,
     category : document.querySelector("#category-select-add").value,
  };
  houses.push(property);
  showTable(houses);
  console.log(houses);
}