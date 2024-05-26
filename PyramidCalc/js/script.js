document.addEventListener("DOMContentLoaded", (event) => {

    // 変数定義
    const span = document.getElementsByTagName('span');
    const input_number = document.getElementsByName('input_number');
    const check = document.getElementById('check');

    const top_number = Math.round((Math.floor(Math.random() * 100) + 100) / 10) * 10;
    const second_left_number = Math.round((Math.floor(Math.random() * (top_number - 10)) + 10) / 10) * 10;
    const second_right_number = top_number - second_left_number;
    const second_min = second_left_number < second_right_number ? second_left_number : second_right_number;

    const third_two_number = Math.round((Math.floor(Math.random() * (second_min - 10)) + 10) / 10) * 10;

    const third_one_number = second_left_number - third_two_number;
    const third_three_number = second_right_number - third_two_number;

    // const fourth_one_number = 0;
    // const fourth_two_number = 0;
    // const fourth_three_number = 0;
    // const fourth_four_number = 0;

    // console.log(span);
    // console.log(input_number);

    // 合計
    input_number[0].value = top_number;

    // ３と４の合計
    input_number[1].value = second_left_number;

    // ３と５の合計
    input_number[2].value = second_right_number;

    input_number[3].value = third_one_number;
    input_number[4].value = third_two_number;
    input_number[5].value = third_three_number;

    // 合計
    // span[0].innerHTML = top_number;

    // ３と４の合計
    // span[1].innerHTML = second_left_number;

    // ３と５の合計
    // span[2].innerHTML = second_right_number;

    // span[3].innerHTML = third_one_number;
    // span[4].innerHTML = third_two_number;
    // span[5].innerHTML = third_three_number;

    for (let i = 1; i < input_number.length; i++) {
        // for (let i = 1; i < span.length; i++) {
        if (Math.floor(Math.random() * 2)) {
            // span[i].innerHTML = "　";
            input_number[i].value = "";
            input_number[i].style.backgroundColor = "#000";
            input_number[i].style.color = "#fff";
            // console.log(i);
            input_number[i].style.pointerEvents = "auto";
        }
    }

    check.addEventListener('click', function () {
        const top_number = Number(input_number[0].value);
        const second_left_number = Number(input_number[1].value);
        const second_right_number = Number(input_number[2].value);
        const third_one_number = Number(input_number[3].value);
        const third_two_number = Number(input_number[4].value);
        const third_three_number = Number(input_number[5].value);

        if (top_number == second_left_number + second_right_number
            && second_left_number == third_one_number + third_two_number
            && second_right_number == third_two_number + third_three_number) {
            console.log("OK");
            alert("正解！");
        } else {
            alert("不正解！")
        }
        // console.log(input_number[0].value);
        // console.log(input_number[1].value);
        // console.log(input_number[2].value);
        // console.log(input_number[3].value);
        // console.log(input_number[4].value);
        // console.log(input_number[5].value);

    }, false);

});