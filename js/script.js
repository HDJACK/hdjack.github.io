/*
*
*
*
*/







$(document).ready(() => {
    loadHtml();

    $("img").click(function (e) {
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
        console.table({ x, y });
    });
})

// get Data Object from JSON
function getData() {
    return new Promise(resolve => {
        $.getJSON('js/data.json', (data) => {
            resolve(data);
        })
    });
}

const gangsBtn = document.getElementById("gangsBtn");
const squadBtn = document.getElementById("squadBtn");
const wtBtn = document.getElementById("wtBtn");
const atBtn = document.getElementById("atBtn");
const dtBtn = document.getElementById("dtBtn");

let gangsVisible = false;
let squadVisible = false;
let wtVisible = false;
let atVisible = false;
let dtVisible = false;


// load Data into View
async function loadHtml() {
    let counter = 0;
    let html = "";
    const data = await getData();
    gangsBtn.addEventListener("click", function () {
        gangsVisible = !gangsVisible;
        gangsBtn.style.backgroundColor = gangsVisible ? "green" : "red";
        gangsBtn.innerHTML = `Gangs: ${gangsVisible ? "An" : "Aus"}`;
        data.gangs.forEach((gang) => {
            if (gangsVisible) {
                let blip = "";
                let description = "";
                blip += `<div class="item-point circle" data-top="${gang.position.y}" data-left="${gang.position.x}" style="background: rgb(${gang.blip_color.r},${gang.blip_color.g},${gang.blip_color.b})" data-popover="#gang-${counter}">`;
                blip += `<div>`;
                blip += `<a href="#" class="toggle" style="width: 20px; height: 20px;"></a>`;
                blip += `</div>`;
                blip += `</div>`;

                description += `<div id="gang-${counter}" class="content right bottom">`;
                description += `<div class="head">`;
                description += `<a href="#" class="exit"><img src="assets/close.png" alt="" style="color:"#000" /></a>`;
                description += `<h6 class="title">${gang.name}</h6>`;
                description += `</div>`;
                description += `<div class="body">`;
                description += `<p><img src="${gang.description.skin}" alt=" "/></p>`;
                description += `<p>`;
                gang.description.texts.forEach(text => {
                    description += `<b>${text.title}:</b> ${text.content}<br>`;
                });
                description += `</p>`;
                description += `</div>`;
                description += `</div>`;

                html += blip + description;

                counter++;
            }
        });
    });
    squadBtn.addEventListener("click", function () {
        data.squads.forEach((squad) => {
            squadVisible = !squadVisible;
            squadBtn.style.backgroundColor = squadVisible ? "green" : "red";
            squadBtn.innerHTML = `Squad: ${squadVisible ? "An" : "Aus"}`;
            if (squadVisible) {
                let blip = "";
                let description = "";
                blip += `<div class="item-point square" data-top="${squad.position.y}" data-left="${squad.position.x}" style="background: rgb(${squad.blip_color.r},${squad.blip_color.g},${squad.blip_color.b})" data-popover="#squad-${counter}">`;
                blip += `<div>`;
                blip += `<a href="#" class="toggle" style="width: 10px; height: 10px;"></a>`;
                blip += `</div>`;
                blip += `</div>`;

                description += `<div id="squad-${counter}" class="content right bottom">`;
                description += `<div class="head">`;
                description += `<a href="#" class="exit"><img src="assets/close.png" alt="" style="color:"#000" /></a>`;
                description += `<h6 class="title">${squad.name}</h6>`;
                description += `</div>`;
                description += `<div class="body">`;
                description += `<p>`;
                squad.description.texts.forEach(text => {
                    description += `<b>${text.title}:</b> ${text.content}<br>`;
                });
                description += `</p>`;
                description += `</div>`;
                description += `</div>`;

                html += blip + description;

                counter++;
            }
        });
    });
    wtBtn.addEventListener("click", function () {
        wtVisible = !wtVisible;
        wtBtn.style.backgroundColor = wtVisible ? "green" : "red";
        wtBtn.innerHTML = `WT: ${wtVisible ? "An" : "Aus"}`;
        data.wt.forEach((item) => {
            if (wtVisible) {
                const { position, name } = item;
                let blip = "";
                let description = "";
                blip += `<div class="item-point circle" data-top="${position.y}" data-left="${position.x}" style="background-image: url('assets/Blip_501.webp'); background-size: cover; background-color: rgba(0,0,0,0); border: 0;" data-popover="#wt-${counter}">`;
                blip += `<div>`;
                blip += `<a href="#" class="toggle" style="width: 20px; height: 20px;"></a>`;
                blip += `</div>`;
                blip += `</div>`;

                description += `<div id="wt-${counter}" class="content right bottom">`;
                description += `<div class="head">`;
                description += `<a href="#" class="exit"><img src="assets/close.png" alt="" style="color:"#000" /></a>`;
                description += `<h6 class="title">WT: ${name}</h6>`;
                description += `</div>`;
                description += `</div>`;

                html += blip + description;

                counter++;
            }
        });
    });
    atBtn.addEventListener("click", function () {
        atVisible = !atVisible;
        atBtn.style.backgroundColor = atVisible ? "green" : "red";
        atBtn.innerHTML = `AT: ${atVisible ? "An" : "Aus"}`;
        data.at.forEach((item) => {
            if (atVisible) {
                const { position, name } = item;
                let blip = "";
                let description = "";
                blip += `<div class="item-point circle" data-top="${position.y}" data-left="${position.x}" style="background-image: url('assets/Blip_67.webp'); background-size: cover; background-color: rgba(0,0,0,0); border: 0;" data-popover="#at-${counter}">`;
                blip += `<div>`;
                blip += `<a href="#" class="toggle" style="width: 20px; height: 20px;"></a>`;
                blip += `</div>`;
                blip += `</div>`;

                description += `<div id="at-${counter}" class="content right bottom">`;
                description += `<div class="head">`;
                description += `<a href="#" class="exit"><img src="assets/close.png" alt="" style="color:"#000" /></a>`;
                description += `<h6 class="title">AT: ${name}</h6>`;
                description += `</div>`;
                description += `</div>`;

                html += blip + description;

                counter++;
            }
        });
    });
    dtBtn.addEventListener("click", function () {
        dtVisible = !dtVisible;
        dtBtn.style.backgroundColor = dtVisible ? "green" : "red";
        dtBtn.innerHTML = `DT: ${dtVisible ? "An" : "Aus"}`;
        data.dt.forEach((item) => {
            if (dtVisible) {
                const { position, name } = item;
                let blip = "";
                let description = "";
                blip += `<div class="item-point circle" data-top="${position.y}" data-left="${position.x}" style="background-image: url('assets/Blip_140.webp'); background-size: cover; background-color: rgba(0,0,0,0); border: 0;" data-popover="#dt-${counter}">`;
                blip += `<div>`;
                blip += `<a href="#" class="toggle" style="width: 20px; height: 20px;"></a>`;
                blip += `</div>`;
                blip += `</div>`;

                description += `<div id="dt-${counter}" class="content right bottom">`;
                description += `<div class="head">`;
                description += `<a href="#" class="exit"><img src="assets/close.png" alt="" style="color:"#000" /></a>`;
                description += `<h6 class="title">DT: ${name}</h6>`;
                description += `</div>`;
                description += `</div>`;

                html += blip + description;

                counter++;
            }
        });
    });

    $('#content').html($('#content').html() + html);
    $(".scalize").scalize();
}
