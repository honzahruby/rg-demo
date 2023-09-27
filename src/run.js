const appElement = document.getElementById("app");

export const run = (expression) => {
  const codeElement = document.createElement("pre");
  const nameElement = document.createElement("h2");
  nameElement.innerHTML = expression.toString().replace("() => ", "");

  try {
    codeElement.innerHTML = JSON.stringify(expression());
  } catch (e) {
    codeElement.innerHTML = e;
    codeElement.classList.add("error");
  } finally {
    appElement.appendChild(nameElement);
    appElement.appendChild(codeElement);
  }
};
