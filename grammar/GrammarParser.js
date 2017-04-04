// Generated from Grammar.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var GrammarListener = require('./GrammarListener').GrammarListener;
var grammarFileName = "Grammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003$\u00c0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0007\u0002,\n\u0002\f\u0002",
    "\u000e\u0002/\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0005\u00035\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005@\n\u0005\f\u0005\u000e\u0005C\u000b\u0005\u0005\u0005E\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007V\n\u0007\u0003\b\u0003",
    "\b\u0007\bZ\n\b\f\b\u000e\b]\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\th\n\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0005\u000bs\n\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0007\u000f\u0082\n\u000f\f\u000f\u000e\u000f\u0085\u000b",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0090\n\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010\u00aa\n\u0010\u0003\u0010\u0007\u0010\u00ad\n\u0010\f\u0010",
    "\u000e\u0010\u00b0\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0005\u0011\u00b6\n\u0011\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0002\u0003\u001e\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(\u0002\u0007\u0003\u0002\u000e\u0011",
    "\u0003\u0002\u0012\u0013\u0003\u0002\u0014\u0016\u0003\u0002\u0017\u001a",
    "\u0003\u0002\u001b\u001c\u00c6\u0002-\u0003\u0002\u0002\u0002\u0004",
    "4\u0003\u0002\u0002\u0002\u00066\u0003\u0002\u0002\u0002\b;\u0003\u0002",
    "\u0002\u0002\nH\u0003\u0002\u0002\u0002\fU\u0003\u0002\u0002\u0002\u000e",
    "W\u0003\u0002\u0002\u0002\u0010g\u0003\u0002\u0002\u0002\u0012i\u0003",
    "\u0002\u0002\u0002\u0014m\u0003\u0002\u0002\u0002\u0016t\u0003\u0002",
    "\u0002\u0002\u0018x\u0003\u0002\u0002\u0002\u001a|\u0003\u0002\u0002",
    "\u0002\u001c~\u0003\u0002\u0002\u0002\u001e\u008f\u0003\u0002\u0002",
    "\u0002 \u00b5\u0003\u0002\u0002\u0002\"\u00b7\u0003\u0002\u0002\u0002",
    "$\u00b9\u0003\u0002\u0002\u0002&\u00bb\u0003\u0002\u0002\u0002(\u00bd",
    "\u0003\u0002\u0002\u0002*,\u0005\u0004\u0003\u0002+*\u0003\u0002\u0002",
    "\u0002,/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002.0\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u000201\u0007",
    "\u0002\u0002\u00031\u0003\u0003\u0002\u0002\u000225\u0005\u0006\u0004",
    "\u000235\u0005\f\u0007\u000242\u0003\u0002\u0002\u000243\u0003\u0002",
    "\u0002\u00025\u0005\u0003\u0002\u0002\u000267\u0005\u001a\u000e\u0002",
    "78\u0007 \u0002\u000289\u0005\b\u0005\u00029:\u0005\u000e\b\u0002:\u0007",
    "\u0003\u0002\u0002\u0002;D\u0007\u0003\u0002\u0002<A\u0005\n\u0006\u0002",
    "=>\u0007\u0004\u0002\u0002>@\u0005\n\u0006\u0002?=\u0003\u0002\u0002",
    "\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002AB\u0003\u0002",
    "\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002D<\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002",
    "FG\u0007\u0005\u0002\u0002G\t\u0003\u0002\u0002\u0002HI\u0005\u001a",
    "\u000e\u0002IJ\u0007 \u0002\u0002J\u000b\u0003\u0002\u0002\u0002KL\u0005",
    "\u001a\u000e\u0002LM\u0007 \u0002\u0002MN\u0007\u0006\u0002\u0002NV",
    "\u0003\u0002\u0002\u0002OP\u0005\u001a\u000e\u0002PQ\u0007 \u0002\u0002",
    "QR\u0007\u0007\u0002\u0002RS\u0005\u001e\u0010\u0002ST\u0007\u0006\u0002",
    "\u0002TV\u0003\u0002\u0002\u0002UK\u0003\u0002\u0002\u0002UO\u0003\u0002",
    "\u0002\u0002V\r\u0003\u0002\u0002\u0002W[\u0007\b\u0002\u0002XZ\u0005",
    "\u0010\t\u0002YX\u0003\u0002\u0002\u0002Z]\u0003\u0002\u0002\u0002[",
    "Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\^\u0003\u0002",
    "\u0002\u0002][\u0003\u0002\u0002\u0002^_\u0007\t\u0002\u0002_\u000f",
    "\u0003\u0002\u0002\u0002`h\u0005\f\u0007\u0002ah\u0005\u0014\u000b\u0002",
    "bh\u0005\u0016\f\u0002ch\u0005\u0018\r\u0002de\u0005\u001e\u0010\u0002",
    "ef\u0007\u0006\u0002\u0002fh\u0003\u0002\u0002\u0002g`\u0003\u0002\u0002",
    "\u0002ga\u0003\u0002\u0002\u0002gb\u0003\u0002\u0002\u0002gc\u0003\u0002",
    "\u0002\u0002gd\u0003\u0002\u0002\u0002h\u0011\u0003\u0002\u0002\u0002",
    "ij\u0007\u0003\u0002\u0002jk\u0005\u001e\u0010\u0002kl\u0007\u0005\u0002",
    "\u0002l\u0013\u0003\u0002\u0002\u0002mn\u0007\n\u0002\u0002no\u0005",
    "\u0012\n\u0002or\u0005\u000e\b\u0002pq\u0007\u000b\u0002\u0002qs\u0005",
    "\u000e\b\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002s",
    "\u0015\u0003\u0002\u0002\u0002tu\u0007\f\u0002\u0002uv\u0005\u0012\n",
    "\u0002vw\u0005\u000e\b\u0002w\u0017\u0003\u0002\u0002\u0002xy\u0007",
    "\r\u0002\u0002yz\u0005\u001e\u0010\u0002z{\u0007\u0006\u0002\u0002{",
    "\u0019\u0003\u0002\u0002\u0002|}\t\u0002\u0002\u0002}\u001b\u0003\u0002",
    "\u0002\u0002~\u0083\u0005\u001e\u0010\u0002\u007f\u0080\u0007\u0004",
    "\u0002\u0002\u0080\u0082\u0005\u001e\u0010\u0002\u0081\u007f\u0003\u0002",
    "\u0002\u0002\u0082\u0085\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002",
    "\u0002\u0002\u0083\u0084\u0003\u0002\u0002\u0002\u0084\u001d\u0003\u0002",
    "\u0002\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0086\u0087\b\u0010",
    "\u0001\u0002\u0087\u0088\t\u0003\u0002\u0002\u0088\u0090\u0005\u001e",
    "\u0010\n\u0089\u008a\u0007\u0003\u0002\u0002\u008a\u008b\u0005\u001e",
    "\u0010\u0002\u008b\u008c\u0007\u0005\u0002\u0002\u008c\u0090\u0003\u0002",
    "\u0002\u0002\u008d\u0090\u0005 \u0011\u0002\u008e\u0090\u0007 \u0002",
    "\u0002\u008f\u0086\u0003\u0002\u0002\u0002\u008f\u0089\u0003\u0002\u0002",
    "\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002",
    "\u0002\u0090\u00ae\u0003\u0002\u0002\u0002\u0091\u0092\f\t\u0002\u0002",
    "\u0092\u0093\t\u0004\u0002\u0002\u0093\u00ad\u0005\u001e\u0010\n\u0094",
    "\u0095\f\b\u0002\u0002\u0095\u0096\t\u0003\u0002\u0002\u0096\u00ad\u0005",
    "\u001e\u0010\t\u0097\u0098\f\u0007\u0002\u0002\u0098\u0099\t\u0005\u0002",
    "\u0002\u0099\u00ad\u0005\u001e\u0010\b\u009a\u009b\f\u0006\u0002\u0002",
    "\u009b\u009c\t\u0006\u0002\u0002\u009c\u00ad\u0005\u001e\u0010\u0007",
    "\u009d\u009e\f\u0005\u0002\u0002\u009e\u009f\u0007\u001d\u0002\u0002",
    "\u009f\u00ad\u0005\u001e\u0010\u0006\u00a0\u00a1\f\u0004\u0002\u0002",
    "\u00a1\u00a2\u0007\u001e\u0002\u0002\u00a2\u00ad\u0005\u001e\u0010\u0005",
    "\u00a3\u00a4\f\u0003\u0002\u0002\u00a4\u00a5\u0007\u0007\u0002\u0002",
    "\u00a5\u00ad\u0005\u001e\u0010\u0003\u00a6\u00a7\f\u000b\u0002\u0002",
    "\u00a7\u00a9\u0007\u0003\u0002\u0002\u00a8\u00aa\u0005\u001c\u000f\u0002",
    "\u00a9\u00a8\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ad\u0007\u0005\u0002\u0002",
    "\u00ac\u0091\u0003\u0002\u0002\u0002\u00ac\u0094\u0003\u0002\u0002\u0002",
    "\u00ac\u0097\u0003\u0002\u0002\u0002\u00ac\u009a\u0003\u0002\u0002\u0002",
    "\u00ac\u009d\u0003\u0002\u0002\u0002\u00ac\u00a0\u0003\u0002\u0002\u0002",
    "\u00ac\u00a3\u0003\u0002\u0002\u0002\u00ac\u00a6\u0003\u0002\u0002\u0002",
    "\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u001f\u0003\u0002\u0002\u0002",
    "\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b6\u0005\"\u0012\u0002",
    "\u00b2\u00b6\u0005$\u0013\u0002\u00b3\u00b6\u0005&\u0014\u0002\u00b4",
    "\u00b6\u0005(\u0015\u0002\u00b5\u00b1\u0003\u0002\u0002\u0002\u00b5",
    "\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5",
    "\u00b4\u0003\u0002\u0002\u0002\u00b6!\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\u0007\u001f\u0002\u0002\u00b8#\u0003\u0002\u0002\u0002\u00b9",
    "\u00ba\u0007!\u0002\u0002\u00ba%\u0003\u0002\u0002\u0002\u00bb\u00bc",
    "\u0007\"\u0002\u0002\u00bc\'\u0003\u0002\u0002\u0002\u00bd\u00be\u0007",
    "#\u0002\u0002\u00be)\u0003\u0002\u0002\u0002\u0010-4ADU[gr\u0083\u008f",
    "\u00a9\u00ac\u00ae\u00b5"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'('", "','", "')'", "';'", "'='", "'{'", "'}'", 
                     "'if'", "'else'", "'while'", "'return'", "'bool'", 
                     "'int'", "'char'", "'void'", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'<='", "'>='", "'>'", "'<'", "'=='", "'!='", 
                     "'&&'", "'||'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', "Number", "ID", "BoolConst", "CharConst", 
                      "StringConst", "WS" ];

