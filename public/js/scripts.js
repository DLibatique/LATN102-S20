function toggleDisplay(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'inline' : 'none';
}

function toggleDisplayChart(x) {
  const el = document.getElementsByClassName(x);

  for (var i = 0; i < el.length; i++){
          el[i].style.display = el[i].style.display === 'none' ? 'table-row-group' : 'none';
      }
}
