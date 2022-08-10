/*
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-08-10 10:18:42
 * @LastEditTime: 2022-08-10 11:29:31
 */
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: '请输入项目名称',
                default: this.appname
            }
        ]).then((answers) => {
            this.answers = answers
        })
    }
    writing () {
        const templateList = [
            'public/favicon.ico',
            '.eslintrc.js',
            '.gitignore',
            '.prettierrc',
            'index.html',
            'package.json',
            'postcss.config.js',
            'README.md',
            'tailwind.config.js',
            'tsconfig.json',
            'tsconfig.node.json',
            'vite.config.ts',
            'yarn.lock',
            'src/assets/logo.png',
            'src/components/common/demo.tsx',
            'src/router/index.ts',
            'src/store/config/piniaPersistConfig.ts',
            'src/store/modules/common/index.ts',
            'src/store/modules/index.ts',
            'src/store/index.ts',
            'src/style/theme/index.scss',
            'src/style/theme/theme-cool.scss',
            'src/style/theme/theme-default.scss',
            'src/style/theme/theme-warm.scss',
            'src/style/tools/functions/_amcss.scss',
            'src/style/tools/functions/_convert.scss',
            'src/style/tools/functions/_decimal.scss',
            'src/style/tools/functions/_exponent.scss',
            'src/style/tools/functions/_leastSquaresFit.scss',
            'src/style/tools/functions/_linear-interpolation.scss',
            'src/style/tools/functions/_list-remove.scss',
            'src/style/tools/functions/_list-sort.scss',
            'src/style/tools/functions/_map-sort.scss',
            'src/style/tools/functions/_mixcolor.scss',
            'src/style/tools/functions/_number.scss',
            'src/style/tools/functions/_polygon.scss',
            'src/style/tools/functions/_strip-units.scss',
            'src/style/tools/functions/_unit-length.scss',
            'src/style/tools/functions/_z-index.scss',
            'src/style/tools/functions/README.md',
            'src/style/tools/mixins/_BEM.scss',
            'src/style/tools/mixins/_box-center.scss',
            'src/style/tools/mixins/_box-clamp.scss',
            'src/style/tools/mixins/_burger.scss',
            'src/style/tools/mixins/_calc.scss',
            'src/style/tools/mixins/_equal-parts.scss',
            'src/style/tools/mixins/_fade-text.scss',
            'src/style/tools/mixins/_flex-grid.scss',
            'src/style/tools/mixins/_fluid-ratio.scss',
            'src/style/tools/mixins/_full-width.scss',
            'src/style/tools/mixins/_haslines.scss',
            'src/style/tools/mixins/_HolyGrail-layout.scss',
            'src/style/tools/mixins/_plumber-box.scss',
            'src/style/tools/mixins/_plumber.scss',
            'src/style/tools/mixins/_position.scss',
            'src/style/index.scss',
            'src/style/tools/index.scss',
            'src/style/tools/mixins/README.md',
            'src/style/tools/mixins/_typographic.scss',
            'src/style/tools/mixins/_selector.scss',
            'src/style/tools/mixins/_sticky-footer.scss',
            'src/style/tools/mixins/_scrollbars.scss',
            'src/style/settings/var.scss',
            'src/style/base/index.scss',
            'src/views/home/file/index.vue',
            'src/views/home/home/index.vue',
            'src/views/home/router.ts',
            'src/views/user/list/index.vue',
            'src/views/user/mine/index.vue',
            'src/views/user/router.ts',
            'src/App.vue',
            'src/env.d.ts',
            'src/index.css',
            'src/main.ts',
        ]
        templateList.forEach((item) => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}