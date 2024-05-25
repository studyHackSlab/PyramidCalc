// 変数定義

const span = document.getElementsByTagName('span');

const top_number = Math.round((Math.floor(Math.random() * 100) + 100) / 10) * 10;
const second_left_number = Math.round((Math.floor(Math.random() * (top_number - 10)) + 10) / 10) * 10;
const second_right_number = top_number - second_left_number;
const second_min = second_left_number < second_right_number ? second_left_number : second_right_number;

const third_two_number = Math.round((Math.floor(Math.random() * (second_min - 10)) + 10) / 10) * 10;

const third_one_number = second_left_number - third_two_number;
const third_three_number = second_right_number - third_two_number;

console.log(span);

// 合計
span[0].innerHTML = top_number;

// ３と４の合計
span[1].innerHTML = second_left_number;

// ３と５の合計
span[2].innerHTML = second_right_number;

span[3].innerHTML = third_one_number;
span[4].innerHTML = third_two_number;
span[5].innerHTML = third_three_number;

for (let i = 1; i < span.length; i++) {
    if (Math.floor(Math.random() * 2)) {
        span[i].innerHTML = "　";
    }
}