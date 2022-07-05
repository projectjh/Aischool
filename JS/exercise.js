
//=====================================================================================================================
// Q. 임의의 두 수를 입력받아 최솟값, 최댓값을 구하고 그 사이의 소수 출력
//=====================================================================================================================

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



//=====================================================================================================================
// Q. prompt 활용한 table 만들기
//=====================================================================================================================

// var hakbun = prompt("학번을 입력하세요.");
//         var name = prompt("이름을 입력하세요.");
//         var kor = parseInt(prompt("국어점수를 입력하세요."));
//         var eng = parseInt(prompt("영어점수를 입력하세요."));
//         var math = parseInt(prompt("수학점수를 입력하세요."));
//         var sum = (kor + eng + math);
//         var avg = sum/3;
//         var grade;
//         // if (avg >= 90) {
//         //     grade = '수';
//         // } else if (avg >= 80) {
//         //     grade = '우';
//         // } else if (avg >= 70) {
//         //     grade = '미';
//         // } else if (avg >= 60) {
//         //     grade = '양';
//         // } else {
//         //     grade = '가';
//         // }

//         // switch (true){
//         //     case (avg >=90): grade = '수';
//         //     break;
//         //     case (avg >=80): grade = '우';
//         //     break;
//         //     case (avg >=70): grade = '미';
//         //     break;
//         //     case (avg >=60): grade = '양';
//         //     break;
//         //     defalt: grade = '가';
//         // }

//         switch (parseInt(avg / 10)){
//             case 10:
//             case 9:
//                 grade = "수";
//                 break;
//             case 8:
//                 grade = "우";
//                 break;
//             case 7:
//                 grade = "미";
//                 break;
//             case 6:
//                 grade = "양";
//                 break;
//             default:
//                 grade = "가";
//                 break;
//         }

//         // document.write('<table border="1"><tr><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>총점</th><th>평균</th><th>등급</th>');
//         // document.write('<tr><td>' + hakbun + '</td>');
//         // document.write('<td>' + name + '</td>');
//         // document.write('<td>' + kor + '</td>');
//         // document.write('<td>' + eng + '</td>');
//         // document.write('<td>' + math + '</td>');
//         // document.write('<td>' + sum + '</td>');
//         // document.write('<td>' + avg + '</td>');
//         // document.write('<td>' + grade + '</td></tr></table>');

//         document.write(`
//             <table border="1" style="width:60%;">
//                 <tr>
//                     <th>학번</th>
//                     <th>이름</th>
//                     <th>국어</th>
//                     <th>영어</th>
//                     <th>수학</th>
//                     <th>총점</th>
//                     <th>평균</th>
//                     <th>등급</th>
//                 </tr>
//                 <tr>
//                     <td>${hakbun}</td>
//                     <td>${name}</td>
//                     <td>${kor}</td>
//                     <td>${eng}</td>
//                     <td>${math}</td>
//                     <td>${sum}</td>
//                     <td>${avg}</td>
//                     <td>${grade}</td>
//                 </tr>
//             </table>
//         `);



//=====================================================================================================================
// Q. 성적 데이터를 객체로 형성 
//=====================================================================================================================

// var person = {      // person은 8개의 특성과 3개의 메서드를 가진 객체
//     hakbun: '',
//     name: '',
//     kor: 0,
//     eng: 0,
//     math: 0,
//     sum: 0,
//     avg: 0.0,
//     grade: '',

//     getSum() {
//         this.sum = this.kor + this.eng + this.math;
//     },

//     getAvg() {
//         this.avg = this.sum / 3
//     },

//     getGrade() {
//         switch (parseInt(this.avg / 10)) {
//             case 10:
//             case 9:
//                 this.grade = '수';
//                 break;
//             case 8:
//                 this.grade = '우';
//                 break;
//             case 7:
//                 this.grade = '미';
//                 break;
//             case 6:
//                 this.grade = '양';
//                 break;
//             default:
//                 this.grade = '가';
//                 break;      
//         }
//     },
//     printData() {
//         str = `
//             <table border="1" align="center">
//                 <tr>
//                     <th>학번</th>
//                     <th>이름</th>
//                     <th>국어</th>
//                     <th>영어</th>
//                     <th>수학</th>
//                     <th>총점</th>
//                     <th>평균</th>
//                     <th>등급</th>
//                 </tr>
//                 <tr>
//                     <td>${this.hakbun}</td>
//                     <td>${this.name}</td>
//                     <td>${this.kor}</td>
//                     <td>${this.eng}</td>
//                     <td>${this.math}</td>
//                     <td>${this.sum}</td>
//                     <td>${this.avg}</td>
//                     <td>${this.grade}</td>
//                 </tr>
//             </table>
//         `
//         return document.write(str);
//     }
// }

