var client = new XMLHttpRequest();
client.open('GET', 'content/TEMPLATE.md');
client.onreadystatechange = function() {
  document.getElementById("content").innerHTML = client.responseText;
}
client.send();
