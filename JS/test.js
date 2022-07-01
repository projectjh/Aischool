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

//---------------------------------------------------------------------------------------------------
// Q. 임의의 두 수를 입력받아 최솟값, 최댓값을 구하고 그 사이의 소수 출력
// var num1 = parseInt(prompt('첫번째 숫자'));
// var num2 = parseInt(prompt('두번째 숫자'));

// var min, max, count = 0;

// if (num1 > num2) {
//     min = num2;
//     max = num1;
// } else {
//     min = num1;
//     max = num2;
// }

// for (var i = min; i <= max; i++) { 
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) {
//             break; 
//             // ex. i=10일때, j를 2,3,4,5,6,7,8,9,10 하나씩 대입해서 나눠서 나머지 확인
//             // 나머지가 0이면 나눠지는 수로 소수가 아니기때문에  break로 탈출
//         }
//     }
//     // i와 j가 같으면 나눠지는 값이 자기자신만 있기 때문에 소수가 맞으므로 출력. count하나씩 올려주기.
//     if (i == j) {
//         console.log(i);
//         count++;
//     }
// }
// console.log(`총 소수의 개수 = ${count}`)

// // for <-> while 문으로 변경
// var i = min;                                // 1) 첫번째 반복문 초기식 선언
// while (i <= max) {                          // 2) 첫번째 반복문 조건식 선언
//     var j = 2;                              // a) 두번째 반복문 초기식 선언
    
//     while (j < i) {                         // 3) 첫번째 반복문 반복처리할 내용 선언1 / b) 두번째 반복문 조건식 선언
//         if (i % j == 0) {                   // c) 두번째 반복문 반복처리할 내용 선언
//             break;
//         }
//         j++;                                // d) 두번째 반복문 증감식 선언
//     }

//     if (i == j) {                           // 3) 첫번째 반복문 반복처리할 내용 선언2
//         console.log(i);
//         count++;
//     }
    
//     i++;                                    // 4) 첫번째 반복문 증감식 선언
// }
// console.log(`총 소수의 개수 = ${count}`);

// do...while 문으로 변경
// var i = min;
// do {
//     var j = 2;
//     do {
//         if (i % j == 0) {
//             break;
//         }
//         j++;
//     } while (j < i);

//     if (i == j) {
//         console.log(i);
//         count++;
//     }

//     i++;
// } while (i <= max);
// console.log(`총 소수의 개수 = ${count}`);
//--------------------------------------------------------------------------------------------


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

// person.tel = "010-1111-1111"                                   // 객체 내부 구조 변경 가능 → 프로퍼티 동적 생성
// console.log(person);
// console.log(person.tel);
// //console.log(person.sayHello());
// person.sayHello();                                              // table 제작 내용을 html에 호출


// Q. 성적 데이터를 객체로 형성 
var person = {      // person은 8개의 특성과 3개의 메서드를 가진 객체
    hakbun: '',
    name: '',
    kor: 0,
    eng: 0,
    math: 0,
    sum: 0,
    avg: 0.0,
    grade: '',

    getSum() {
        this.sum = this.kor + this.eng + this.math;
    },

    getAvg() {
        this.avg = this.sum / 3
    },

    getGrade() {
        switch (parseInt(this.avg / 10)) {
            case 10:
            case 9:
                this.grade = '수';
                break;
            case 8:
                this.grade = '우';
                break;
            case 7:
                this.grade = '미';
                break;
            case 6:
                this.grade = '양';
                break;
            default:
                this.grade = '가';
                break;      
        }
    },
    printData() {
        str = `
            <table border="1" align="center">
                <tr>
                    <th>학번</th>
                    <th>이름</th>
                    <th>국어</th>
                    <th>영어</th>
                    <th>수학</th>
                    <th>총점</th>
                    <th>평균</th>
                    <th>등급</th>
                </tr>
                <tr>
                    <td>${this.hakbun}</td>
                    <td>${this.name}</td>
                    <td>${this.kor}</td>
                    <td>${this.eng}</td>
                    <td>${this.math}</td>
                    <td>${this.sum}</td>
                    <td>${this.avg}</td>
                    <td>${this.grade}</td>
                </tr>
            </table>
        `
        return document.write(str);
    }
}

// 값 입력받기
person.hakbun = prompt('학번 입력');
person.name = prompt('이름 입력');
person.kor = parseInt(prompt('국어 점수 입력'));
person.eng = parseInt(prompt('영어 점수 입력'));
person.math = parseInt(prompt('수학 점수 입력'));

// 메서드 호출
person.getSum();
person.getAvg();
person.getGrade();
person.printData();


