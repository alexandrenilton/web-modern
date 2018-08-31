const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence') //executar de forma serial

require('./gulpTasks/app') // nao precisa importar em nenhuma constantes, ele já amarzena e conhece tudo!
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if (util.env.production) {
        sequence('deps', 'app', )
    } else {
        sequence('deps', 'app', 'servidor')
    }
})