var ruleNames =  [ "program", "definition", "functionDefinition", "functionParameters", 
                   "functionParameter", "variableDefinition", "block", "statement", 
                   "condition", "ifStatement", "whileStatement", "returnStatement", 
                   "valueType", "expressionList", "expression", "constant", 
                   "numberToken", "boolConstToken", "charConstToken", "stringConstToken" ];

function GrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

GrammarParser.prototype = Object.create(antlr4.Parser.prototype);
GrammarParser.prototype.constructor = GrammarParser;

Object.defineProperty(GrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

GrammarParser.EOF = antlr4.Token.EOF;
GrammarParser.T__0 = 1;
GrammarParser.T__1 = 2;
GrammarParser.T__2 = 3;
GrammarParser.T__3 = 4;
GrammarParser.T__4 = 5;
GrammarParser.T__5 = 6;
GrammarParser.T__6 = 7;
GrammarParser.T__7 = 8;
GrammarParser.T__8 = 9;
GrammarParser.T__9 = 10;
GrammarParser.T__10 = 11;
GrammarParser.T__11 = 12;
GrammarParser.T__12 = 13;
GrammarParser.T__13 = 14;
GrammarParser.T__14 = 15;
GrammarParser.T__15 = 16;
GrammarParser.T__16 = 17;
GrammarParser.T__17 = 18;
GrammarParser.T__18 = 19;
GrammarParser.T__19 = 20;
GrammarParser.T__20 = 21;
GrammarParser.T__21 = 22;
GrammarParser.T__22 = 23;
GrammarParser.T__23 = 24;
GrammarParser.T__24 = 25;
GrammarParser.T__25 = 26;
GrammarParser.T__26 = 27;
GrammarParser.T__27 = 28;
GrammarParser.Number = 29;
GrammarParser.ID = 30;
GrammarParser.BoolConst = 31;
GrammarParser.CharConst = 32;
GrammarParser.StringConst = 33;
GrammarParser.WS = 34;

GrammarParser.RULE_program = 0;
GrammarParser.RULE_definition = 1;
GrammarParser.RULE_functionDefinition = 2;
GrammarParser.RULE_functionParameters = 3;
GrammarParser.RULE_functionParameter = 4;
GrammarParser.RULE_variableDefinition = 5;
GrammarParser.RULE_block = 6;
GrammarParser.RULE_statement = 7;
GrammarParser.RULE_condition = 8;
GrammarParser.RULE_ifStatement = 9;
GrammarParser.RULE_whileStatement = 10;
GrammarParser.RULE_returnStatement = 11;
GrammarParser.RULE_valueType = 12;
GrammarParser.RULE_expressionList = 13;
GrammarParser.RULE_expression = 14;
GrammarParser.RULE_constant = 15;
GrammarParser.RULE_numberToken = 16;
GrammarParser.RULE_boolConstToken = 17;
GrammarParser.RULE_charConstToken = 18;
GrammarParser.RULE_stringConstToken = 19;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.EOF = function() {
    return this.getToken(GrammarParser.EOF, 0);
};

ProgramContext.prototype.definition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefinitionContext);
    } else {
        return this.getTypedRuleContext(DefinitionContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitProgram(this);
	}
};




