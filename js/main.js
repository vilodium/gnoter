function saver() {
  var doc = document.getElementById('textf');
  save(doc.value);
};

function save(doc) {
  document.cookie = doc;
}

function loadSavedDoc() {
  var doc = document.getElementById('textf');
  doc.innerHTML = document.cookie;
}
