/**/
%{
	
%}

/* TERMINALS DEFINITION */
%lex

%options case-sensitive
%x STRING

%%
/* COMMENTS */
"//".*										// One line comment 
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// Multi-Line comment

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
"true"            	 return 'true';
"false"              return 'false';
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
/* RELATIONAL OPERATORS */
"<="                 return 'less_than_or_equal';
">="                 return 'greater_than_or_equal';
"=="                 return 'equals';
"!="                 return 'different';
"<"                  return 'less_than';
">"                  return 'greater_than';
"<="                 return 'less_than_or_equal';
">="                 return 'greater_than_or_equal';
/* LOGIC OPERATORS */
"&&"                 return 'and';
"||"                 return 'or';
"!"                  return 'not';
"?"                  return 'ternary';
/* STRING OPERATORS */ 
"&"                  return 'concat';
"^"                  return 'repeat';
"$"                  return 'value';
/*ASSIGN OPERATORS*/
"="                  return 'assign';
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
[0-9]+("."[0-9]+)\b        return 'DOUBLE';
[0-9]+\b                   return 'INTEGER';
[a-zA-Z_][a-zA-Z0-9_]*\b   return 'IDENTIFIER';

["]                           {    string = ""; this.begin("STRING"); }
[']                           {    string = ""; this.begin("STRING"); }
<STRING>\"                   %{    this.begin('INITIAL'); yytext=""; yytext=string;  return 'string_tk'; %}      
<STRING>[\']                 %{    this.begin('INITIAL'); yytext=""; yytext=string;  return 'string_tk'; %}      
<STRING>[^\n\r\"\\']+        %{    string+=yytext;  %}
<STRING>'\t'                 %{    string+="\t";    %}
<STRING>'\n'                 %{    string+="\n";    %}
<STRING>'\r'                 %{    string+="\r";    %}
<STRING>'\\"'                %{    string+='\"';    %}
<STRING>'\\'                 %{    string+='\\';    %}

<<EOF>>                 return 'EOF';

.+ {
	var e = new Exception(yytext, yylloc.first_line, (yylloc.first_column + 1), ExceptionType.LEXICAL);
	Exception.exceptionList.push(e);
}

/lex

/* OPERATORS PRECEDENCE AND ASSOCIATION */
%right 'assign'
%right 'ternary' 'colon'
%left 'or'
%left 'and'
%left 'equals' 'different'
%nonassoc 'greater_than' 'less_than' 'greater_than_or_equal' 'less_than_or_equal' 
%left 'plus' 'minus'
%left 'multiply' 'divide'
%right uminus unot
%right 'open_par' 'close_par' 'open_bracket' 'close_bracket' 'open_brace' 'close_brace'

%start START

%% /* RULES DEFINITION */

START
	: INSTRUCTIONS EOF {
		$1.name = NodeName.ROOT;
		return $1;
	} 
;

INSTRUCTIONS
	: INSTRUCTIONS INSTRUCTION {
		$$ = $1;
		$$.children.push($2);
	} | INSTRUCTION {
		$$ = new Node_(NodeName.INSTRUCTIONS, "INSTRUCTIONS", -1, -1, [$1], new NodeData(-1, -1, -1, -1), false, false);
	}
;

INSTRUCTION
	: PRINT_INST semicolon {
		$$ = $1;
	} | IF_SENTENCE {
		$$ = $1;
	} | WHILE_SENTENCE {
		$$ = $1;
	} | DECLARATION semicolon {
		$$ = $1;
	} | ASSINGMENT semicolon {
		$$ = $1;
	} | FOR_SENTENCE {
		$$ = $1;
	} | DO_WHILE_SENTENCE {
		$$ = $1;
	} | error SCAPE {
		var e = new Exception($1, @1.first_line, (@1.first_column + 1), ExceptionType.SYNTACTIC);
		Exception.exceptionList.push(e);
	}
;

SCAPE
	: semicolon {
		$$ = $1;
	} | close_brace {
		$$ = $1;
	}
;

FOR_SENTENCE
	: for open_par EXPRESSION semicolon EXPRESSION semicolon EXPRESSION close_par INSTRUCTIONS_BLOCK {
		$$ = new For()
	}
;

DO_WHILE_SENTENCE 
	: do INSTRUCTIONS_BLOCK while open_par EXPRESSION close_par semicolon {
		$$ = new Do_While(NodeName.DO_WHILE, String($1), @1.first_line, (@1.first_column + 1), [$2, $5]);
	}
;

INCREMENTAL: IDENTIFIER MINUS_PLUS
	| MINUS_PLUS IDENTIFIER
;

MINUS_PLUS
	: plus plus {

	} | minus minus {

	}
;

PRINT_INST
	: PRINT open_par EXPRESSION close_par {
		$$ = new Print(String($1), @1.first_line, (@1.first_column + 1), [$3]);
	}
;

PRINT
	: print {$$ = String($1);}
	| print_ln {$$ = String($1);}
;

DECLARATION
	: ATTRIBUTE_TYPE IDENTIFIER assign EXPRESSION {
		var id = new Id(NodeName.ID, String($2), @2.first_line, (@2.first_column + 1));
		$$ = new Declaration($1.line, $1.column, [$1, id, $4]);
	} | ATTRIBUTE_TYPE ID_LIST {
		$$ = new Declaration($1.line, $1.column, [$1, $2]);
	}
;

ID_LIST
	: ID_LIST comma IDENTIFIER {
		var id = new Id(NodeName.ID, String($3), @3.first_line, (@3.first_column + 1));
		$$ = $1;
		$$.children.push(id);
	} | IDENTIFIER {
		var id = new Id(NodeName.ID, String($1), @1.first_line, (@1.first_column + 1));
		$$ = new Node_(NodeName.ID_LIST, "", -1, -1, [id], new NodeData(-1, -1, -1, -1), false, false);
	}
;

ASSINGMENT
	: IDENTIFIER assign EXPRESSION {
		var id = new Id(NodeName.ID, String($1), @1.first_line, (@1.first_column + 1));
		$$ = new Assignment(@1.first_line, (@1.first_column + 1), [id, $3]);
	}
;

IF_SENTENCE
	: if open_par EXPRESSION close_par INSTRUCTIONS_BLOCK MORE_IF_OPTIONS {
		$$ = new If(NodeName.IF, String($1), @1.first_line, (@1.first_column + 1), [$3, $5, $6]);
	}
;

MORE_IF_OPTIONS
	: else ELSE_IF_ELSE {
		$2.line = @1.first_line;
		$2.column = (@1.first_column + 1);

		$$ = $2;
	} | %empty {
		/*IF*/
	}
;

ELSE_IF_ELSE
	: INSTRUCTIONS_BLOCK {
		/*ELSE*/
		$$ = new Else([$1]);
	} | IF_SENTENCE {
		/*IF-ELSE-IF*/
		$$ = $1;
	}
;

INSTRUCTIONS_BLOCK
	: open_brace INSTRUCTIONS close_brace {
		$$ = $2
	}
;

WHILE_SENTENCE
	: while open_par EXPRESSION close_par INSTRUCTIONS_BLOCK {
		$$ = new While(NodeName.WHILE, String($1), @1.first_line, (@1.first_column + 1), [$3, $5]);
	}
;

EXPRESSION
	: minus EXPRESSION %prec uminus {
		var n = new Node_(NodeName.ARITHMETIC, "-", @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.DOUBLE, -1, -1), false, false);
		$$ = new Expression([n, $2]);
	} | not EXPRESSION %prec unot {
		var n = new Node_(NodeName.LOGIC, "!", @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([n, $2]);
	} | EXPRESSION or EXPRESSION {
		var n = new Node_(NodeName.LOGIC, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION and EXPRESSION {
		var n = new Node_(NodeName.LOGIC, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION equals EXPRESSION {
		var n = new Node_(NodeName.RELATIONAL, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION different EXPRESSION {
		var n = new Node_(NodeName.RELATIONAL, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION less_than EXPRESSION {
		var n = new Node_(NodeName.RELATIONAL, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION greater_than EXPRESSION {
		var n = new Node_(NodeName.RELATIONAL, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION less_than_or_equal EXPRESSION {
		var n = new Node_(NodeName.RELATIONAL, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION greater_than_or_equal EXPRESSION {
		var n = new Node_(NodeName.RELATIONAL, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.BOOLEAN, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION plus EXPRESSION {
		var n = new Node_(NodeName.ARITHMETIC, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.DOUBLE, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION minus EXPRESSION {
		var n = new Node_(NodeName.ARITHMETIC, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.DOUBLE, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION multiply EXPRESSION {
		var n = new Node_(NodeName.ARITHMETIC, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.DOUBLE, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | EXPRESSION divide EXPRESSION {
		var n = new Node_(NodeName.ARITHMETIC, String($2), @1.first_line, (@1.first_column + 1), [], new NodeData(-1, NodeReturnType.DOUBLE, -1, -1), false, false);
		$$ = new Expression([$1, n, $3]);
	} | INTEGER {
		var pd = new PrimitiveData(NodeName.INTEGER, Number($1), @1.first_line, (@1.first_column + 1), NodeReturnType.INTEGER);
		$$ = new Expression([pd]);
	} | DOUBLE {
		var pd = new PrimitiveData(NodeName.DOUBLE, Number($1), @1.first_line, (@1.first_column + 1), NodeReturnType.DOUBLE);
		$$ = new Expression([pd]);
	} | true {
		var pd = new PrimitiveData(NodeName.BOOLEAN, true, @1.first_line, (@1.first_column + 1), NodeReturnType.BOOLEAN);
		$$ = new Expression([pd]);
	} | false {
		var pd = new PrimitiveData(NodeName.BOOLEAN, false, @1.first_line, (@1.first_column + 1), NodeReturnType.BOOLEAN);
		$$ = new Expression([pd]);
	} | char {
		var pd = new PrimitiveData(NodeName.CHAR, String($1), @1.first_line, (@1.first_column + 1), NodeReturnType.CHAR);
		$$ = new Expression([pd]);
	} | string_tk {
		var pd = new PrimitiveData(NodeName.STRING, String($1), @1.first_line, (@1.first_column + 1), NodeReturnType.STRING);
		$$ = new Expression([pd]);
	} | struct {
		var s = new PrimitiveData(NodeName.STRUCT, Struct($1), @1.first_line, (@1.first_column + 1), NodeReturnType.STRUCT);
		$$ = new Expression([s]);
	} | IDENTIFIER {
		var id = new Id(NodeName.ID, String($1), @1.first_line, (@1.first_column + 1));
		$$ = new Expression([id]);
	} | open_par EXPRESSION close_par {
		$$ = new Expression([$2]);
	}
;

ATTRIBUTE_LIST
	: ATTRIBUTE_LIST comma ATTRIBUTE {
		//código para js
	} | ATTRIBUTE
;

ATTRIBUTE 
	: ATTRIBUTE_TYPE IDENTIFIER
;

ATTRIBUTE_TYPE
	: int {
		$$ = new Type_($1, @1.first_line, (@1.first_column + 1));
	} | double {
		$$ = new Type_($1, @1.first_line, (@1.first_column + 1));
	} | boolean {
		$$ = new Type_($1, @1.first_line, (@1.first_column + 1));
	} | char  {
		$$ = new Type_($1, @1.first_line, (@1.first_column + 1));
	} | string {
		$$ = new Type_($1, @1.first_line, (@1.first_column + 1));
	}
;