GrammarParser.ProgramContext = ProgramContext;

GrammarParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, GrammarParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__11) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__13) | (1 << GrammarParser.T__14))) !== 0)) {
            this.state = 40;
            this.definition();
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 46;
        this.match(GrammarParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_definition;
    return this;
}

DefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefinitionContext.prototype.constructor = DefinitionContext;

DefinitionContext.prototype.functionDefinition = function() {
    return this.getTypedRuleContext(FunctionDefinitionContext,0);
};

DefinitionContext.prototype.variableDefinition = function() {
    return this.getTypedRuleContext(VariableDefinitionContext,0);
};

DefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterDefinition(this);
	}
};

DefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitDefinition(this);
	}
};




GrammarParser.DefinitionContext = DefinitionContext;

GrammarParser.prototype.definition = function() {

    var localctx = new DefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, GrammarParser.RULE_definition);
    try {
        this.state = 50;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.functionDefinition();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 49;
            this.variableDefinition();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_functionDefinition;
    return this;
}

FunctionDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDefinitionContext.prototype.constructor = FunctionDefinitionContext;

FunctionDefinitionContext.prototype.valueType = function() {
    return this.getTypedRuleContext(ValueTypeContext,0);
};

FunctionDefinitionContext.prototype.ID = function() {
    return this.getToken(GrammarParser.ID, 0);
};

