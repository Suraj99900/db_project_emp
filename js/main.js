
let data_section = document.getElementById('data_section');
let add_btn = document.querySelectorAll('.add');

var nextToken;
var prevToken;

let tempToken = new Array();

var div_content_item;
// array
let tokenPrevStore = [1, 12, 24, 36, 48, 60, 72];
let tokenNextStore = [12, 24, 36, 48, 60, 72, 83];
let tempStore = [[1, 12], [12, 23], [24, 35], [36, 47], [48, 59], [60, 71], [72, 81]];
let j = 0;

let btn_next = document.getElementById('pag_next');
let btn_prev = document.getElementById('pag_prev');


let a = 0;

// this function call ajax and fetch the data on first load
function getDataonload() {
    //call ajax
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "fetch_data.php";
    var asynchronous = true;

    ajax.open(method, url, asynchronous);


    //onload

    ajax.onload = () => {
        // converting normal text response in json object
        var data = JSON.parse(ajax.response);

        addData_next_load(data);

    }

    //sending ajax request
    ajax.send();

}


//this function call when user click on button
function getDataOnNext(parem) {
    console.log(parem);
    if (parem != undefined) {
        nextToken = parem;
    }
    //call ajax
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "fetch_data.php?next=" + nextToken;
    var asynchronous = true;

    ajax.open(method, url, asynchronous);


    //onload

    ajax.onload = () => {
        // converting normal text response in json object
        var data = JSON.parse(ajax.response);

        addData_next_load(data);

    }

    //sending ajax request
    ajax.send();

}



// adding data in index.php
function addData_next_load(data) {

    for (var i = 0; i < data.length; ++i) {
        div_content_item = document.createElement('div');
        div_content_item.setAttribute("class", "content-item" + " padd-15");

        var div_content_item_inner = document.createElement('div');
        div_content_item_inner.setAttribute("class", "content-item-inner");
        div_content_item.appendChild(div_content_item_inner);

        var icon = document.createElement('div');
        icon.setAttribute("class", "icon")
        div_content_item_inner.appendChild(icon);

        var i_c = document.createElement('i');
        i_c.setAttribute("class", "fa" + " fa-person");
        icon.appendChild(i_c);

        var h4_1 = document.createElement('h4');
        var h4_2 = document.createElement('h4');
        var h4_3 = document.createElement('h4');
        var h4_4 = document.createElement('h4');
        var h4_5 = document.createElement('h4');

        div_content_item_inner.appendChild(h4_1);
        div_content_item_inner.appendChild(h4_2);
        div_content_item_inner.appendChild(h4_3);
        div_content_item_inner.appendChild(h4_4);
        div_content_item_inner.appendChild(h4_5);

        data_section.appendChild(div_content_item);

        h4_1.innerText = data[i].e_id;
        h4_2.innerText = data[i].name;
        h4_3.innerText = data[i].email;
        h4_4.innerText = data[i].phone_no;
        h4_5.innerText = data[i].address;

        if (i == 0) {
            if (prevToken != undefined) {
                tempToken.push(prevToken);

            }
            prevToken = data[i].e_id;


        }
        if (i == data.length - 1) {

            nextToken = data[i].e_id;

        }

    }

    // console.log('pre:-' + prevToken);
    // console.log('nex:-' + nextToken);
    // console.log('temp:-' + tempToken);

}


function nextFun(param_1, param_2) {

    //call ajax
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "fetch_data.php?param_1=" + param_1 + "&param_2=" + param_2;
    var asynchronous = true;

    ajax.open(method, url, asynchronous);


    //onload

    ajax.onload = () => {
        // converting normal text response in json object
        var data = JSON.parse(ajax.response);

        addData_next_load(data);

    }

    //sending ajax request
    ajax.send();
}




//this function remove the data from index.php
function removeItem() {
    var rm_div = document.querySelectorAll(".content-item");
    rm_div.forEach(item => {
        item.remove();
    });
}

//calling the function
getDataonload();



$(document).ready(() => {
    //while clicking on pagination button 
    add_btn.forEach(add => {

        add.addEventListener('click', () => {
            for (let i = 0; i < add_btn.length; i++) {
                $('.add').removeClass('active');
            }
            $(add).addClass('active');
            var a_i = add.className[1];
            j = parseInt(a_i);
            getDataOnNext(tokenPrevStore[a_i]);
            removeItem();
            // console.log(tokenPrevStore[a_i]);
        })
    });



})


