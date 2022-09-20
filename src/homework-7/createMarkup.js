export function createMarkup(element) {
  function addParagraph(content) {
    const paragraph = document.createElement("p");
    paragraph.innerText = content;
    element.append(paragraph);
  }

  const input = document.createElement("input");
  const button = document.createElement("button");
  button.hidden = true;
  button.innerText = "add";

  input.addEventListener("input", () => {
    button.hidden = !input.value;
  });

  button.addEventListener("click", () => {
    addParagraph(input.value);

    const paragraphs = element.querySelectorAll("p");

    if (paragraphs.length > 5) {
      element.removeChild(paragraphs[0]);
    }

    input.value = "";
    input.dispatchEvent(new Event("input"));
  });

  element.append(input, button);

  addParagraph("1");
  addParagraph("2");
  addParagraph("3");

  document.body.append(element);
}