FunctionDefinitionContext.prototype.functionParameters = function() {
    return this.getTypedRuleContext(FunctionParametersContext,0);
};

FunctionDefinitionContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FunctionDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFunctionDefinition(this);
	}
};

FunctionDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFunctionDefinition(this);
	}
};




GrammarParser.FunctionDefinitionContext = FunctionDefinitionContext;

GrammarParser.prototype.functionDefinition = function() {

    var localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, GrammarParser.RULE_functionDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 52;
        this.valueType();
        this.state = 53;
        this.match(GrammarParser.ID);
        this.state = 54;
        this.functionParameters();
        this.state = 55;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_functionParameters;
    return this;
}

FunctionParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionParametersContext.prototype.constructor = FunctionParametersContext;

FunctionParametersContext.prototype.functionParameter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionParameterContext);
    } else {
        return this.getTypedRuleContext(FunctionParameterContext,i);
    }
};

FunctionParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFunctionParameters(this);
	}
};

FunctionParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFunctionParameters(this);
	}
};




GrammarParser.FunctionParametersContext = FunctionParametersContext;

GrammarParser.prototype.functionParameters = function() {

    var localctx = new FunctionParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, GrammarParser.RULE_functionParameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this.match(GrammarParser.T__0);
        this.state = 66;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__11) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__13) | (1 << GrammarParser.T__14))) !== 0)) {
            this.state = 58;
            this.functionParameter();
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===GrammarParser.T__1) {
                this.state = 59;
                this.match(GrammarParser.T__1);
                this.state = 60;
                this.functionParameter();
                this.state = 65;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 68;
        this.match(GrammarParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FunctionParameterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_functionParameter;
    return this;
}

FunctionParameterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionParameterContext.prototype.constructor = FunctionParameterContext;

FunctionParameterContext.prototype.valueType = function() {
    return this.getTypedRuleContext(ValueTypeContext,0);
};

FunctionParameterContext.prototype.ID = function() {
    return this.getToken(GrammarParser.ID, 0);
};

FunctionParameterContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterFunctionParameter(this);
	}
};

FunctionParameterContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitFunctionParameter(this);
	}
};




GrammarParser.FunctionParameterContext = FunctionParameterContext;

GrammarParser.prototype.functionParameter = function() {

    var localctx = new FunctionParameterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, GrammarParser.RULE_functionParameter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.valueType();
        this.state = 71;
        this.match(GrammarParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VariableDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_variableDefinition;
    return this;
}

VariableDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDefinitionContext.prototype.constructor = VariableDefinitionContext;

VariableDefinitionContext.prototype.valueType = function() {
    return this.getTypedRuleContext(ValueTypeContext,0);
};

VariableDefinitionContext.prototype.ID = function() {
    return this.getToken(GrammarParser.ID, 0);
};

VariableDefinitionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VariableDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterVariableDefinition(this);
	}
};

VariableDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitVariableDefinition(this);
	}
};




GrammarParser.VariableDefinitionContext = VariableDefinitionContext;

GrammarParser.prototype.variableDefinition = function() {

    var localctx = new VariableDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, GrammarParser.RULE_variableDefinition);
    try {
        this.state = 83;
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 73;
            this.valueType();
            this.state = 74;
            this.match(GrammarParser.ID);
            this.state = 75;
            this.match(GrammarParser.T__3);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.valueType();
            this.state = 78;
            this.match(GrammarParser.ID);
            this.state = 79;
            this.match(GrammarParser.T__4);
            this.state = 80;
            this.expression(0);
            this.state = 81;
            this.match(GrammarParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBlock(this);
	}
};




GrammarParser.BlockContext = BlockContext;

GrammarParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, GrammarParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(GrammarParser.T__5);
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__7) | (1 << GrammarParser.T__9) | (1 << GrammarParser.T__10) | (1 << GrammarParser.T__11) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__13) | (1 << GrammarParser.T__14) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__16) | (1 << GrammarParser.Number) | (1 << GrammarParser.ID) | (1 << GrammarParser.BoolConst))) !== 0) || _la===GrammarParser.CharConst || _la===GrammarParser.StringConst) {
            this.state = 86;
            this.statement();
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 92;
        this.match(GrammarParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.variableDefinition = function() {
    return this.getTypedRuleContext(VariableDefinitionContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.whileStatement = function() {
    return this.getTypedRuleContext(WhileStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStatement(this);
	}
};




GrammarParser.StatementContext = StatementContext;

GrammarParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, GrammarParser.RULE_statement);
    try {
        this.state = 101;
        switch(this._input.LA(1)) {
        case GrammarParser.T__11:
        case GrammarParser.T__12:
        case GrammarParser.T__13:
        case GrammarParser.T__14:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.variableDefinition();
            break;
        case GrammarParser.T__7:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.ifStatement();
            break;
        case GrammarParser.T__9:
            this.enterOuterAlt(localctx, 3);
            this.state = 96;
            this.whileStatement();
            break;
        case GrammarParser.T__10:
            this.enterOuterAlt(localctx, 4);
            this.state = 97;
            this.returnStatement();
            break;
        case GrammarParser.T__0:
        case GrammarParser.T__15:
        case GrammarParser.T__16:
        case GrammarParser.Number:
        case GrammarParser.ID:
        case GrammarParser.BoolConst:
        case GrammarParser.CharConst:
        case GrammarParser.StringConst:
            this.enterOuterAlt(localctx, 5);
            this.state = 98;
            this.expression(0);
            this.state = 99;
            this.match(GrammarParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitCondition(this);
	}
};




GrammarParser.ConditionContext = ConditionContext;

GrammarParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, GrammarParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(GrammarParser.T__0);
        this.state = 104;
        this.expression(0);
        this.state = 105;
        this.match(GrammarParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

IfStatementContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitIfStatement(this);
	}
};




GrammarParser.IfStatementContext = IfStatementContext;

GrammarParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, GrammarParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.match(GrammarParser.T__7);
        this.state = 108;
        this.condition();
        this.state = 109;
        this.block();
        this.state = 112;
        _la = this._input.LA(1);
        if(_la===GrammarParser.T__8) {
            this.state = 110;
            this.match(GrammarParser.T__8);
            this.state = 111;
            this.block();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhileStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_whileStatement;
    return this;
}

WhileStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileStatementContext.prototype.constructor = WhileStatementContext;

WhileStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

WhileStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WhileStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterWhileStatement(this);
	}
};

WhileStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitWhileStatement(this);
	}
};




