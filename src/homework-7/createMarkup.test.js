import { createMarkup } from "./createMarkup";

describe("createMarkup", () => {
  let wrapper;
  let input;
  let button;

  function fakeClickButton(inputValue) {
    input.dispatchEvent(new Event("input"));
    input.value = inputValue;

    button.click();
  }

  function getParagrapghsContent() {
    const paragraphs = wrapper.querySelectorAll("p");

    return [...paragraphs].map((p) => p.innerText);
  }

  beforeEach(() => {
    wrapper = document.createElement("div");

    createMarkup(wrapper);

    input = wrapper.querySelector("input");
    button = wrapper.querySelector("button");
  });

  it(`is function`, () => {
    expect(createMarkup).toBeInstanceOf(Function);
  });

  it(`creates markup`, () => {
    const paragraphs = wrapper.querySelectorAll("p");

    expect(wrapper.querySelector("input")).toBeTruthy();
    expect(button).toBeTruthy();
    expect(button.innerText).toBe("add");
    expect(button.hidden).toBeTruthy();

    expect(paragraphs.length).toBe(3);
    expect(getParagrapghsContent()).toEqual(["1", "2", "3"]);
  });

  it(`show or hide button if input has value`, () => {
    input.value = Math.random();
    input.dispatchEvent(new Event("input"));

    expect(button.hidden).toBeFalsy();
  });

  it(`adds paragraph on button click`, () => {
    const paragraphValue = Math.random();

    fakeClickButton(paragraphValue);

    expect(getParagrapghsContent()).toEqual([
      "1",
      "2",
      "3",
      `${paragraphValue}`,
    ]);
    expect(input.value).toBe("");
    expect(button.hidden).toBeTruthy();
  });

  it(`removes first paragraph if count of paragraph greater than 5`, () => {
    fakeClickButton(Math.random());
    fakeClickButton(Math.random());
    fakeClickButton(Math.random());

    const paragraphs = wrapper.querySelectorAll("p");

    expect(paragraphs.length).toBeLessThanOrEqual(5);
  });
});