// // 값 입력받기
// person.hakbun = prompt('학번 입력');
// person.name = prompt('이름 입력');
// person.kor = parseInt(prompt('국어 점수 입력'));
// person.eng = parseInt(prompt('영어 점수 입력'));
// person.math = parseInt(prompt('수학 점수 입력'));

// // 메서드 호출
// person.getSum();
// person.getAvg();
// person.getGrade();
// person.printData();


//=====================================================================================================================
// Q. 최솟값, 최댓값 입력받아 최솟값~최댓값 구구단 출력
//=====================================================================================================================

// // 1. 값 넣어줄 입력창 만들기
// var num1 = parseInt(prompt("첫번째 숫자를 입력하세요."));
// var num2 = parseInt(prompt("두번째 숫자를 입력하세요."));

// // 2. 테이블 구조 형성
// document.write(`
//     <table border="1">
//         <tr>
// `);

// // 3. 최솟값, 최댓값 구하기
// var min = 0;
// var max = 0;

// if (num1 > num2) {
//     max = num1;
//     min = num2;
// } else {
//     max = num2;
//     min = num1;
// }

// // 4. 최솟값 ~ 최댓값 단 출력
// for (var j = min; j <= max; j++) {
//     document.write(`<th>${j}단</th>`);
// }
// document.write(`
//         </tr>
// `);
// // 5. 구구단 반복 출력 (최솟값은 위 반복문에서 사용했기때문에 초기화 필요! 변수 선언.)
// for (var i = 1; i < 10 ; i++) {
//     document.write(`
//             <tr align = "center">
//     `);
//     for (var j = min ; j <= max; j++) {
//         document.write(`<td>${j}*${i}=${j*i}</td>`);
//     }
//     document.write(`
//             </tr>
//     `); // 반복문 안에서 닫아주지않으면 한줄로 출력됨, <tr>, </tr> 중 하나만 반복문 안에 들어가면 반복해서 출력됨.
// }

// // 6. 테이블 닫기
// document.write(`
//     </table>
// `);



//=====================================================================================================================
// 함수를 활용한 구구단 계산
//=====================================================================================================================

// 값 넣어줄 입력창을 함수로 선언
// function input_number() {
//     var x, y; // 함수 내부에서 선언된 var은 지역변수로 함수 내부에서만 동작하는 변수임 → 지역변수
//     x = parseInt(prompt("첫번째 숫자를 입력하세요."));
//     y = parseInt(prompt("두번째 숫자를 입력하세요."));

//     return {num1:x, num2:y}; // 두개의 값을 입력받아 객체에 넣어줌 (return은 값 1개밖에 보낼 수 없기 때문에)
// }

// // 최솟값, 최댓값 구하는 함수 선언
// function compare_number(num1, num2) {
//     var min_num, max_num;

//     if (num1 > num2) {
//         min_num = num2;
//         max_num = num1;
//     } else {
//         min_num = num1;
//         max_num = num2;
//     }

//     return {min:min_num, max:max_num};
// }

// // 구구단 출력 함수 생성
// function gugudan_proc (min, max) {
//     var i, j;

//     document.write(`
//         <table border="1" align="center">
//             <tr>
//     `);
    
//     for (var j = min; j <= max; j++) {
//         document.write(`<th>${j}단</th>`);
//     }
//     document.write(`</tr>`);
    
//     for (var i = 1; i < 10 ; i++) {
//         document.write(`<tr align = "center">`);
//         for (var j = min ; j <= max; j++) {
//             document.write(`<td>${j}*${i}=${j*i}</td>`);
//         }
//         document.write(`</tr>`);
//     }
//     document.write(`</table>`);
// }

// // 구구단 함수 생성
// function gugudan () {
//    // var num1, num2, min, max; // 구구단 함수가 완료되면 지역변수는 자동으로 사라짐

