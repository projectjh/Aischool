// var res, score;
// score = 100;
// res = "Hello!!!";
// console.log(res, score);

// var obj = {name:'lee', adress:'서울'}
// console.log(obj);
// console.log(obj.name);
// console.log(obj.adress);

// var arr = [1,2,3];
// console.log(arr);
// console.log(arr[0]);

// var a;
// if ('10' === 10)
//     console.log("AAA");
// else
//     console.log("BBB");

// console.log(1 == 1.0);

// var a = `aaa
// aaaaa`;
// console.log(a);

// var a = "aaa\nbbb\tccc";
// console.log(a);

// var a = "aaa\'bbb\"ccc\\";
// console.log(a);

// var templete = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
// console.log(templete);

// var first = 'Ung-mo';
// var last = 'Lee';

// // console.log('My name is ' + first + ' ' + last + '.'); //문자열 연결
// // console.log(10 + 20);
// console.log(`My name is ${first} ${last}.`);

// console.log(`1 + 2 = ${1+2}`);

// var key = Symbol('key');
// console.log(typeof key);
// console.log(key);

// console.log(5 + 2);
// console.log(5 - 2);
// console.log(5 * 2);
// console.log(5 / 2);
// console.log(5 % 2);
// console.log("mbc" + "kbs");


// var a = 10;
// // ++ : a = a+1
// // -- : a = a-1
// console.log(a++); // 10 먼저 출력 후 ++로 증가, a = 11 (출력값 10)
// console.log(++a); // ++로 증가 후 a 출력 a = 12
// console.log(a--); // 12 먼저 출력 후 --로 감소, a = 11 (출력값 12)
// console.log(--a); // --로 감소 후 a 출력 a = 10
//아래와같이 표현할 수 있음.
// var a = 10, b;
// b = a++;
// console.log(b);
// b = ++a;
// console.log(b);
// b = a--;
// console.log(b);
// b = --a;
// console.log(b);


// var x;

// x = 10;
// console.log(x); //10

// x += 5;
// console.log(x); //x=10+5=15

// x -= 5;
// console.log(x); //x=15-5=10

// x *= 5;
// console.log(x); //x=10*5=50

// x /= 5;
// console.log(x); //x=50/5=10

// x %= 5;
// console.log(x); //x=10%5=0


// var str = 'My name is ';
// str += 'Lee';
// console.log(str); // str = My name is + Lee = My name is Lee


// var x = 105625;
// //var result = x % 2 ? '홀수' : '짝수';
// //if 문으로 변경시킬때 작성방법
// var result
// if (x % 2)
//     result = '홀수';
// else
//     result = '짝수';

// console.log(result);

//console.log('cat' && 'dog'); // 문자열 둘다 참일때 마지막 값 출력


// var a, b, c;
// a = '10';
// b = '20';
// c = a + b;
// console.log(c);

// console.log(2**3); //지수연산자
// console.log(Math.pow(2,3)); //자바스크립트에서 math함수를 모아놓은 클래스

// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let c = a.concat(b);
// console.log(c);

// c = [...a, ...b];
// console.log(c);


// var num = 0;
// var kind;

// if (num > 0) {
//     kind = '양수';
// } else if (num < 0) {
//     kind = '음수';
// } else {
//     kind = '영';
// }
// console.log(kind);
// alert(kind);
// document.write(kind);


// var num = 90;
// var kind;

// if (num >= 90) {
//     kind = '수';
// } else if (num >= 80) {
//     kind = '우';
// } else if (num >= 70) {
//     kind = '미';
// } else if (num >= 60) {
//     kind = '양';
// } else {
//     kind = '가';
// }
// console.log(kind);


// var num = 11;
// var kind;

// if (num % 2 == 0) {
//     console.log('짝수');
    
//     if (num % 4 == 0)
//         console.log('4의 배수');
//     else
//         console.log('4의 배수가 아니다.');
// } else {
//     console.log('홀수');

//     if (num % 3 == 0)
//         console.log('3의 배수');
//     else
//         console.log('3의 배수가 아니다.');
// }
// console.log('끝');


// var sum = 0; // var sum; 으로 작성하면 sum은 undefined 값을 갖기때문에 NaN 값이 출력됨.
// // 합과 같은 변수는 누적치가 필요하기 때문에 초기값이 필요함.

// for (var i = 1; i < 11; i++){
//     sum += i; // sum = sum + i
//     // console.log(sum);
// }
// console.log(sum);


// var even = 0;
// var odd = 0;

// for (var i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         even += i;
//     } else {
//         odd += i;
//     }
// }
// console.log(even, odd);


// var count = 0;
// for (var i = 1; i < 3; i++) {
//     for (var j = 1; j < 4; j++)
//         console.log(`i = ${i}, j = ${j}, count = ${++count}`)
// }
// var count = 0;
// var i = 1;
// for (; ;) {
//     if (i < 3) {
//         for (var j = 1; j < 4; j++) {
//             console.log(`i = ${i}, j = ${j}, count = ${++count}`)
//         }
//     } else {
//         break;
//     }
//     i++;
// }


