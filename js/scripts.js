// Define the newItem function
function newItem() {
  let listItem = $("<li></li>");
  let listItemValue = $("#input").val();
  listItem.text(listItemValue);

  if (listItemValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(listItem);
  }

  function crossOut() {
    listItem.toggleClass("strike");
  }

  // Event listener for marking an item off the list
  listItem.on("dblclick", crossOut);

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.text("X");
  listItem.append(crossOutButton);

  function deleteListItem() {
    listItem.addClass("delete");
  }

  // Event listener for deleting an item from the list
  crossOutButton.on("click", deleteListItem);

  // Make list items sortable
  $("#list").sortable();
}