//     var num = input_number(); // 넣어준 값이 입력된 함수를 호출해서 num 변수에 넣어줌 → num1과 num2를 key로 갖는 객체가 저장됨
//     // num1 = num.num1; // 불러온 함수값을 다시 num1과 num2 변수에 넣어줌
//     // num2 = num.num2;

//     //var min_max = compare_number(num1, num2); // 최솟값, 최댓값 함수 호출 → min,max를 key로 갖는 객체가 저장됨
//     var min_max = compare_number(num.num1, num.num2); // num1, num2를 따로 저장할 필요 없이 바로 불러와서 사용할 수 있다.
//     // min = min_max.min; // 불러온 함수값을 다시 min, max 변수에 넣어줌
//     // max = min_max.max;

//     // gugudan_proc(min, max); // 구구단 출력문 함수를 호출하고 나면 끝나기 때문에 return 값이 필요없음
//     gugudan_proc(min_max.min, min_max.max);
// }

// gugudan();  // 구구단 함수 호출



//=====================================================================================================================
// 함수를 활용한 소수 출력
//=====================================================================================================================

// // 1. 두 수를 입력받는 함수
// function input_data() {
//     var x, y;
//     x = parseInt(prompt('첫번째 숫자'));
//     y = parseInt(prompt('두번째 숫자'));
//     return {num1:x, num2:y};
// }

// // 2. 큰 값과 작은 값을 구하는 함수
// function minmax_proc(num1, num2) {
//     var min_num, max_num;
//     if (num1 > num2) {
//         min_num = num2;
//         max_num = num1;
//     } else {
//         min_num = num1;
//         max_num = num2;
//     }
//     return {min:min_num, max:max_num};
// }

// // 3. 소수 구해서 출력하는 함수
// function prime_number(min, max) {
//     var i, j;
//     var count = 0;
//     for (var i = min; i <= max; i++) { 
//         for (var j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 break; 
//             }
//         }
    
//         if (i == j) {
//             console.log(i);
//             count++;
//         }
//     }
    
//     return count;
// }

// // 4. 총 소수의 개수를 출력하는 함수
// function total_count(cnt) {
//     console.log(`총 소수의 개수 = ${cnt}`);
// }

// // ∴ 소수와 총 개수 출력 (함수로 묶어도 안묶어도 상관은 없음) → 실행 시작은 여기서부터
// var num = input_data();
// var minmax = minmax_proc(num.num1, num.num2);
// // var primenum = prime_number(minmax.min, minmax.max);
// // total_count(primenum);
// total_count(prime_number(minmax.min, minmax.max)); // 반환값이 없기 때문에 굳이 변수안에 넣어줄 필요가 없다.


// →→→→→→→→→→→→ 화살표 함수로 변경
// 1. 두 수를 입력받는 함수
// const input_data = () => {
//     x = parseInt(prompt('첫번째 숫자'));
//     y = parseInt(prompt('두번째 숫자'));
//     return {num1:x, num2:y};
// };

// // 2. 큰 값과 작은 값을 구하는 함수
// var minmax_proc = (num1, num2) => {
//     var min_num, max_num;
//     if (num1 > num2) {
//         min_num = num2;
//         max_num = num1;
//     } else {
//         min_num = num1;
//         max_num = num2;
//     }
//     return {min:min_num, max:max_num};
// };

// // 3. 소수 구해서 출력하는 함수
// const prime_number = (min, max) => {
//     var i, j;
//     var count = 0;
//     for (var i = min; i <= max; i++) { 
//         for (var j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 break; 
//             }
//         }
    
//         if (i == j) {
//             console.log(i);
//             count++;
//         }
//     }
    
//     return count;
// };

// // 4. 총 소수의 개수를 출력하는 함수
// var total_count = (cnt) => console.log(`총 소수의 개수 = ${cnt}`);

// // ∴ 소수와 총 개수 출력 (함수로 묶어도 안묶어도 상관은 없음) → 실행 시작은 여기서부터
// var num = input_data();
// var minmax = minmax_proc(num.num1, num.num2);
// total_count(prime_number(minmax.min, minmax.max));


// →→→→→→→→→→→→ 함수 리터럴로 변경
// // 1. 두 수를 입력받는 함수
// var input_data = function() {
//     x = parseInt(prompt('첫번째 숫자'));
//     y = parseInt(prompt('두번째 숫자'));
//     return {num1:x, num2:y};
// };

