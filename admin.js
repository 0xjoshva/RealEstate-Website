//change badge number when items added or removed
document.getElementsByClassName("badge").innerHTML = `${arrProperties.length}`




//id of tasks
  for (var i = 0; i < arrProperties.length; i++) {
    console.log(i); }
  //get index
  let id = i;


//delete function
function delProperty(id) {
    property = property.filter(property => {
        property.id === id;
    })

    property = property.splice(index, 1)

}


const newTask = document.querySelector("#taskInput").value;

  