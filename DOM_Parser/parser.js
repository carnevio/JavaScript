var result = "";

function parseNode(startNode) {
  var node = startNode;

  while (node) {
    result += "<tr><td>" + node.nodeType + "</td><td>" + node.nodeName + "</td><td>" + node.nodeValue + "</td><td>" + node.textContent + "</td>";   
    
    
    for (var i = 0; i < node.childNodes.length; i++) {
      parseNode(node.childNodes[i]);
    }

    node = node.nextSibling;

    return (
      "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" +
      result +
      "</table>"
    );
  }
}
