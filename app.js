// Hey Everyone!
//
// Here is your week 2 assessment challenge!
// When the page loads, have a button on the DOM that says 'generate'. Upon clicking on that button,
// append a new container onto the DOM. That container should have two buttons, one that reads 'delete',
// the other that reads 'change'. Additionally, there should be text that provides a number. The number
// should be the number of times the 'generate' button has been clicked.
// The delete button should delete JUST the container that the button is in. The change button should
// change the background-color of the container to red. The default or 'normal' state of the background-color
// should be yellow. Clicking the button a second time should change it back to yellow, 3rd time red, 4th
// time yellow, etc.
// Do not add in anything additional beyond what is required. The goal is not to be clever here, it is
// simply to execute on the provided instructions.
// Once you are complete, check your work into a new repo and post it on GitHub.
// A friendly reminder that this is simply a way for us to see how you are individually doing with the
// technology. If this is no problem, great. If you are struggling with it, get done what you can and still
// submit. This assessment is not an indicator of how you will perform post Prime or a measure of overall
// success thus far. It just gives us an idea of where you are at.
// Just relax and show us what you know!
//
// Thanks and good luck!

$(function() {
  // Initialize variables
  var numGenerations = 0;

  // Load click listeners
  $('#generateButton').on('click', function() {
    numGenerations ++;
    updateNumGenerations();

    // Only add buttons if they're not there already
    if ($('body').children().last().attr("id")!='generatedContainer') {
      addMoreButtons()
    }
  })

  // Click listeners for buttons that don't exist yet
  // Attached to the body and id
  $('body').on('click', '#changeButton', function() {
    $('#generatedContainer').toggleClass('red');
  })

  $('body').on('click', '#deleteButton', function() {
    $('body').children().last().remove();
  })

  // Initialize functions
  function addMoreButtons() {
    // Add container
    $('body').append('<div id="generatedContainer" class="yellow"></div>')

    // Add buttons to container
    var changeButtonHtml = '<button id="changeButton">Change</button>';
    var deleteButtonHtml = '<button id="deleteButton">Delete</button>';
    $('#generatedContainer').append(changeButtonHtml);
    $('#generatedContainer').append(deleteButtonHtml);

    // Add number variable displaying number of clicks on generate button
    var numberHtml = '<p>' + numGenerations + '</p>'
    $('#generatedContainer').append(numberHtml);
  }

  // If generate button is clicked more than once in a row
  // Update number display anyway
  function updateNumGenerations() {
    $('#generatedContainer').children().last().text(numGenerations);
  }
})
