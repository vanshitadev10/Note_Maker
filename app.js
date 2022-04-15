$(document).ready(() => {


    //  Show Starting Page Only Once!


    const count = 0;
    let cnt = 0;
    keys = Object.keys(localStorage);
    let m = keys.length;
    if (m === 0) {
        $('.begin').show();
        $('.read_area').hide();
        $('.main_page').hide();
        $('.btn').click(() => showPage());
    }
    else {
        for (let i = 0; i < m; i++) {
            if (!keys[i].includes('note-')) {
                count++;

            }
        }

        if (count === m) {
            $('.begin').show();
            $('.read_area').hide();
            $('.main_page').hide();
            $('.btn').click(() => showPage());
        }
        else {
            $('.begin').hide();
            $('.read_area').hide();
            $('.main_page').css('display', 'grid');
            showPage()
        }

    }




    //  Previous Notes Editing Buttons


    function showPage() {
        $('.begin').hide();
        $('.read_area').hide();
        $('.main_page').css('display', 'grid');
        keys = Object.keys(localStorage);
        let n = keys.length;
        for (let i = 0; i < n; i++) {
            if (keys[i].includes('note-')) {
                $('.saved').prepend(`<div class="sticker">
            <div>
            <button class="editing_options" id=${keys[i]}edt1><img src="Images/read.png"></button>
            <button class="editing_options" id=${keys[i]}edt2><img src="Images/edit.png"></button>
            <button class="editing_options" id=${keys[i]}edt3><img src="Images/delete.png"></button>
            </div>
            <div class="name">
            ${keys[i].substring(5, keys[i].length).replace('_', ' ')}
            </div>
            </div>`);


                $(`#${keys[i]}edt1`).click(() => {
                    cnt = 1;
                    $('.main_page').hide();
                    $('.read_area').show();
                    $('.note_heading').html(keys[i].substring(5, keys[i].length).replace('_', ' '));
                    $('.note_text').html(localStorage.getItem(`${keys[i]}`));
                    $('.note_text').children().attr('contenteditable', 'false');
                })

                $(`#${keys[i]}edt2`).click(() => {
                    $('.main_page').hide();
                    $('.note_area').show();
                    $('.mytext').html(localStorage.getItem(`${keys[i]}`));
                    $('.title').html(`${keys[i].substring(5, keys[i].length).replace('_', ' ')}`);
                })

                $(`#${keys[i]}edt3`).click(() => {
                    const value3 = confirm('Are you sure you want to delete these notes?');
                    if (value3) {
                        localStorage.removeItem(`${keys[i]}`);
                        window.location.reload();
                    }
                })

            }

        }
    }



    // Page Changing Buttons


    let myText = document.querySelector('.text');
    let extras = document.querySelector('.extras');

    function openNewTextEditor() {
        $('.title').val('');
        console.log($('.title').html())
        $('.text').html('');
        $('.text').css('background', '#fff');
        $('.text').css('color', '#000');
        $('.text').css('font-size', '20px');
        $('.text').css('font-family', 'Arial, Helvetica, sans-serif');
        $('.text').css('font-weight', 'normal');
        $('.text').css('font-style', 'normal');
        $('.text').css('text-decoration', 'none');
        $('.text').css('text-align', 'left');
        $('.text').css('text-transform', 'none');
    }


    $('.main_btn').click(() => {
        $('.main_page').hide();
        $('.note_area').show();
        openNewTextEditor();
        $('.text_clear').click();
        $(extras).hide();
    })


    $('.arrow').click(() => {
        if (!cnt) {
            const value1 = confirm('Are you sure you want to exit the changes made?');
            if (value1) {
                $('.note_area').hide();
                $('.main_page').css('display', 'grid');
                $('.read_area').hide();
            }
        }
        else {
            $('.note_area').hide();
            $('.main_page').css('display', 'grid');
            $('.read_area').hide();
            cnt = 0;
        }
    })



    // Tools For Making Notes


    function clicking1(str1) {

        setTimeout(() => {
            $(str1).css('background-color', 'rgb(255, 184, 112)');
            $(str1).css('border', '2px solid rgb(99, 25, 25)');
        }, 0);

        setTimeout(() => {
            $(str1).css('background-color', 'rgb(252, 217, 182)');
            $(str1).css('border', '2px solid rgb(252, 217, 182)');
        }, 200);
    }

    function clicking2(str2) {

        setTimeout(() => {
            $(str2).css('background-color', 'rgb(252, 174, 95)');
        }, 0);

        setTimeout(() => {
            $(str2).css('background-color', 'rgb(255, 204, 153)');
        }, 200);
    }




    //  Change Wallpaper

    $('.wallpaper').mouseenter(() => {
        $('.wall_exp').css('left', '6.5%');
        $('.wall_exp').show();
    })

    $('.wallpaper').mouseleave(() => {
        $('.wall_exp').hide();
    })


    function backCol(num, str) {
        if (num.toString().length !== 7) {
            $(myText).css('background', `url(Images/back${num}.jpg) center center/cover`);
        }
        else {
            $(myText).css('background', `${num}`);
        }
        clicking2(str);
    }


    $('.wallpaper').click(() => {

        if (extras.style.display != 'flex') {
            $(extras).css('display', 'flex');

            $(extras).html(`<button class="codes im1"><img src="Images/back1.jpg" class="imges"><p>&nbsp;&nbsp;&nbsp;LightGradient</p></button>
        <button class="codes im2"><img src="Images/back13.jpg" class="imges"><p>&nbsp;&nbsp;&nbsp;DarkGradient</p></button>
        <button class="codes im3"><img src="Images/back25.jpg" class="imges"><p>&nbsp;&nbsp;&nbsp;Solid</p></button>
        <button class="codes cod"><input type="color" value="#ffffff" id="custom_bg"><p>&nbsp;&nbsp;&nbsp;CustomColors</button></p>`);


            $('.im1').click(() => {
                $(extras).html(` <button class="codes age1"><img src="Images/back1.jpg" class="imges"></button>
            <button class="codes age2"><img src="Images/back2.jpg" class="imges"></button>
            <button class="codes age3"><img src="Images/back3.jpg" class="imges"></button>
            <button class="codes age4"><img src="Images/back4.jpg" class="imges"></button>
            <button class="codes age5"><img src="Images/back5.jpg" class="imges"></button>
            <button class="codes age6"><img src="Images/back6.jpg" class="imges"></button>
            <button class="codes age7"><img src="Images/back7.jpg" class="imges"></button>
            <button class="codes age8"><img src="Images/back8.jpg" class="imges"></button>
            <button class="codes age9"><img src="Images/back9.jpg" class="imges"></button>
            <button class="codes age10"><img src="Images/back10.jpg" class="imges"></button>
            <button class="codes age11"><img src="Images/back11.jpg" class="imges"></button>
            <button class="codes age12"><img src="Images/back12.jpg" class="imges"></button>`);



                let wall = document.getElementsByClassName('codes');

                $('.age1').click(() => { backCol(1, wall[0]) });
                $('.age2').click(() => { backCol(2, wall[1]) });
                $('.age3').click(() => { backCol(3, wall[2]) });
                $('.age4').click(() => { backCol(4, wall[3]) });
                $('.age5').click(() => { backCol(5, wall[4]) });
                $('.age6').click(() => { backCol(6, wall[5]) });
                $('.age7').click(() => { backCol(7, wall[6]) });
                $('.age8').click(() => { backCol(8, wall[7]) });
                $('.age9').click(() => { backCol(9, wall[8]) });
                $('.age10').click(() => { backCol(10, wall[9]) });
                $('.age11').click(() => { backCol(11, wall[10]) });
                $('.age12').click(() => { backCol(12, wall[11]) });

            })

            $('.im2').click(() => {
                $(extras).html(` <button class="codes age1"><img src="Images/back13.jpg" class="imges"></button>
            <button class="codes age2"><img src="Images/back14.jpg" class="imges"></button>
            <button class="codes age3"><img src="Images/back15.jpg" class="imges"></button>
            <button class="codes age4"><img src="Images/back16.jpg" class="imges"></button>
            <button class="codes age5"><img src="Images/back17.jpg" class="imges"></button>
            <button class="codes age6"><img src="Images/back18.jpg" class="imges"></button>
            <button class="codes age7"><img src="Images/back19.jpg" class="imges"></button>
            <button class="codes age8"><img src="Images/back20.jpg" class="imges"></button>
            <button class="codes age9"><img src="Images/back21.jpg" class="imges"></button>
            <button class="codes age10"><img src="Images/back22.jpg" class="imges"></button>
            <button class="codes age11"><img src="Images/back23.jpg" class="imges"></button>
            <button class="codes age12"><img src="Images/back24.jpg" class="imges"></button>`);



                let wall = document.getElementsByClassName('codes');

                $('.age1').click(() => { backCol(13, wall[0]) });
                $('.age2').click(() => { backCol(14, wall[1]) });
                $('.age3').click(() => { backCol(15, wall[2]) });
                $('.age4').click(() => { backCol(16, wall[3]) });
                $('.age5').click(() => { backCol(17, wall[4]) });
                $('.age6').click(() => { backCol(18, wall[5]) });
                $('.age7').click(() => { backCol(19, wall[6]) });
                $('.age8').click(() => { backCol(20, wall[7]) });
                $('.age9').click(() => { backCol(21, wall[8]) });
                $('.age10').click(() => { backCol(22, wall[9]) });
                $('.age11').click(() => { backCol(23, wall[10]) });
                $('.age12').click(() => { backCol(24, wall[11]) });

            })

            $('.im3').click(() => {
                $(extras).html(` <button class="codes age1"><img src="Images/back25.jpg" class="imges"></button>
            <button class="codes age2"><img src="Images/back26.jpg" class="imges"></button>
            <button class="codes age3"><img src="Images/back27.jpg" class="imges"></button>
            <button class="codes age4"><img src="Images/back28.jpg" class="imges"></button>
            <button class="codes age5"><img src="Images/back29.jpg" class="imges"></button>
            <button class="codes age6"><img src="Images/back30.jpg" class="imges"></button>
            <button class="codes age7"><img src="Images/back31.jpg" class="imges"></button>
            <button class="codes age8"><img src="Images/back32.jpg" class="imges"></button>
            <button class="codes age9"><img src="Images/back33.jpg" class="imges"></button>
            <button class="codes age10"><img src="Images/back34.jpg" class="imges"></button>
            <button class="codes age11"><img src="Images/back35.jpg" class="imges"></button>
            <button class="codes age12"><img src="Images/back36.jpg" class="imges"></button>`);



                let wall = document.getElementsByClassName('codes');

                $('.age1').click(() => { backCol(25, wall[0]) });
                $('.age2').click(() => { backCol(26, wall[1]) });
                $('.age3').click(() => { backCol(27, wall[2]) });
                $('.age4').click(() => { backCol(28, wall[3]) });
                $('.age5').click(() => { backCol(29, wall[4]) });
                $('.age6').click(() => { backCol(30, wall[5]) });
                $('.age7').click(() => { backCol(31, wall[6]) });
                $('.age8').click(() => { backCol(32, wall[7]) });
                $('.age9').click(() => { backCol(33, wall[8]) });
                $('.age10').click(() => { backCol(34, wall[9]) });
                $('.age11').click(() => { backCol(35, wall[10]) });
                $('.age12').click(() => { backCol(36, wall[11]) });

            })

            $('.cod').click(() => {
                let x = document.getElementById('custom_bg').value;
                backCol(x, 0);
            })
        }

        else {
            $(extras).css('display', 'none');
        }

        clicking1('.wallpaper');

    })





    //  Change Font-Color

    $('.color_change').mouseenter(() => {
        $('.tex_col').css('left', '13%');
        $('.tex_col').show();
    })

    $('.color_change').mouseleave(() => {
        $('.tex_col').hide();
    })

    function text_color(str) {
        $(myText).css('color', `${str}`);
    }

    function changeColor(str) {
        let highlight = window.getSelection();
        let span = `<span style="color: ${str}">` + highlight + `</span>`;
        myText.innerHTML = myText.innerHTML.replace(window.getSelection(), span);
    }


    $('.color_change').click(() => {
        if (extras.style.display != 'flex') {

            $(extras).css('display', 'flex');
            $(extras).html(`<button class="cod"><input type="color" value="#000000" id="col_text">&nbsp;&nbsp;&nbsp;ChangeTextColor</button>`);

            $('.cod').click(() => {

                let start = window.getSelection().focusOffset;
                let finish = window.getSelection().anchorOffset;
                let y = document.getElementById('col_text').value;

                if (finish - start != 0) {
                    changeColor(y);
                }
                else {
                    text_color(y);
                }
            })

        }
        else {
            $(extras).css('display', 'none');
        }

        clicking1('.color_change');
    })





    //  Change Font-Size

    $('.size').mouseenter(() => {
        $('.fs').css('left', '19.5%');
        $('.fs').show();
    })

    $('.size').mouseleave(() => {
        $('.fs').hide();
    })


    function text_size(num, str) {
        $(myText).css('font-size', `${num}px`);
        let siz = document.getElementsByClassName('codes');
        for (let i = 0; i < 20; i++) {
            $(siz[i]).css('background-color', 'rgb(255, 204, 153)');
        }
        $(str).css('background-color', 'rgb(252, 174, 95)');
    }


    function changeSize(str) {
        let highlight = window.getSelection();
        let span = `<span style="font-size: ${str}px">` + highlight + `</span>`;
        myText.innerHTML = myText.innerHTML.replace(window.getSelection(), span);
        clicking2(str);
    }

    function sizeAlteration(num, size_arr) {
        let start = window.getSelection().focusOffset;
        let finish = window.getSelection().anchorOffset;

        if (finish - start != 0) {
            changeSize(num);
        }
        else {
            text_size(num, size_arr);
        }
    }


    $('.size').click(() => {

        if (extras.style.display != 'flex') {
            $(extras).css('display', 'flex');

            $(extras).html(` <button class="codes c1">5</button>
        <button class="codes c2">10</button>
        <button class="codes c3">15</button>
        <button class="codes c4">20</button>
        <button class="codes c5">25</button>
        <button class="codes c6">30</button>
        <button class="codes c7">35</button>
        <button class="codes c8">40</button>
        <button class="codes c9">45</button>
        <button class="codes c10">50</button>
        <button class="codes c11">55</button>
        <button class="codes c12">60</button>
        <button class="codes c13">65</button>
        <button class="codes c14">70</button>
        <button class="codes c15">75</button>
        <button class="codes c16">80</button>
        <button class="codes c17">85</button>
        <button class="codes c18">90</button>
        <button class="codes c19">95</button>
        <button class="codes c20">100</button>`);


            let siz = document.getElementsByClassName('codes');


            $('.c1').click(() => { sizeAlteration(5, siz[0]); });
            $('.c2').click(() => { sizeAlteration(10, siz[1]); });
            $('.c3').click(() => { sizeAlteration(15, siz[2]); });
            $('.c4').click(() => { sizeAlteration(20, siz[3]); });
            $('.c5').click(() => { sizeAlteration(25, siz[4]); });
            $('.c6').click(() => { sizeAlteration(30, siz[5]); });
            $('.c7').click(() => { sizeAlteration(35, siz[6]); });
            $('.c8').click(() => { sizeAlteration(40, siz[7]); });
            $('.c9').click(() => { sizeAlteration(45, siz[8]); });
            $('.c10').click(() => { sizeAlteration(50, siz[9]); });
            $('.c11').click(() => { sizeAlteration(55, siz[10]); })
            $('.c12').click(() => { sizeAlteration(60, siz[11]); });
            $('.c13').click(() => { sizeAlteration(65, siz[12]); });
            $('.c14').click(() => { sizeAlteration(70, siz[13]); });
            $('.c15').click(() => { sizeAlteration(75, siz[14]); });
            $('.c16').click(() => { sizeAlteration(80, siz[15]); });
            $('.c17').click(() => { sizeAlteration(85, siz[16]); });
            $('.c18').click(() => { sizeAlteration(90, siz[17]); });
            $('.c19').click(() => { sizeAlteration(95, siz[18]); });
            $('.c20').click(() => { sizeAlteration(100, siz[19]); });
        }


        else {
            $(extras).css('display', 'none');
        }

        clicking1('.size');

    })





    //  Change Font-Family

    $('.font_style').mouseenter(() => {
        $('.fon').css('left', '26.5%');
        $('.fon').show();
    })

    $('.font_style').mouseleave(() => {
        $('.fon').hide();
    })

    function text_font(str) {
        $(myText).css('font-family', `${str}`);
    }


    function changeFont(str) {
        let highlight = window.getSelection();
        let span = `<span style="font-family: ${str}">` + highlight + `</span>`;
        myText.innerHTML = myText.innerHTML.replace(window.getSelection(), span);
    }

    function fontAlteration(str, size_arr) {
        let start = window.getSelection().focusOffset;
        let finish = window.getSelection().anchorOffset;

        if (finish - start != 0) {
            changeFont(str);
        }
        else {
            text_font(str, size_arr);
        }
    }

    $('.font_style').click(() => {
        if (extras.style.display != 'flex') {
            $(extras).css('display', 'flex');

            $(extras).html(` <button style="font-family: 'Architects Daughter', cursive" class="codes c1">MyNotes</button>
        <button style="font-family: 'Roboto Mono', monospace" class="codes c2">MyNotes</button>
        <button style="font-family: 'Playfair Display', serif" class="codes c3">MyNotes</button>
        <button style="font-family: 'Open Sans Condensed', sans-serif', serif" class="codes c4">MyNotes</button>
        <button style="font-family: 'Fredoka One', cursive" class="codes c5">MyNotes</button>
        <button style="font-family: 'Great Vibes', cursive" class="codes c6">MyNotes</button>
        <button style="font-family: 'Orbitron', sans-serif" class="codes c7">MyNotes</button>
        <button style="font-family: 'Merienda', cursive" class="codes c8">MyNotes</button>
        <button style="font-family: 'Yuji Mai', serif" class="codes c9">MyNotes</button>
        <button style="font-family: 'Niconne', cursive" class="codes c10">MyNotes</button>`);

            let siz = document.getElementsByClassName('codes');


            $('.c1').click(() => { fontAlteration(`Architects Daughter, cursive`, siz[0]); });
            $('.c2').click(() => { fontAlteration(`Roboto Mono, monospace`, siz[1]); });
            $('.c3').click(() => { fontAlteration(`Playfair Display, serif`, siz[2]); });
            $('.c4').click(() => { fontAlteration(`Open Sans Condensed, sans-serif, serif`, siz[3]); });
            $('.c5').click(() => { fontAlteration(`Fredoka One, cursive`, siz[4]); });
            $('.c6').click(() => { fontAlteration(`Great Vibes, cursive`, siz[5]); });
            $('.c7').click(() => { fontAlteration(`Orbitron, sans-serif`, siz[6]); });
            $('.c8').click(() => { fontAlteration(`Merienda, cursive`, siz[7]); });
            $('.c9').click(() => { fontAlteration(`Yuji Mai, serif`, siz[8]); });
            $('.c10').click(() => { fontAlteration(`Niconne, cursive`, siz[9]); });

        }

        else {
            $(extras).css('display', 'none');
        }

        clicking1('.font_style');
    });





    //  Add Bullets

    $('.bullet').mouseenter(() => {
        $('.bull').css('left', '33.5%');
        $('.bull').show();
    })

    $('.bullet').mouseleave(() => {
        $('.bull').hide();
    })


    function text(str) {
        let pan = myText.innerText;
        myText.innerText = pan + `${str.innerText}`;
        clicking2(str);
    }


    $('.bullet').click(() => {

        if (extras.style.display != 'flex') {
            $(extras).css('display', 'flex');

            $(extras).html(` <button class="codes c1">&#9679;</button>
        <button class="codes c2">&#9632;</button>
        <button class="codes c3">&#9650;</button>
        <button class="codes c4">&#9670;</button>
        <button class="codes c5">&larr;</button>
        <button class="codes c6">&uarr;</button>
        <button class="codes c7">&rarr;</button>
        <button class="codes c8">&darr;</button>
        <button class="codes c9">&deg;</button>
        <button class="codes c10">&sup2;</button>
        <button class="codes c11">&sup3;</button>
        <button class="codes c12">&radic;</button>
        <button class="codes c13">&#8731;</button>
        <button class="codes c14">&fnof;</button>
        <button class="codes c15">&empty;</button>
        <button class="codes c16">&sum;</button>
        <button class="codes c17">&#8710;</button>
        <button class="codes c18">&frac12;</button>
        <button class="codes c19">&#8486;</button>
        <button class="codes c20">&#8491;</button>`);


            let sym = document.getElementsByClassName('codes');

            $('.c1').click(() => { text(sym[0]) });
            $('.c2').click(() => { text(sym[1]) });
            $('.c3').click(() => { text(sym[2]) });
            $('.c4').click(() => { text(sym[3]) });
            $('.c5').click(() => { text(sym[4]) });
            $('.c6').click(() => { text(sym[5]) });
            $('.c7').click(() => { text(sym[6]) });
            $('.c8').click(() => { text(sym[7]) });
            $('.c9').click(() => { text(sym[8]) });
            $('.c10').click(() => { text(sym[9]) });
            $('.c11').click(() => { text(sym[10]) });
            $('.c12').click(() => { text(sym[11]) });
            $('.c13').click(() => { text(sym[12]) });
            $('.c14').click(() => { text(sym[13]) });
            $('.c15').click(() => { text(sym[14]) });
            $('.c16').click(() => { text(sym[15]) });
            $('.c17').click(() => { text(sym[16]) });
            $('.c18').click(() => { text(sym[17]) });
            $('.c19').click(() => { text(sym[18]) });
            $('.c20').click(() => { text(sym[19]) });
        }


        else {
            $(extras).css('display', 'none');
        }

        clicking1('.bullet');

    })





    //  Capitalize Text

    $('.capital').mouseenter(() => {
        $('.capi').css('left', '40.4%');
        $('.capi').show();
    })

    $('.capital').mouseleave(() => {
        $('.capi').hide();
    })

    $('.capital').click(() => {

        if (myText.style.textTransform === "capitalize") {
            $('.text').css('text-transform', 'none');
            $('.capital').css('background-color', 'rgb(252, 217, 182)');
            $('.capital').css('border', 'none');
        }
        else {
            $('.text').css('text-transform', 'capitalize');
            $('.capital').css('background-color', 'rgb(255, 184, 112)');
            $('.capital').css('border', '2px solid rgb(99, 25, 25)');
        }

    })





    //  Align Text to Left

    $('.left_align').mouseenter(() => {
        $('.lefta').css('left', '47%');
        $('.lefta').show();
    })

    $('.left_align').mouseleave(() => {
        $('.lefta').hide();
    })

    $('.left_align').click(() => {

        $('.text').css('textAlign', 'left');
        $('.left_align').css('background-color', 'rgb(255, 184, 112)');
        $('.left_align').css('border', '2px solid rgb(99, 25, 25)');
        $('.center_align').css('background-color', 'rgb(252, 217, 182)');
        $('.center_align').css('border', 'none');
        $('.right_align').css('background-color', 'rgb(252, 217, 182)');
        $('.right_align').css('border', 'none');

    })





    //  Align Text to Center

    $('.center_align').mouseenter(() => {
        $('.centera').css('left', '54%');
        $('.centera').show();
    })

    $('.center_align').mouseleave(() => {
        $('.centera').hide();
    })

    $('.center_align').click(() => {

        if (myText.style.textAlign === "center") {
            $('.text').css('textAlign', 'left');
            $('.center_align').css('background-color', 'rgb(252, 217, 182)');
            $('.center_align').css('border', 'none');
        }
        else {
            $('.text').css('textAlign', 'center');
            $('.center_align').css('background-color', 'rgb(255, 184, 112)');
            $('.center_align').css('border', '2px solid rgb(99, 25, 25)');
            $('.left_align').css('background-color', 'rgb(252, 217, 182)');
            $('.left_align').css('border', 'none');
            $('.right_align').css('background-color', 'rgb(252, 217, 182)');
            $('.right_align').css('border', 'none');
        }

    })





    //  Align Text to Right

    $('.right_align').mouseenter(() => {
        $('.righta').css('left', '60.5%');
        $('.righta').show();
    })

    $('.right_align').mouseleave(() => {
        $('.righta').hide();
    })

    $('.right_align').click(() => {

        if (myText.style.textAlign === "right") {
            $('.text').css('textAlign', 'left');
            $('.right_align').css('background-color', 'rgb(252, 217, 182)');
            $('.right_align').css('border', 'none');
        }
        else {
            $('.text').css('textAlign', 'right');
            $('.right_align').css('background-color', 'rgb(255, 184, 112)');
            $('.right_align').css('border', '2px solid rgb(99, 25, 25)');
            $('.center_align').css('background-color', 'rgb(252, 217, 182)');
            $('.center_align').css('border', 'none');
            $('.left_align').css('background-color', 'rgb(252, 217, 182)');
            $('.left_align').css('border', 'none');
        }

    })




    //  Functions for Bold, Italic, Underlined and Line-Through Text

    function textTransformation(str) {
        let highlight = window.getSelection();
        if ($(window.getSelection().getRangeAt(0).commonAncestorContainer).prev()[0] === 'undefined' && ($(window.getSelection().getRangeAt(0).commonAncestorContainer).prev()[0].classList.contains(`${str}`) && $(window.getSelection().getRangeAt(0).commonAncestorContainer).next()[0].classList.contains(`${str}`))) {
            let changedText = `<span class = '${str}'>` + $(window.getSelection().getRangeAt(0).commonAncestorContainer).prev()[0].innerHTML + highlight + $(window.getSelection().getRangeAt(0).commonAncestorContainer).next()[0].innerHTML + `</span>`;
            $($(window.getSelection().getRangeAt(0).commonAncestorContainer).prev()[0]).replaceWith(changedText);
            $($(window.getSelection().getRangeAt(0).commonAncestorContainer).next()[0]).remove();
            $(window.getSelection().getRangeAt(0).commonAncestorContainer).replaceWith('');
        }
        else {
            let highlight = window.getSelection();
            let changedText = `<span class = '${str}'>` + highlight + `</span>`;
            myText.innerHTML = myText.innerHTML.replace(window.getSelection(), changedText);
        }
    }

    function textUNDOTransformation(str) {
        if (window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.classList.contains(`${str}`) && (window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.innerHTML.length !== window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.textContent.substring(window.getSelection().extentOffset, window.getSelection().anchorOffset).length)) {
            let highlight = window.getSelection();
            let changedText = `<span class = '${str}'>` + window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.textContent.substring(0, window.getSelection().extentOffset) + `</span>` + highlight + `<span class = '${str}'>` + window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.textContent.substring(window.getSelection().anchorOffset, window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.innerHTML.length) + `</span>`;
            $(window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement).replaceWith(changedText);
        }
        else {
            let inner = window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.innerHTML;
            window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.replaceWith(inner);
        }
    }





    //  Making Text Bold

    $('.text_bold').mouseenter(() => {
        $('.bol').css('left', '67.4%');
        $('.bol').show();
    })

    $('.text_bold').mouseleave(() => {
        $('.bol').hide();
    })

    function makeBold() {
        textTransformation('bold_text');
    }

    function unBold() {
        textUNDOTransformation('bold_text');
    }


    $('.text_bold').click(() => {

        let start = window.getSelection().focusOffset;
        let finish = window.getSelection().anchorOffset;

        if (finish - start != 0) {
            if (window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.classList.contains('bold_text')) {
                unBold();
            }
            else {
                makeBold();
            }
        }

        else {
            if (myText.style.fontWeight === "bold") {
                $('.text').css('fontWeight', 'normal');
                $('.text_bold').css('background-color', 'rgb(252, 217, 182)');
                $('.text_bold').css('border', 'none');
            }
            else {
                $('.text').css('fontWeight', 'bold');
                $('.text_bold').css('background-color', 'rgb(255, 184, 112)');
                $('.text_bold').css('border', '2px solid rgb(99, 25, 25)');
            }
        }
    })





    //  Making Text Underlined

    $('.text_underline').mouseenter(() => {
        $('.under').css('left', '74.4%');
        $('.under').show();
    })

    $('.text_underline').mouseleave(() => {
        $('.under').hide();
    })

    function makeUnderlined() {
        textTransformation('underline_text');
    }

    function unUnderlined() {
        textUNDOTransformation('underline_text');
    }


    $('.text_underline').click(() => {

        let start = window.getSelection().focusOffset;
        let finish = window.getSelection().anchorOffset;

        if (finish - start != 0) {

            if (window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.classList.contains('underline_text')) {
                unUnderlined();
            }
            else {
                makeUnderlined();
            }
        }

        else {
            if (myText.style.textDecoration === "underline") {
                $('.text').css('text-decoration', 'none');
                $('.unall').css('text-decoration', 'none');
                $('.text_underline').css('background-color', 'rgb(252, 217, 182)');
                $('.text_underline').css('border', 'none');
            }
            else {
                $('.text').css('text-decoration', 'underline');
                $('.unall').css('text-decoration', 'underline');
                $('.text_underline').css('background-color', 'rgb(255, 184, 112)');
                $('.text_underline').css('border', '2px solid rgb(99, 25, 25)');
            }
        }

    })





    //  Making Text Italic

    $('.text_italic').mouseenter(() => {
        $('.ita').css('left', '81.2%');
        $('.ita').show();
    })

    $('.text_italic').mouseleave(() => {
        $('.ita').hide();
    })

    function makeItalic() {
        textTransformation('italic_text');
    }

    function unItalic() {
        textUNDOTransformation('italic_text');
    }


    $('.text_italic').click(() => {

        let start = window.getSelection().focusOffset;
        let finish = window.getSelection().anchorOffset;

        if (finish - start != 0) {

            if (window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.classList.contains('italic_text')) {
                unItalic();
            }
            else {
                makeItalic();
            }
        }

        else {
            if (myText.style.fontStyle === "italic") {
                $('.text').css('font-style', 'normal');
                $('.text_italic').css('background-color', 'rgb(252, 217, 182)');
                $('.text_italic').css('border', 'none');
            }
            else {
                $('.text').css('font-style', 'italic');
                $('.text_italic').css('background-color', 'rgb(255, 184, 112)');
                $('.text_italic').css('border', '2px solid rgb(99, 25, 25)');
            }

        }
    })





    //  Making Text Line-Through

    $('.line_through').mouseenter(() => {
        $('.lin').css('left', '88%');
        $('.lin').show();
    })

    $('.line_through').mouseleave(() => {
        $('.lin').hide();
    })

    function makeLine() {
        textTransformation('lineThrough_text');
    }

    function unLine() {
        textUNDOTransformation('lineThrough_text');
    }


    $('.line_through').click(() => {

        let start = window.getSelection().focusOffset;
        let finish = window.getSelection().anchorOffset;

        if (finish - start != 0) {

            if (window.getSelection().getRangeAt(0).commonAncestorContainer.parentElement.classList.contains('line_text')) {
                unLine();
            }
            else {
                makeLine();
            }
        }

        else {
            if (myText.style.textDecoration === "line-through") {
                $('.text').css('text-decoration', 'none');
                $('.line_through').css('background-color', 'rgb(252, 217, 182)');
                $('.line_through').css('border', 'none');
            }
            else {
                $('.text').css('text-decoration', 'line-through');
                $('.line_through').css('background-color', 'rgb(255, 184, 112)');
                $('.line_through').css('border', '2px solid rgb(99, 25, 25)');
            }
        }
    })





    //  Clearing Text

    $('.text_clear').mouseenter(() => {
        $('.clr').css('left', '94%');
        $('.clr').show();
    })

    $('.text_clear').mouseleave(() => {
        $('.clr').hide();
    })

    $('.text_clear').click(() => {
        myText.innerHTML = null;
    })






    //  Saving Button

    let sameName = 0;
    let sameContent = 0;
    $('.save_btn').click(() => {
        let note_text = document.querySelector('.mytext');
        let title = $('.title').val();
        if(title.includes(' ')){
            title = title.replace(/\s/g, '_');
        }
        if (title.length !== 0) {
            const value2 = confirm('Are you sure you want to save these changes made?');
            if (value2) {
                keys = Object.keys(localStorage);
                let p = keys.length;
                for (let i = 0; i < p; i++) {
                    if (keys[i].includes('note-')) {
                        if ($('.title').val() === keys[i].substring(5, keys[i].length).replace('_', ' ')) {
                            sameName++;
                        }
                        else if ($(note_text).html() === localStorage.getItem(`${keys[i]}`)){
                            localStorage.removeItem(`${keys[i]}`);
                        }
                    }
                }

                if (sameName) {
                    const value4 = confirm("A note with this name already exist. Do you to replace it?");
                    if (value4) {
                        localStorage.setItem(`note-${title}`, `${$(note_text).html()}`);
                        $('.note_area').hide();
                        $('.main_page').css('display', 'grid');
                        sameName--;
                        window.location.reload();
                    }
                    else{
                        sameName--;
                    }
                }

                else if (sameContent) {
                    
                }

                else {
                    localStorage.setItem(`note-${title}`, `${$(note_text).html()}`);
                    $('.note_area').hide();
                    $('.main_page').css('display', 'grid');
                    window.location.reload();
                }
            }
        }

    })


})