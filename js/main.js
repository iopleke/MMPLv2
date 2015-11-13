var template = new XMLHttpRequest();
template.open('GET', 'content/TEMPLATE.md');

template.onreadystatechange = function() {
  var placeholder = template.responseText.replace(/\r?\n/g,'<br/>');
  var text = placeholder.replace("de063c99357e6675f1ba05b33635e044", "Title goes here");
  document.getElementById("content").innerHTML = text;
}
template.send();
