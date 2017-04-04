grammar Grammar;

program : (definition)* EOF ;

definition : functionDefinition | variableDefinition ;

functionDefinition : valueType ID functionParameters block ;

functionParameters : '(' (functionParameter (',' functionParameter)*)? ')';

functionParameter: valueType ID ;

variableDefinition : valueType ID ';'| valueType ID '=' expression ';'  ;

block : '{' statement* '}' ;

statement : variableDefinition | ifStatement | whileStatement | returnStatement | expression ';' ;

condition : '(' expression ')' ;

ifStatement : 'if' condition block ('else' block)? ;

whileStatement : 'while' condition block ;

returnStatement : 'return' expression ';' ;

valueType: 'bool' | 'int' | 'char' | 'void' ;

expressionList : expression (',' expression)* ;

expression : '(' expression ')' | constant | ID  // basisc
    | expression '(' expressionList? ')' // function call
    | ('+' | '-') expression  // unary operators
    | expression ('*' | '/' | '%') expression  // multiplication and division
    | expression ('+' | '-') expression
    | expression ('<=' | '>=' | '>' | '<') expression // inequalities
    | expression ('==' | '!=') expression // equality and inequality
    | expression ('&&') expression // logical and
    | expression ('||') expression // logical or
    | <assoc=right> expression '=' expression // assignment
    ;

constant : numberToken | boolConstToken | charConstToken | stringConstToken ;
numberToken : Number ;
boolConstToken : BoolConst ;
charConstToken : CharConst ;
stringConstToken : StringConst ;


Number : ZeroDigit | NonZeroDigit Digit* ;
fragment Digit : ZeroDigit | NonZeroDigit ;
fragment ZeroDigit : '0' ;
fragment NonZeroDigit : [1-9] ;

fragment ValidNameSymbol : [a-zA-Z0-9_] ;
fragment Letter : [a-zA-Z] ;
ID : Letter ValidNameSymbol*;


BoolConst : 'true' | 'false' ;
CharConst : '\'' ~['\\] '\'' ;
StringConst : '"' (~['\\])* '"' ;

WS : [ \t\u000C\r\n]+ -> skip ;