GrammarParser.WhileStatementContext = WhileStatementContext;

GrammarParser.prototype.whileStatement = function() {

    var localctx = new WhileStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, GrammarParser.RULE_whileStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(GrammarParser.T__9);
        this.state = 115;
        this.condition();
        this.state = 116;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitReturnStatement(this);
	}
};




GrammarParser.ReturnStatementContext = ReturnStatementContext;

GrammarParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, GrammarParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(GrammarParser.T__10);
        this.state = 119;
        this.expression(0);
        this.state = 120;
        this.match(GrammarParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_valueType;
    return this;
}

ValueTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueTypeContext.prototype.constructor = ValueTypeContext;


ValueTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterValueType(this);
	}
};

ValueTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitValueType(this);
	}
};




GrammarParser.ValueTypeContext = ValueTypeContext;

GrammarParser.prototype.valueType = function() {

    var localctx = new ValueTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, GrammarParser.RULE_valueType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__11) | (1 << GrammarParser.T__12) | (1 << GrammarParser.T__13) | (1 << GrammarParser.T__14))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitExpressionList(this);
	}
};




GrammarParser.ExpressionListContext = ExpressionListContext;

GrammarParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, GrammarParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.expression(0);
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===GrammarParser.T__1) {
            this.state = 125;
            this.match(GrammarParser.T__1);
            this.state = 126;
            this.expression(0);
            this.state = 131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

ExpressionContext.prototype.ID = function() {
    return this.getToken(GrammarParser.ID, 0);
};

ExpressionContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitExpression(this);
	}
};



GrammarParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, GrammarParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        switch(this._input.LA(1)) {
        case GrammarParser.T__15:
        case GrammarParser.T__16:
            this.state = 133;
            _la = this._input.LA(1);
            if(!(_la===GrammarParser.T__15 || _la===GrammarParser.T__16)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 134;
            this.expression(8);
            break;
        case GrammarParser.T__0:
            this.state = 135;
            this.match(GrammarParser.T__0);
            this.state = 136;
            this.expression(0);
            this.state = 137;
            this.match(GrammarParser.T__2);
            break;
        case GrammarParser.Number:
        case GrammarParser.BoolConst:
        case GrammarParser.CharConst:
        case GrammarParser.StringConst:
            this.state = 139;
            this.constant();
            break;
        case GrammarParser.ID:
            this.state = 140;
            this.match(GrammarParser.ID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 172;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 170;
                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 143;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 144;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__17) | (1 << GrammarParser.T__18) | (1 << GrammarParser.T__19))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 145;
                    this.expression(8);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 146;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 147;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__15 || _la===GrammarParser.T__16)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 148;
                    this.expression(7);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 149;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 150;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__20) | (1 << GrammarParser.T__21) | (1 << GrammarParser.T__22) | (1 << GrammarParser.T__23))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 151;
                    this.expression(6);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 152;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 153;
                    _la = this._input.LA(1);
                    if(!(_la===GrammarParser.T__24 || _la===GrammarParser.T__25)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    }
                    this.state = 154;
                    this.expression(5);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 155;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }

                    this.state = 156;
                    this.match(GrammarParser.T__26);
                    this.state = 157;
                    this.expression(4);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 158;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }

                    this.state = 159;
                    this.match(GrammarParser.T__27);
                    this.state = 160;
                    this.expression(3);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 161;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 162;
                    this.match(GrammarParser.T__4);
                    this.state = 163;
                    this.expression(1);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, GrammarParser.RULE_expression);
                    this.state = 164;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 165;
                    this.match(GrammarParser.T__0);
                    this.state = 167;
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GrammarParser.T__0) | (1 << GrammarParser.T__15) | (1 << GrammarParser.T__16) | (1 << GrammarParser.Number) | (1 << GrammarParser.ID) | (1 << GrammarParser.BoolConst))) !== 0) || _la===GrammarParser.CharConst || _la===GrammarParser.StringConst) {
                        this.state = 166;
                        this.expressionList();
                    }

                    this.state = 169;
                    this.match(GrammarParser.T__2);
                    break;

                } 
            }
            this.state = 174;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.numberToken = function() {
    return this.getTypedRuleContext(NumberTokenContext,0);
};

