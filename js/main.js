var template = new XMLHttpRequest();
template.open('GET', 'content/TEMPLATE.md');

template.onreadystatechange = function() {
  var placeholder = template.responseText.replace(/\r?\n/g,'<br/>');

  var blocks = new XMLHttpRequest();
  blocks.open('GET', 'content/BLOCKS.md');
  blocks.onreadystatechange = function() {
    var titleMD5 = "de063c99357e6675f1ba05b33635e044";

    var blocksArray = blocks.responseText.split(/\r?\n/g);
    
    var titleIndex = blocksArray.indexOf(titleMD5);
    var title = blocks[titleIndex];
    var text = placeholder.replace(titleMD5, "test");
    document.getElementById("content").innerHTML = text;
  }
}
template.send();