// pagination next or prev


btn_next.addEventListener('click', () => {

    for (j; j < 7;) {

        console.log(j);
        var param_1 = tempStore[j][0];
        var param_2 = tempStore[j][1];
        console.log("param_1:-" + param_1);
        console.log("param_2:-" + param_2);
        if (param_2 <= 81) {
            for (var i = 0; i < 7; i++) {
                document.getElementById('i' + i).classList.remove('active');
            }

            document.getElementById('i' + j).classList.add('active');

            removeItem();
            nextFun(param_1, param_2);
            j++;
            if (j == 7) {
                j--;
            }
            break;
        } else {

            break;
        }


    }

})

btn_prev.addEventListener('click', () => {

    for (j; j < 7;) {
        console.log(j);
        var param_1 = tempStore[j][0];
        var param_2 = tempStore[j][1];
        console.log("param_1:-" + param_1);
        console.log("param_2:-" + param_2);
        if (param_2 > 0) {

            for (var i = 0; i < 7; i++) {
                document.getElementById('i' + i).classList.remove('active');
            }

            document.getElementById('i' + j).classList.add('active');

            removeItem();
            nextFun(param_1, param_2);
            j--;
            if (j == -1) {
                j++;
            }
            break;
        } else {
            j = 0;
            break;
        }


    }

})





//searbch bar code

let search = document.getElementById('btn_s');
let emp = document.getElementById('emp');
let clear = document.getElementById('btn_c');
var p ;
var info;
function searchBar(parem) {
    //call ajax
    var ajax = new XMLHttpRequest();
    var method = "GET";
    var url = "fetch_data.php?search=" + parem;
    var asynchronous = true;

    ajax.open(method, url, asynchronous);


    //onload

    ajax.onload = () => {
        // converting normal text response in json object
        var data = JSON.parse(ajax.response);



        search_load(data);

    }

    //sending ajax request
    ajax.send();
}

//search function 
function search_load(data) {
    info =document.getElementById('info');
    p= document.createElement('p');
    p.innerText = data.length + " result found";
    info.appendChild(p);
    
        for(var i =0 ;i<data.length;i++){
            
            

            div_content_item = document.createElement('div');
            div_content_item.setAttribute("class", "content-item" + " padd-15");

            var div_content_item_inner = document.createElement('div');
            div_content_item_inner.setAttribute("class", "content-item-inner");
            div_content_item.appendChild(div_content_item_inner);

            var icon = document.createElement('div');
            icon.setAttribute("class", "icon")
            div_content_item_inner.appendChild(icon);

            var i_c = document.createElement('i');
            i_c.setAttribute("class", "fa" + " fa-person");
            icon.appendChild(i_c);

            var h4_1 = document.createElement('h4');
            var h4_2 = document.createElement('h4');
            var h4_3 = document.createElement('h4');
            var h4_4 = document.createElement('h4');
            var h4_5 = document.createElement('h4');

            div_content_item_inner.appendChild(h4_1);
            div_content_item_inner.appendChild(h4_2);
            div_content_item_inner.appendChild(h4_3);
            div_content_item_inner.appendChild(h4_4);
            div_content_item_inner.appendChild(h4_5);

            data_section.appendChild(div_content_item);

            h4_1.innerText = data[i].e_id;
            h4_2.innerText = data[i].name;
            h4_3.innerText = data[i].email;
            h4_4.innerText = data[i].phone_no;
            h4_5.innerText = data[i].address;
     
        }
}





search.addEventListener('click', () => {
    var search_data = document.forms['search_data']['search'].value;
    if (search_data) {
        removeItem();
        searchBar(search_data);
        document.getElementById('btn_pagination').style.display = "none";
    }
})



clear.addEventListener('click', () => {


    for (var i = 0; i < 7; i++) {
        document.getElementById('i' + i).classList.remove('active');
    }
    document.getElementById('i0').classList.add('active');
    j = 0;
    removeItem();
    getDataonload();
    document.getElementById('btn_pagination').style.display = "flex";
    p.remove();
})