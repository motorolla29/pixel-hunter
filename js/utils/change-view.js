const changeView = (display) => {
  const mainBlock = document.querySelector(`#main`);

  mainBlock.innerHTML = ``;
  mainBlock.appendChild(display);
};

export default changeView;

