var d1 = new Object();

var d2 = new Object();

d1 = {

    0:'SUNDAY',

    1:'MONDAY',

    2:'TUESDAY',

    3:'WEDNESDAY',

    4:'THURSDAY',

    5:'FRIDAY',

    6:'SATURDAY'

}

d2 = {

    0:"January",

    1:"February",

    2:"March",

    3:"April",

    4:"May",

    5:"June",

    6:"July",

    7:"August",

    8:"September",

    9:"October",

    10:"November",

    11:"December"    

}

function time(){

        var d = new Date();

        var sec = d.getSeconds();

        var min = d.getMinutes();

        var hor = d.getHours();

        var dat = d.getDate();

        var mon = d.getMonth();

        var yer = d.getFullYear();

        var day = d.getDay();

        var d_y = d1[day];

        var m_n = d2[mon];

        

        if (sec<10){

            sec = "0"+sec;

        }

        if (min<10){

            min = "0"+min;

        }

        

        if (hor>12){

            hor = hor -12 ;

            if (hor<10){

                hor = "0"+hor;

            }

            var a_p = "PM"

        }

        else {

            var a_p = "AM";

            if(hor<10){

                    hor = "0"+hor;

                }

        }

document.getElementById('date').innerHTML = d_y+", "+m_n+" "+dat;

document.getElementById('date2').innerHTML = d_y.slice(0,3)+", "+m_n.slice(0,3)+" "+dat;

document.getElementById('time').innerHTML = hor+":"+min;

}

setInterval(time,1000);
alert(screen.width);
