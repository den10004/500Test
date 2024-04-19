let details = document.querySelectorAll("details");
for (i = 0; i < details.length; i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  let details = event.target.parentNode.children;
  for (i = 0; i < details.length; i++) {
    if (
      details[i].tagName != "DETAILS" ||
      !details[i].hasAttribute("open") ||
      event.target == details[i]
    )
      continue;
    details[i].removeAttribute("open");
  }
}

let detaiHeader = document.querySelector(".detail");
for (i = 0; i < detaiHeader.length; i++) {
  detaiHeader[i].addEventListener("toggle", accordion);
}

function accordion(event) {
  if (!event.target.open) return;
  let detaiHeader = event.target.parentNode.children;

  for (i = 0; i < detaiHeader.length; i++) {
    if (
      detaiHeader[i].tagName != "DETAILS" ||
      !detaiHeader[i].hasAttribute("open") ||
      event.target == detaiHeader[i]
    )
      continue;
    detaiHeader[i].removeAttribute("open");
  }
}