// ◻️ for문 vs while문
// var sum = 0;
//
// for (var i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);
//
// var sum = 0;
// var i = 1; // 초기식
//
// while (i <= 10) { // 조건식
//     sum += i; // 반복처리할 내용
//     i++; //증감식
// }
// console.log(sum);

// var k = 0;
// for (var i = 1; i < 3; i++) {
//     for (var j = 1; j < 4; j++){
//         console.log(`i = ${i}, j = ${j}, k = ${++k}`);
//     }
// }

// var k = 0;
// var i = 1;
// while (i < 3) { 
//     var j = 1; // ✨ j가 반복문을 한 번 돌면 4로 마무리 되기때문에 i가 반복되지않음. 그래서 다시 j를 초기화!!! ✨
//     while (j < 4) {
//         console.log(`i = ${i}, j = ${j}, k = ${++k}`);    
//         j++;
//     }  
//     i++;
// }


// ◻️ 예제 08-16
// var count = 0;
// while (true) {
//     console.log(count);
//     count++;

//     if (count === 3) break;
// }

// ◻️ 예제 08-17
// var count = 0;
// do{
//     console.log(count);
//     count++
// } while (count < 3);

// ◻️ 예제 08-20
// foo : {
//     console.log(1);
//     break foo;
//     console.log(2);
// }
// console.log('Done!');

// ◻️ 예제 08-21
// outer :
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             // if (i + j === 3)
//             if (j === 1)
//                 break outer; // 레이블 안의 반복문 모두 탈출
//             console.log(`inner [${i}, ${j}]`);
//         }
//     }
// console.log('Done!')

// outer :
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             // if (i + j === 3)
//             if (j === 1)
//                 break; // break가 포함된 for문만 탈출
//             console.log(`inner [${i}, ${j}]`);
//         }
//     }
// console.log('Done!')

// outer :
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             // if (i + j === 3)
//             if (j === 1)
//                 continue; // continue시 j가 조건식을 만족하면 해당 반복문의 증감식으로 바로 이동
//             console.log(`inner [${i}, ${j}]`);
//         }
//     }
// console.log('Done!')

// outer :
//     for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {
//             // if (i + j === 3)
//             if (j === 1)
//                 continue outer; // continue + 레이블 시 outer 레이블의 증감식으로 바로 이동
//             console.log(`inner [${i}, ${j}]`);
//         }
//     }
// console.log('Done!')


// console.log(typeof `1 + 1 = ${1 + 1}`);


// 문자 타입으로 변환
// var a = 'AAA';
// var val = 10;
// var b = val.toString();
// var c = String(val);
// var d = val + '';

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);


// 숫자 타입으로 변환
// var a = '10';
// var b = Number(a);
// var c = parseInt(a);

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);


// 불리언 타입으로 변환
// var a = '10';
// var b = Boolean(a);
// var c = Boolean(100);
// var d = Boolean(0);
// var e = '';

// console.log(typeof a);
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d);
// console.log(typeof e, e);

// 단축평가
// console.log('Cat' || 'Dog');
// console.log(false || 'Dog');
// console.log('Cat' || false);

// console.log('Cat' && 'Dog');
// console.log(false && 'Dog');
// console.log('Cat' && false);

// ◻️ 10-01 [객체 리터럴]
// var person = {
//     name: 'Lee',                                            // 프로퍼티
//     age: 30,
//     sayHello: function (){                                  // 메서드
//         var name = 'aaaa'
//         console.log(`Hello! My name is ${this.name}.`);     // ✨this → 객체 자신을 가르킴 (내부에서 접근할때 꼭 필요)
//         console.log(`Hello! My age is ${this.age}.`);
//         console.log(`Hello! My name is ${name}.`);          // 함수 안의 name을 가르킴
//         console.log(`Hello! My tel is ${this.tel}.`);
//         str = `
//             <table border="1" align="center">
//                 <tr>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Tel</th>
//                 </tr>
//                 <tr>
//                     <td>${this.name}</td>
//                     <td>${this.age}</td>
//                     <td>${this.tel}</td>
//                 </tr>
//             </table>
//         `
//         return document.write(str);
//         // return;                                          // 호출한 문장을 자동으로 복귀하라. 복귀할 값이 없기 때문에 undefined 출력
//         // return 1;                                        // 함수를 사용하고 1 값을 저장하여 복귀
//     }
//     // sayHello(){                                                // function 키워드 생략한 축약표현 (ES6)
//     //     console.log(`Hello! My name is ${this.name}.`);
//     //     console.log(`Hello! My age is ${this.age}.`);
//     //     console.log(`Hello! My tel is ${this.tel}.`);
//     // }
// };

// // console.log(typeof person);
// // console.log(person);                                        
// // console.log(person.name);                                   // 프로퍼티 value 호출
// // console.log(person['name']);
// // console.log(person["name"]);
// // console.log(person[`name`]);
// // console.log(person.sayHello());                             // 메서드 실행 형식