ConstantContext.prototype.boolConstToken = function() {
    return this.getTypedRuleContext(BoolConstTokenContext,0);
};

ConstantContext.prototype.charConstToken = function() {
    return this.getTypedRuleContext(CharConstTokenContext,0);
};

ConstantContext.prototype.stringConstToken = function() {
    return this.getTypedRuleContext(StringConstTokenContext,0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitConstant(this);
	}
};




GrammarParser.ConstantContext = ConstantContext;

GrammarParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, GrammarParser.RULE_constant);
    try {
        this.state = 179;
        switch(this._input.LA(1)) {
        case GrammarParser.Number:
            this.enterOuterAlt(localctx, 1);
            this.state = 175;
            this.numberToken();
            break;
        case GrammarParser.BoolConst:
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.boolConstToken();
            break;
        case GrammarParser.CharConst:
            this.enterOuterAlt(localctx, 3);
            this.state = 177;
            this.charConstToken();
            break;
        case GrammarParser.StringConst:
            this.enterOuterAlt(localctx, 4);
            this.state = 178;
            this.stringConstToken();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberTokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_numberToken;
    return this;
}

NumberTokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberTokenContext.prototype.constructor = NumberTokenContext;

NumberTokenContext.prototype.Number = function() {
    return this.getToken(GrammarParser.Number, 0);
};

NumberTokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterNumberToken(this);
	}
};

NumberTokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitNumberToken(this);
	}
};




GrammarParser.NumberTokenContext = NumberTokenContext;

GrammarParser.prototype.numberToken = function() {

    var localctx = new NumberTokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, GrammarParser.RULE_numberToken);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(GrammarParser.Number);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BoolConstTokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_boolConstToken;
    return this;
}

BoolConstTokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolConstTokenContext.prototype.constructor = BoolConstTokenContext;

BoolConstTokenContext.prototype.BoolConst = function() {
    return this.getToken(GrammarParser.BoolConst, 0);
};

BoolConstTokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterBoolConstToken(this);
	}
};

BoolConstTokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitBoolConstToken(this);
	}
};




GrammarParser.BoolConstTokenContext = BoolConstTokenContext;

GrammarParser.prototype.boolConstToken = function() {

    var localctx = new BoolConstTokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, GrammarParser.RULE_boolConstToken);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(GrammarParser.BoolConst);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CharConstTokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_charConstToken;
    return this;
}

CharConstTokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CharConstTokenContext.prototype.constructor = CharConstTokenContext;

CharConstTokenContext.prototype.CharConst = function() {
    return this.getToken(GrammarParser.CharConst, 0);
};

CharConstTokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterCharConstToken(this);
	}
};

CharConstTokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitCharConstToken(this);
	}
};




GrammarParser.CharConstTokenContext = CharConstTokenContext;

GrammarParser.prototype.charConstToken = function() {

    var localctx = new CharConstTokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, GrammarParser.RULE_charConstToken);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(GrammarParser.CharConst);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringConstTokenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = GrammarParser.RULE_stringConstToken;
    return this;
}

StringConstTokenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringConstTokenContext.prototype.constructor = StringConstTokenContext;

StringConstTokenContext.prototype.StringConst = function() {
    return this.getToken(GrammarParser.StringConst, 0);
};

StringConstTokenContext.prototype.enterRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.enterStringConstToken(this);
	}
};

StringConstTokenContext.prototype.exitRule = function(listener) {
    if(listener instanceof GrammarListener ) {
        listener.exitStringConstToken(this);
	}
};




GrammarParser.StringConstTokenContext = StringConstTokenContext;

GrammarParser.prototype.stringConstToken = function() {

    var localctx = new StringConstTokenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, GrammarParser.RULE_stringConstToken);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(GrammarParser.StringConst);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


GrammarParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 14:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

GrammarParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 1);
		case 7:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.GrammarParser = GrammarParser;
