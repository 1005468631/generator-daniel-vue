const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Component name',
                default: 'MyComponent'
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        this.fs.copyTpl(
            this.templatePath('index.vue'),
            this.destinationPath(`src/components/${this.answers.name}.vue`),
            this.answers,
        )
    }
}