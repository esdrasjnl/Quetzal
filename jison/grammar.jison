/*IMPORTS DEFINITION*/
%{
	//import {Exception, ExceptionType, exceptionList} from "../src/ast/NodeData";
%}

/* TERMINALS DEFINITION */
%lex

%options case-sensitive

%%
/* SYMBOLS */
"."                  return 'dot';
","                  return 'comma';
":"                  return 'colon';
";"                  return 'semicolon';
"("                  return 'open_par';
")"                  return 'close_par';
"["                  return 'open_bracket';
"]"                  return 'close_bracket';
"{"                  return 'open_brace';
"}"                  return 'close_brace';
"#"                  return 'copy';
/* ARITHMETIC OPERATORS */
"+"                  return 'plus';
"-"                  return 'minus';
"*"                  return 'multiply';
"/"                  return 'divide';
"%"                  return 'percent';
/* RESERVED WORDS */
"null"               return 'null';
"int"                return 'int';
"double"             return 'double';
"boolean"            return 'boolean';
"char"               return 'char';
"String"             return 'string';
"struct"             return 'struct';
"void"               return 'void';
/* NATIVE FUNCTIONS */
"pow"                return 'power';
"sqrt"               return 'sqrt_root';
"sin"                return 'sine';
"cos"                return 'cosine';
"tan"                return 'tangent';
"log10"              return 'logarithm';
"parse"              return 'parse';
"toInt"              return 'to_int';
"toDouble"           return 'to_double';
"string"             return 'to_string';
"typeof"             return 'type_of';
"print"              return 'print';
"println"            return 'print_ln';
"push"               return 'push';
"pop"                return 'pop';
"characterOfPosition" return 'char_at';
"subString"          return 'substring';
"length"             return 'length';
"toUppercase"        return 'to_upper_case';
"toLowercase"        return 'to_lower_case';
/* LOGIC OPERATORS */
"=="                 return 'equals';
"!="                 return 'different';
"<"                  return 'less_than';
/* RELATIONAL OPERATORS */
">"                  return 'greater_than';
"<="                 return 'less_than_or_equal';
">="                 return 'greater_than_or_equal';
"&&"                 return 'and';
"||"                 return 'or';
"!"                  return 'not';
"?"                  return 'ternary';
/* STRING OPERATORS */ 
"&"                  return 'concat';
"^"                  return 'repeat';
"$"                  return 'value';
/* CONDITIONALS */
"if"                 return 'if';
"else"               return 'else';
"switch"             return 'switch';
"case"               return 'case';
"default"            return 'default';
/* LOOPS */
"while"              return 'while';
"do"                 return 'do';
"for"                return 'for';
"in"                 return 'in';
/* BLANKSPACES */
[ \r\t]+            {}
\n                  {}
/* REGEX */
[0-9]+("."[0-9]+)?\b    return 'DOUBLE';
[0-9]+\b                return 'INTEGER';

<<EOF>>                 return 'EOF';

. {
	Exception.exceptionList.push(new Exception(new Node_(null, $yytext, yylloc.first_line, (yylloc.first_column + 1), null, false, false), ExceptionType.LEXICAL));
}

/lex

/* OPERATORS PRECEDENCE AND ASSOCIATION */

%left 'plus' 'minus'
%left 'multiply' 'divide'
%left uminus

%start START

%% /* RULES DEFINITION */

START: 
	INSTRUCTIONS EOF
;

INSTRUCTIONS
	: INSTRUCTION INSTRUCTIONS
	| INSTRUCTION
;

INSTRUCTION
	: power open_bracket EXPRESSION close_bracket semicolon {
		console.log('El valor de la expresión es: ' + $3);
	}
	| error semicolon {
		Exception.exceptionList.push(new Exception(new Node_(null, $1, @1.first_line, (@1.first_column + 1), null, false, false), ExceptionType.SYNTACTIC));
	}
;

EXPRESSION
	: minus EXPRESSION %prec uminus {
		$$ = $2 *-1;
	} | EXPRESSION plus EXPRESSION {
		$$ = $1 + $3;
	} | EXPRESSION minus EXPRESSION {
		$$ = $1 - $3;
	} | EXPRESSION multiply EXPRESSION {
		$$ = $1 * $3;
	} | EXPRESSION divide EXPRESSION {
		$$ = $1 / $3;
	} | INTEGER {
		$$ = Number($1);
	} | DOUBLE {
		$$ = Number($1);
	} | open_par EXPRESSION close_par {
		$$ = $2;
	}
;