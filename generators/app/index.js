const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        const template = [
            '.gitignore',
            'index.html',
            'package.json',
            'README.md',
            'tsconfig.json',
            'tsconfig.node.json',
            'vite.config.ts',
            'public/vite.svg',
            'src/App.vue',
            'src/main.ts',
            'src/style.css',
            'src/vite-env.d.ts',
            'src/assets/vue.svg',
            'src/components/HelloWorld.vue',
        ]
        template.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers,
            )
        })

    }
}