// 静的型付け言語（変数型を指定できる）
// 子の書き方をするとターミナルからnodeコマンドで実行ができなくなる
var message:string = "Hello!!!!!";
console.log(message);
// 実行したいときはts-node hello　で実行できる

// コンパイルするときは tsc hello で実行できる → jsファイルがフォルダにできる



// 型推論(Type Inference)変数名の上にカーソルを乗せるとデータ型が推測されて表示される
var id = 1;
var email = "test@test.com"
var isActive = true;
var none;


// 型定義(Type definition)明示的にデータ型を指定した書き方
var id:number = 1;
var email:string = "test@test.com"
var isActive:boolean = true;
var none:any;


// ダメな書き方
// var dame;
// dame = "yse";
// 最初に変数の型を指定しないと推論でデータ型が決まってしまうので、そのデータ型以外のデータが入れられなくなることがある
// 実行したときに型推論で型が決まったりもする


// 型をコンソールに出力してみる
console.log(id, typeof id);
console.log(email, typeof email);
console.log(isActive, typeof isActive);
console.log(none, typeof none);

