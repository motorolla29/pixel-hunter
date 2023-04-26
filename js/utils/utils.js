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

  static resizePhoto(frame, given) {
    const ratio = given.width / given.height;

    const actualWidth = ((frame.width / ratio) < frame.height)
      ? frame.width
      : frame.height * ratio;

    const actualHeight = ((frame.width / ratio) < frame.height)
      ? frame.width / ratio
      : frame.height;

    return {
      width: actualWidth,
      height: actualHeight
    };
  }
}
