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


// ◽ for문 vs while문
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


// ◽ 예제 08-16
// var count = 0;
// while (true) {
//     console.log(count);
//     count++;

//     if (count === 3) break;
// }

// ◽ 예제 08-17
// var count = 0;
// do{
//     console.log(count);
//     count++
// } while (count < 3);

// ◽ 예제 08-20
// foo : {
//     console.log(1);
//     break foo;
//     console.log(2);
// }
// console.log('Done!');

// ◽ 예제 08-21
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

// ◽ 10-01 [객체 리터럴]
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


// // ◽ 예제 12-24
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


// // ◽ 예제 12-27
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

// // ◽ 예제 12-33
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


// ◽ 예제 12-50
// function repeat1(n) {
//     for (var i = 0; i < n; i++) 
//         console.log(i);
// }
// repeat1(5);

// function repeat2(n) {
//     for (var i = 0; i < n; i++) 
//         if (i % 2) // 나머지가 0이면 False이므로 수행하지 않음 ∴ i가 홀수일 때만 출력
//             console.log(i);
// }
// repeat2(5);


// ◽ 예제 12-51
// // 고차함수 (콜백 함수를 전달 받은 함수)
// function repeat(n, f) { // n은 일반 매개변수, f는 함수를 파라미터로 전달받겠다. 이때 f가 ✨콜백함수
//     for (var i = 0; i < n; i++) {
//         f(i);
//     }
// }

// // 예제50의 공통 함수는 제외하고 달라진 부분만 함수로 다시 만들어 파라미터로 전달
// var logAll = function (i) { // 함수리터럴
//     console.log(i);
// };
// repeat(5, logAll);

// // var logOdds = function (i) {
// //     if (i % 2)
// //         console.log(i);
// // };
// repeat(5, function (i) { // 실매개변수 자리에도 함수를 넣을 수 있으나, 이렇게 작성시(익명함수) 한 번 밖에 사용 불가능
//     if (i % 2)           // 또한, 간단한 함수가 아니면 해석에 어려움이 있음
//         console.log(i);
// });


// ◽ 예제 12-54
// document.getElementById('myButton').addEventListener('click', function(){ // 이때 사용된 함수도 익명함수이며 콜백함수
//     console.log('button clicked!');
// });

// setTimeout(function(){          // 이렇게 사용한 것도 콜백함수
//     console.log('3초 경과'); 
// },3000); // 1000 = 1초


// ◽ 예제 13-02
    // var 변수
// var var1 = 1;           // 어디에나 접근할 수 있는 ✨전역변수

// if (true) {
//     var var2 = 2;       // 함수 바깥
//     if (true) {
//         var var2 = 3;   // 함수 바깥
//     }
// }

// function foo() {
//     var var4 = 4;       // 함수 내부

//     console.log(var1);
//     console.log(var2);
//     console.log(var3);
//     console.log(var4);
// }

// console.log(var1);
// console.log(var2);
// console.log(var3);
// // console.log(var4); // 함수 불러오기 전에 호출되므로 정의되지않은 오류
// console.log('===========================');
// foo();
// console.log(var4);      // 함수 내부에 존재하기때문에 불러올 수 없음 

    // let 변수
// var var1 = 1; 

// if (true) {
//     let var2 = 2;
//     console.log(var2);
//     if (true) {
//         let var3 = 3;
//         console.log(var3);
//         console.log(var2);
//     }
//     console.log(var2);
//     //console.log(var3);
// }

// function foo() {
//     let var1 = 4;       // 함수 내부

//     console.log(var1);
//     // console.log(var2);
//     // console.log(var3);
// }

// console.log(var1);
// // console.log(var2);
// // console.log(var3);
// console.log('===========================');
// foo();


// var var1 = 10
// for (let var2 = 1; var2 < 6; var2++) {  
//     console.log(var2);
// }
// console.log(var2);  // let은 for문 안에 적혀 for문의 코드블럭 안에서만 사용되므로 바깥에서 호출시 에러 발생


    // const 변수
// const var1 = 10;    // 이미 변수를 상수로 받았기 때문에 값을 변경할 수 없음
// console.log(var1);
// if (10) {                // if문안에 0이외의 숫자는 true로 인식
//     const var2 = 100;
//     console.log(var1);
//     console.log(var2);
// }
// console.log(var1);
// console.log(var2);      // let과 동일한 사용범위

// const var1 = function() {
//     console.log("AAA");
// };
// var1();


// var arr = [1,1,1,1]
// var arr = new Array(1,1,1,1);       // new Array(4) : 4개의 값을 저장할 수 있는 배열을 만든다는 의미(배열의 크기), 값은 입력되어있지않음
// var arr2 = new Array(1, 10.5, "AAA", {name:"Lee"});
// var hap = 0;
// for (let i = 0; i < arr.length; i++){
//     hap += arr[i]
//     console.log(arr2[i]);
// }
// console.log(hap);

// arr2[4] = "BBB"
// console.log(arr2[4]);

// var arr3 = [];  // 빈 배열 생성 = new Array();
// console.log(arr3.length);
// arr3[0] = 10;
// arr3[1] = "AAA";
// console.log(arr3.length);
// console.log(arr3[0], arr3[1], arr3[2]);
// console.log('==============================')

// arr3[5] = "BBB";
// for (let i = 0; i < arr3.length; i++){
//     console.log(arr3[i]);
// }
// console.log('==============================')
// delete arr3[1];
// for (let i = 0; i < arr3.length; i++){
//     console.log(arr3[i]);
// }