// // 2. 큰 값과 작은 값을 구하는 함수
// var minmax_proc = function (num1, num2) {
//     var min_num, max_num;
//     if (num1 > num2) {
//         min_num = num2;
//         max_num = num1;
//     } else {
//         min_num = num1;
//         max_num = num2;
//     }
//     return {min:min_num, max:max_num};
// };

// // 3. 소수 구해서 출력하는 함수
// var prime_number = function(min, max) {
//     var i, j;
//     var count = 0;
//     for (var i = min; i <= max; i++) { 
//         for (var j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 break; 
//             }
//         }
    
//         if (i == j) {
//             console.log(i);
//             count++;
//         }
//     }
    
//     return count;
// };

// // 4. 총 소수의 개수를 출력하는 함수
// var total_count = function (cnt) {
//     console.log(`총 소수의 개수 = ${cnt}`);
// };

// // ∴ 소수와 총 개수 출력 (함수로 묶어도 안묶어도 상관은 없음) → 실행 시작은 여기서부터
// var num = input_data();
// var minmax = minmax_proc(num.num1, num.num2);
// total_count(prime_number(minmax.min, minmax.max));



//=====================================================================================================================
// Q. 주민번호를 입력받아 올바른 주민번호이면 O[형식:123456-1234567(O)]를 
//    잘못된 주민번호이면 X[형식:123456-1234567(X)]를 출력하는 프로그램을 작성하시오.
//=====================================================================================================================

// "123456-1234563"
// 마지막 숫자(체크디지트)는 계산에서 제외
// 각 위치에 가중치 부여 (234567 892345)
// 1. 입력된 숫자와 위치 가중치의 합을 구한다. ex) 합 = 1*2 + 2*3 + ... + 6*5
// 2. 나머지를 구한다. ex) 합 % 11
// 3. 체크 디지트 구한다. ex) 11 - 나머지 
//    나머지가 0, 1인 경우 11, 10 두자리 수이기 때문에 11 → 1, 10 → 0으로 변경하면된다.
// 4. 구한 체크디지트와 입력한 체크디지트 값이 같으면 올바른 주민번호이다.


// var rnum = prompt('주민번호를 입력하세요.');
// const number = rnum.replace('-', '');           // 입력받은 주민번호에서 '-' 제거
// // console.log(number);

// var sum = 0;    
// var weight = 2;                                 // 가중치 계산은 2~9까지 이므로 기본값 2부터 시작

// for (let i = 0; i < number.length-1; i++) {     // number의 길이-1 = 12, 인덱스번호로 마지막 숫자 빼고 비교해야하기때문에 0~11까지만 반복문
//     // console.log(number[i]);
//     sum += number[i]*weight                     // 각 자리수 * 가중치의 합을 누적  / 암묵적변환으로 정수형으로 알아서 변환되어 계산
//     weight++;                                   // 반복문 돌리면서 가중치 +1씩

//     if (weight == 10) {                         // 가중치는 9까지 돌아야하므로 10이되면 다시 2로 값을 변경
//         weight = 2;
//     }
// }
// // console.log(sum);

// var rest = sum % 11;
// // console.log(rest);
// var check = (11 - rest) % 10;                   // 10, 11은 일의자리수만 남기고 비교해야하기때문에 10으로 나눈 나머지 구해서 비교
// if (number[12] == check) {
//     console.log(`${rnum} (O)`);
// } else {
//     console.log(`${rnum} (X)`);
// }


//////////////// answer
// let jumin = prompt('주민번호를 입력해주세요.');
// let w=2, hap=0, chk;

// for (let i = 0; i < jumin.length-1; i++) {
//     if (i == 6)
//         continue;

//     hap += parseInt(jumin.substring(i, i+1)) * w;   // substring(i, i+1)로 하나씩 값 하나씩 추출
//     w++;

//     if (w == 10)
//         w = 2;
// }

// chk = 11 - (hap % 11);

// if (chk == 10)
//     chk = 0;
// else if (chk == 11)
//     chk = 1;

// if (chk == parseInt(jumin.substring(13, 14)))
//     str = jumin + " (O)";
// else
//     str = jumin + " (X)";

// console.log(str);