export default class Utils {
  static createDisplay(HtmlString) {
    const element = document.createElement(`div`);
    element.innerHTML = HtmlString;
    return element;
  }

  static changeView(display) {
    const mainBlock = document.querySelector(`#main`);

    mainBlock.innerHTML = ``;
    mainBlock.appendChild(display);
  }

  static getStatsIcons(data) {
    const gameStatsArr = [];
    data.forEach((el) => {
      gameStatsArr.push(`<li class="stats__result stats__result--${el}"></li>`);
    });

    return gameStatsArr;
  }
}
