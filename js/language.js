/**
  *  Sets the specified modal to be displayed.
  *  Adds in event listener for clicking off modal to close it.
  */
function modalOpen(modalName) {
  modal = document.getElementById(modalName);
  modal.style.display = "block";
  
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}

/**
  * Sets the specified modal to be hidden.
  */
function modalClose(modalName) {
  document.getElementById(modalName).style.display = "none";
}