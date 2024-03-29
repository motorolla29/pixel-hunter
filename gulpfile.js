const del = require(`del`);
const gulp = require(`gulp`);
const sass = require("gulp-sass")(require("sass"));
const plumber = require(`gulp-plumber`);
const postcss = require(`gulp-postcss`);
const server = require(`browser-sync`).create();
const mqpacker = require(`css-mqpacker`);
const minify = require(`gulp-csso`);
const rename = require(`gulp-rename`);
const imagemin = require(`gulp-imagemin`);
const svgstore = require(`gulp-svgstore`);
const rollup = require(`gulp-better-rollup`);
const sourcemaps = require(`gulp-sourcemaps`);
const mocha = require(`gulp-mocha`);
const commonjs = require(`rollup-plugin-commonjs`);

gulp.task(`style`, () => {
  return gulp
    .src(`sass/style.scss`)
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([mqpacker({ sort: true })]))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream())
    .pipe(minify())
    .pipe(rename(`style.min.css`))
    .pipe(gulp.dest(`build/css`));
});

gulp.task(`sprite`, () => {
  return gulp
    .src(`img/sprite/*.svg`)
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename(`sprite.svg`))
    .pipe(gulp.dest(`build/img`));
});

gulp.task(`scripts`, () => {
  return gulp
    .src(`js/main.js`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rollup({}, `iife`))
    .pipe(sourcemaps.write(``))
    .pipe(gulp.dest(`build/js`));
});

gulp.task(`imagemin`, [`copy`], () => {
  return gulp
    .src(`build/img/**/*.{jpg,png,gif}`)
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true }),
      ])
    )
    .pipe(gulp.dest(`build/img`));
});

gulp.task(`copy-html`, () => {
  return gulp
    .src(`*.{html,ico}`)
    .pipe(gulp.dest(`build`))
    .pipe(server.stream());
});

gulp.task(`copy`, [`copy-html`, `scripts`, `style`, `sprite`], () => {
  return gulp
    .src([`fonts/**/*.{woff,woff2}`, `img/*.*`, `img/pics_for_questions/*.*`], {
      base: `.`,
    })
    .pipe(gulp.dest(`build`));
});

gulp.task(`clean`, () => {
  return del(`build`);
});

gulp.task(`js-watch`, [`scripts`], (done) => {
  server.reload();
  done();
});

gulp.task(`serve`, [`assemble`], () => {
  server.init({
    server: `./build`,
    notify: false,
    open: true,
    port: 3502,
    ui: false,
  });

  gulp.watch(`sass/**/*.{scss,sass}`, [`style`]);
  gulp.watch(`*.html`).on(`change`, (e) => {
    if (e.type !== `deleted`) {
      gulp.start(`copy-html`);
    }
  });
  gulp.watch(`js/**/*.js`, [`js-watch`]);
});

gulp.task(`assemble`, [`clean`], () => {
  gulp.start(`copy`, `style`);
});

gulp.task(`build`, [`assemble`], () => {
  gulp.start(`imagemin`);
});

gulp.task(`test`, function () {
  return gulp
    .src([`js/**/*.test.js`])
    .pipe(
      rollup(
        {
          plugins: [
            commonjs(), // Сообщает Rollup, что модули можно загружать из node_modules
          ],
        },
        `cjs`
      )
    ) // Выходной формат тестов — `CommonJS` модуль
    .pipe(gulp.dest(`build/test`))
    .pipe(
      mocha({
        reporter: `spec`, // Вид в котором я хочу отображать результаты тестирования
      })
    );
});
