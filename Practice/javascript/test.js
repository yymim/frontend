document.addEventListener('DOMContentLoaded', 
function() {
  let parentDiv = document.getElementById('parentDiv');
  let childButton = document.getElementById('childButton');

  parentDiv.addEventListener('click', function()
  {
    console.log('parent Div Capturing');
  });

  childButton.addEventListener('click', function(e)
  {
    console.log('Child Button Capturing');
    e.stopPropagation();
  });

})