// document.write("Hello World!");
// var a = 10;
// var b = 3;
// var result = a < b ? "javascript" : "hello";
// document.write(result);

// var height = 180;
// var weight = 74;
// var normal = (height - 100) * 0.9;
// if (weight >= normal) {
//     document.write("결과 : 적정체중은 " + normal + "이며, 현재 적정 체중에서 " + (weight - normal) + "kg 초과한 것을 알 수 있습니다.");
// } else {
//     document.write("결과 : 적정체중은 " + normal + "이며, 현재 적정 체중에서 " + (normal - weight) + "kg 모자란 것을 알 수 있습니다.");
// }

// var name = prompt("당신의 이름은?", "");
// var height = prompt("당신의 키는?", "0");
// var weight = prompt("당신의 몸무게는?", "0");
// var normal = (height - 100) * 0.9;
// var result = weight > normal - 5 && weight < normal + 5;
// result = result ? "적정체중입니다." : "적정 체중이 아닙니다.";
// document.write(name + "님은 " + result);

//교통비, 식비, 음료비를 입력받고 다 합한게 만원이 넘을시 000원 초과 출력 안 넘으면 돈관리를 잘하셨네요!!출력
// var transport = prompt("교통비", "0");
// var meal = prompt("식비", "0");
// var beverage = prompt("음료비", "0");
// var sum = (transport + meal + beverage) < 10000;
// sum = sum ? "돈 관리를 잘하셨네요!!" : ((Number(transport) + Number(meal) + Number(beverage)) - 10000) + "원 초과";
// document.write(sum);

//평균 판매량 구하고 4분기 판매량 입력해서 평균 판매량 이상/미달 값 출력
// var season1 = 1200;
// var season2 = 1300;
// var season3 = 1000;
// var season4 = prompt("4분기 판매량을 입력해 주세요.", "0");
// var str = "<table border = 0>";
// str += "<tr>";
// str += "<td></td><td>판매량</td>";
// str += "</tr>";
// str += "<tr>";
// str += "<td>1분기</td><td>" + season1 + "</td>";
// str += "</tr>";
// str += "<tr>";
// str += "<td>2분기</td><td>" + season2 + "</td>";
// str += "</tr>";
// str += "<tr>";
// str += "<td>3분기</td><td>" + season3 + "</td>";
// str += "</tr>";
// str += "<tr>";
// str += "<td>4분기</td><td>" + season4 + "</td>";
// str += "</tr>";
// str += "</table>"   
// var average = (season1 + season2 + season3) / 3;
// var result = average < season4;
// result = result ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";
// document.write(result);
// document.write(str);

// var i = 20;
// while(i >= 10) {
//     if(i % 2 == 0) {
//         document.write("<p class='blue'>" + i + "</p>");
//     }
//     else {
//         document.write("<p class='red'>" + i + "</p>");
//     }

//     i--;
// }

//while문 사용해서 구구단 5단 출력하기
// var i = 1;
// while(i < 10) {
//     document.write("5 * " + i + " = " + (5 * i) + "<br>");
//     i++;
// }

//for문 사용해서 5행 5열 표 만들고 데이터가 1부터 25까지 출력되도록 한다.
var num = 1;
var str = "<table border = '1'>";
for (var i = 1; i <= 5; i++) {
    str += "<tr>";
    for(var k = 1; k <= 5; k++) {
        str += "<td>" + num + "</td>";
        num++;
    }
    str += "</tr>";
}
str += "</table>";
document.write(str);
