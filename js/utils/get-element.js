const getElement = (HtmlString) => {
  const element = document.createElement(`div`);
  element.innerHTML = HtmlString;
  return element;
};

export default getElement;
