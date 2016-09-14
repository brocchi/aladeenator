function init() {

  // Get page body
  var newBody = document.body.innerHTML;

  // Change Words
  newBody = aladeenator(newBody);

  // Replace body
  document.body.innerHTML = newBody;
}


function aladeenator(body) {

  // Get aladeenList ande replace all the match expressions
  aladeenList.forEach(aladeenWord => {

    var regex = new RegExp(" " + aladeenWord + " ", "gi");

    body = body.replace(regex, " Aladeen ");

  })

  return body;
}

init();