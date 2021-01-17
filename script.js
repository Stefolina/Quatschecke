// Textchanging
function changeText1() {
    setTimeout(function () {
        document.getElementById('contact').innerHTML = 'Kontakte';
    }, 0);

    setTimeout(function () {
        document.getElementById('contact').innerHTML = 'Deine Quatschecke-Buddys';
    }, 3000);

    setTimeout(changeText1, 6000);
}

function changeText2() {
    setTimeout(function () {
        document.getElementById('chat').innerHTML = 'Chats';
    }, 0);

    setTimeout(function () {
        document.getElementById('chat').innerHTML = 'Deine persönliche Quatschecke';
    }, 3000);

    setTimeout(changeText2, 6000);
}

// Contactdefinition
let contacts = [{
    'image': 'img/Alex.jpeg',
    'name': 'Alex',
},
{
    'image': 'img/Jakob.jpeg',
    'name': 'Jakob',
},
{
    'image': 'img/Marie.jpeg',
    'name': 'Marie',
},
{
    'image': 'img/Nadine.jpeg',
    'name': 'Nadine',
},
{
    'image': 'img/Peter.jpeg',
    'name': 'Peter',
},
{
    'image': 'img/Papa.jpeg',
    'name': 'Papa',
},
{
    'image': 'img/Tanja.jpeg',
    'name': 'Tanja',
}
];

// show
function show() {
 
    for (let i = 0; i < contacts.length; i++) {
        let contactline = contacts[i];

        document.getElementById('contactcontainer').innerHTML += `
        
            <div class="contactcontainer">
                <img src="${contactline['image']}" class="contactpic">
                <h2 class="contactname">${contactline['name']}</h2>
                <div class="input"><input onclick="showChat(i)" type="checkbox"></div>
            </div>
        `;
    }
}

function showChat(i){

}

/* for (let i = 0; i < chats.length; i++) {
    let chatrow = chats[i];
    chatHTML += `<div>${chat}</div>`;
do
cument.getElementById('postcontainer').innerHTML += `
    <div class="postcontainer">
        <div class="author">${post['author']} </div>
        <div class="location">${post['location']}</div>
        <img src="${post['image']}" class="post-img">
        <div class="iconsrow"><img src="icons/likes.png" class="icons">
        <img src="icons/message.jpg" class="icons"></div>
        <div class="text">${post['text']}</div>
        <div class="commentrow" id="comments">
                ${chatsHTML}

    


/*<div class="user-area">
<img class="icons" src="icons/smiley1.png">
<img class="icons" src="icons/upload.jpg">
<input placeholder="Schreibe eine Nachricht" type="text">
<img class="icons" src="icons/send.png">
</div>*/