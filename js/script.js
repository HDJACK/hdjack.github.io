/*
*
*
*
*/







$(document).ready(() => {
    loadHtml();

    $("img").click(function(e){
        let x = e.pageX - e.target.offsetLeft;
        let y = e.pageY - e.target.offsetTop;
        console.table({x, y});
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

// load Data into View
async function loadHtml() {
    let counter = 0;
    let html = "";
    const data = await getData();

   data.gangs.forEach((gang) => {
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
   });
    data.wt.forEach((item) => {
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
    });
    data.at.forEach((item) => {
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
    });
    data.dt.forEach((item) => {
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
    });

   $('#content').html($('#content').html() + html);
   $(".scalize").scalize();
}