// ◽ 예제 27-40
// const arr = [1, 2, 3, 4, 5];
// arr[0] = 10;            // const 변수 사용시 객체 내부의 요소를 바꾸는 것은 가능
// // arr = [10, 20, 30];  // 객체 자체를 바꾸는 것은 불가능 → Error 발셍
// console.log(arr.length);
// console.log(arr);
// arr.splice(1,3);
// console.log(arr.length);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// ◽ 예제 27-43
// const arr = [1, 2, 4, 5, 6, 2, 3];
// console.log(arr.indexOf(2));    // 중복된 값이 존재시 첫번째 값의 인덱스 반환
// console.log(arr.indexOf(4));    // 음수 결과값은 값이 없다는 이야기
// console.log(arr.indexOf(2, 2)); // 두번째 인수는 검색을 시작할 인덱스


// push & pop → 스택(stack) 메모리 구조에서 주로 사용
// const arr = [1, 2];
// var result = arr.push(3, 4, 5);  // push는 배열의 마지막 값 이후에 추가
// console.log(result);
// console.log(arr);

// var result = arr.pop();   // pop은 배열 마지막 값을 추출하고, 삭제함
// console.log(arr);

// 참고. 스택 메모리 구조
// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);

// for (let i = 0; i < 3; i++) {
//     console.log(arr.pop());  // 입력된 데이터값을 마지막 값부터 역순으로 추출
// }


// unshift & shift → 큐(Queue) 메모리 구조에서 주로 사용
// const arr = [1, 2];
// var result = arr.unshift(3, 4);
// console.log(arr);

// var result = arr.shift();
// console.log(arr);

// 참고. 큐 메모리 구조
// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);

// for (let i = 0; i < 3; i++) {
//     console.log(arr.shift());   // 입력된 데이터값을 첫번째 값부터 순차적으로 추출
// }


// concat
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// let result = arr1.concat(arr2);
// console.log(result);
// console.log(arr1);
// console.log(arr2);


// splice ◽ 예제 27-61
// const arr = [1, 2, 3, 4];
// const result = arr.splice(1, 2, 20, 30);
// console.log(result);
// console.log(arr);


// filter ◽ 예제 27-66
// const arr = [1, 2, 3, 1, 2];
// function removeAll(array, item) {
//     return array.filter(v => v !== item);
// }
// console.log(removeAll(arr, 2));


// join ◽ 예제 27-75
// const arr = [1, 2, 3, 4];
// console.log(arr.join());
// console.log(arr.join(''));
// console.log(arr.join(':'));


// reverse ◽ 예제 27-76
// const arr = [1, 2, 3];
// console.log(arr);
// const result = arr.reverse();
// console.log(result);

// sort ◽ 예제 27-87
// const fruits = ['Banana', 'Orange', 'Apple'];
// fruits.sort();
// console.log(fruits);
// fruits.reverse();
// console.log(fruits);

// const points = [40, 100, 1, 5, 2, 25, 10]
// points.sort((a, b) => b-a);
// console.log(points);

// const todos = [
//     {id: 4, content: 'JavaScript'},
//     {id: 1, content: 'HTML'},
//     {id: 2, content: 'CSS'}
// ];

// function compare(key) {
//     return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
// }

// todos.sort(compare('content'));
// console.log(todos);


// forEach
// const numbers = [1, 2, 3];
// let pows = [];

// // for (let i = 0; i < numbers.length; i++) {
// //     pows.push(numbers[i] ** 2);
// // }
// numbers.forEach(item => pows.push(item ** 2));  // 위의 for문과 같은 구조. numbers의 요소만큼 반복 수행
// console.log(pows);


// map ◽ 예제 27-106
// const numbers = [1, 4, 9];
// const roots = numbers.map(item => Math.sqrt(item));
// console.log(roots);
// console.log(numbers);


// recuce ◽ 예제 27-113
// const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) =>
//                                 accumulator + currentValue, 0);
// console.log(sum);


// date
// console.log(new Date());
// console.log(new Date(2020, 2));
// console.log(new Date(2020, 2, 26, 10, 00, 00));
// console.log(new Date(Date.now()));

// ◽ 예제 30-32 / Date를 활용한 시계 예제
// (function printNow() {
//     const today = new Date();

//     const dayNames = [
//         '(일요일)',
//         '(월요일)',
//         '(화요일)',
//         '(수요일)',
//         '(목요일)',
//         '(금요일)',
//         '(토요일)'
//     ];

//     const day = dayNames[today.getDay()];

//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     const date = today.getDate();
//     let hour = today.getHours();
//     let minute = today.getMinutes();
//     let second = today.getSeconds();
//     const ampm = hour >= 12 ? 'PM' : 'AM';

//     hour %= 12;
//     hour = hour || 12;

//     minute = minute < 10 ? '0' + minute : minute;
//     second = second < 10 ? '0' + second : second;

//     const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

//     console.log(now);

//     setTimeout(printNow, 1000);
// }());


// const strObj = new String("MBC");
// console.log(strObj);
// console.log(strObj[0]);
// strObj[0] = "m";
// console.log(strObj);

// const strObj2 = "KBS";
// console.log(strObj2[0]);
// strObj2[0] = "k";
// console.log(strObj2);


// const str = 'Hello World';
// console.log(str.indexOf('ld'));  // 9

// const num = '123456-1234567'
// // console.log(num.indexOf('-') +1);   // 7
// // console.log(num.charAt(num.indexOf('-')+1)); // 1
// // for (let i = 0; i < num.length; i++) {
// //     console.log(num.charAt(i));
// // }
// console.log(num.substring(0, 2));
// console.log(num.substring(7));
// console.log(num.slice(-7));