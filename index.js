// just trying to check really

var fs = require('fs');
var antlr4 = require('antlr4');
var InputStream = require("./node_modules/antlr4/InputStream.js").InputStream;

var GrammarLexer = require('./grammar/GrammarLexer.js');
var GrammarParser = require('./grammar/GrammarParser.js');
var GrammarListener = require('./grammar/GrammarListener.js');


fs.readFile("test.txt", "utf8", function(err, data) {
    if (err) {
        return console.log(err);
    }

    var input = data;
    var chars = new InputStream(input, true);
    var lexer = new GrammarLexer.GrammarLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);

    var parser = new GrammarParser.GrammarParser(tokens);
    parser.buildParseTrees = true;
});
