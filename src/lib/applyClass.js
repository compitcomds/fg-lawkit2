export default function applyThemeClasses(htmlString, classMap) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  for (const tag in classMap) {
    const classList = classMap[tag].split(' ');
    tempDiv.querySelectorAll(tag).forEach(el => {
      el.classList.add(...classList);
    });
  }
  return tempDiv.innerHTML;
}