// person.tel = "010-1111-1111"                                   // 객체 내부 구조 변경 가능 → 프로퍼티 동적
// console.log(person);
// console.log(person.tel);
// //console.log(person.sayHello());
// person.sayHello();                                              // table 제작 내용을 html에 호출


// var person = {
//     name: 'Lee',
//     printPerson() {
//         return document.write(`name = ${this.name}, age = ${this.age}`);
//     }
// }

// person.age = 20;
// //document.write(`name = ${person.name}, age = ${person.age}`);
// person.printPerson();

//================================================
// 12장. 함수
//================================================

// 함수 정의
// function add(x, y) {
//     return x + y;
// }
// // console.log(add(2, 5));
// var res = add(2,5);
// console.log(res);


// 함수 리터럴
// var f = function add(x, y){
//     return x + y;
// };

// var f = function(x, y){ // 함수 리터럴로 정의할때 함수의 이름을 생략할 수 있다. → ✨익명함수
//     return x + y;
// };
// console.log(f(5,5));


// 화살표 함수
// var f = (x, y) => x + y;
// console.log(f(2,2));

// var f = () => 2 + 5; // 파라미터 값이 꼭 필요한 것은 아니다.
// console.log(f());


// function add(x, y) {
//     return x + y;
// }
// console.dir(add);
// //var res = add(2,5)


// var add = function foo (x, y) {
//     return x + y;
// };
// console.log(add(2,5));
// console.log(foo(2,5)); // 함수리터럴에서는 함수이름을 직접적으로 호출할 수 없다. 그렇기때문에 익명함수 대부분 사용.


// 함수 호이스팅
// console.dir(add); // 실행문. 이미 선언되어있는 add를 실행
// console.dir(sub); // 선언되어있는 var sub 실행 → undefined

// console.log(add(2,5)); // 이미 함수 선언문이 선언되어있기 때문에 결과값 나옴.
// console.log(sub(2,5)); // 함수가 대입되기 전 호출 되기 때문에 Error 발생

// // 함수 선언문
// function add(x, y) {
//     return x + y;
// }
// // 함수 표현식
// var sub = function (x, y) {
//     return x - y;
// };


// console.log(a); // 이 문장만 존재시 Uncaught ReferenceError.
// var a = 10; // 이 문장과 함께 존재시 undefined.
// // 자바스크립트는 먼저 기술한 코드 부터 실행
// // 코드 실행 전 선언문을 먼저 평가 
// // ⁂ var a 먼저 확인 후 console.log(a) 실행 → undefined 실행 → 이후 변수에 값 할당 ✨변수 호이스팅!!


// function add(x, y) {
//     console.log(x, y);
//     return x + y;
// }

// add(2, 5);
// console.log(x, y); // Uncaught ReferenceError. ✨ 형식 매개변수는 함수 내에서만 사용 가능.


// function add(x, y=0) { // y=0 (default인자 = 기본인자)
//     console.log(x, y);
//     return x + y;
// }
// console.log(add(2)); // x = 2, y = undefined  ∴ NaN
// console.log(add(2, 5)); // x = 2, y = 5 / default 인수 값은 변경됨
// console.log(add(2, 5, 4)); // x = 2, y = 5 / 초과된 인수는 계산은 되지 않지만, 암묵적 arguments 객체 프로퍼티로 보관


// // ◻️ 예제 12-24
// function add(a, b, c) {
//     a = a || 0;
//     b = b || 0;
//     c = c || 0;
//     return a + b + c;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2)); // 입력되지 않은 값은 undefined → false 값이므로 0으로 출력  ∴ 단축평가
// console.log(add(1));
// console.log(add());


// // ◻️ 예제 12-27
// function multiply (x, y) {
//     // return x*y;
//     // console.log("AAA"); // return 이후 문장은 실행되지 않는다.

//     if (x - y < 0) {
//         return x * y;
//     }
//     else {
//         return x / y;
//     }
// }
// var result = multiply(10, 5);
// console.log(result);

// // ◻️ 예제 12-33
// function changeVal (primitive, obj) {
//     primitive += 100; // num값이 primitive에 저장되어 primitive 는 200
//     obj.name = 'Kim'; 
// }

// var num = 100;
// var person = {name: 'Lee'};

// console.log(num); // 100
// console.log(person); // {name: 'Lee'}

// changeVal(num, person);
// console.log(num); // 100 / num은 num값을 그대로 가져오기 때문에 100을 불러옴
// console.log(person); // {name: 'Kim'} / 객체(obj)는 새로운 값이 저장되었기 때문에 변경된 값을 가져옴.


// var multiply = (function foo(){
//     var a = 3;
//     var b = 5;
//     // console.log(a, b);
//     return a * b;
// }());
// console.log(multiply);

// var multiply = (function foo(a, b){
//     return a * b;
// }(3, 5));
// console.log(multiply);







