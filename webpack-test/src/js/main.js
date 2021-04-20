// Webpack

function myModule() {
    this.hello = function () {
        console.log('hello');
    };
    this.goodby = function () {
        console.log('goodby');
    };
}

module.exports = myModule;