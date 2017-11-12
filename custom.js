$(document).ready(function() {


const $about = $('#about_me');
const $front_end = $('#f_e_d');
const $back_end = $('#b_e_d');
const $personal_projects = $('#p_p');

let h2_list = [$about, $front_end, $back_end, $personal_projects];

let previous = 0;
let current = 1;

setInterval(() => {
    h2_list[previous].css("color", "#ff48c4");
    h2_list[current].css("color", "white");

    previous = previous + 1;
    current = current + 1;

    if(current >= h2_list.length) {
        current = 0;
    }

    if(previous >= h2_list.length) {
        previous = 0;
    }

}, 1000);


});