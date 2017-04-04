// Generated from Grammar.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GrammarParser.
function GrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GrammarListener.prototype.constructor = GrammarListener;

// Enter a parse tree produced by GrammarParser#program.
GrammarListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#program.
GrammarListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#definition.
GrammarListener.prototype.enterDefinition = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#definition.
GrammarListener.prototype.exitDefinition = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#functionDefinition.
GrammarListener.prototype.enterFunctionDefinition = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#functionDefinition.
GrammarListener.prototype.exitFunctionDefinition = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#functionParameters.
GrammarListener.prototype.enterFunctionParameters = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#functionParameters.
GrammarListener.prototype.exitFunctionParameters = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#functionParameter.
GrammarListener.prototype.enterFunctionParameter = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#functionParameter.
GrammarListener.prototype.exitFunctionParameter = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#variableDefinition.
GrammarListener.prototype.enterVariableDefinition = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#variableDefinition.
GrammarListener.prototype.exitVariableDefinition = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#block.
GrammarListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#block.
GrammarListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#statement.
GrammarListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#statement.
GrammarListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#condition.
GrammarListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#condition.
GrammarListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#ifStatement.
GrammarListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#ifStatement.
GrammarListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#whileStatement.
GrammarListener.prototype.enterWhileStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#whileStatement.
GrammarListener.prototype.exitWhileStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#returnStatement.
GrammarListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#returnStatement.
GrammarListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#valueType.
GrammarListener.prototype.enterValueType = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#valueType.
GrammarListener.prototype.exitValueType = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#expressionList.
GrammarListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#expressionList.
GrammarListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#expression.
GrammarListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#expression.
GrammarListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#constant.
GrammarListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#constant.
GrammarListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#numberToken.
GrammarListener.prototype.enterNumberToken = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#numberToken.
GrammarListener.prototype.exitNumberToken = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#boolConstToken.
GrammarListener.prototype.enterBoolConstToken = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#boolConstToken.
GrammarListener.prototype.exitBoolConstToken = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#charConstToken.
GrammarListener.prototype.enterCharConstToken = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#charConstToken.
GrammarListener.prototype.exitCharConstToken = function(ctx) {
};


// Enter a parse tree produced by GrammarParser#stringConstToken.
GrammarListener.prototype.enterStringConstToken = function(ctx) {
};

// Exit a parse tree produced by GrammarParser#stringConstToken.
GrammarListener.prototype.exitStringConstToken = function(ctx) {
};



exports.GrammarListener = GrammarListener;