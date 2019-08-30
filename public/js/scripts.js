function toggleDisplay(id) {

  if (document.getElementById(id).style.display == 'none') {
    document.getElementById(id).style.display = 'inline';
  } else {
    document.getElementById(id).style.display = 'none';
  }

  return false;

}


/*
function toggleDisplay(id) {

  var answerStyle = document.getElementById(id).style.display;

  if (answerStyle == 'none') {
    answerStyle = 'inline';
  } else {
    answerStyle = 'none';
  }

}
*/
