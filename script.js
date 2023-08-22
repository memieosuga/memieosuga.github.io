// LOADER FUNCTIONS
function closeLoader(){
    document.getElementById("loadingPage").innerHTML = "";
    const dots = [[0, 40, 20, 1], [0, 10, -20, 1], [0, 15, -40, 1], [0, 20, -20, 1], [0, -10, 20, 1], [0, -75, 40, 1], [0, -105, 0, 1]];
    for (let dot = 0; dot < 7; dot++) {
        loadingDot(dots[dot][0], dots[dot][1], dots[dot][2], dots[dot][3]);
        }
    setTimeout("document.getElementById('loadingPage').style.animation = 'loadFade ease-out 2s 1 forwards';", 1200);
}

function loadingDot(delay, left, top, count) {
	var html = '<span class="loadDot" style="animation-delay: ' + delay + 'ms; left: ' + left + 'px; top: ' + top + 'px; animation-iteration-count: ' + count + ';"></span>';
    document.getElementById("loadingPage").innerHTML += html;
}

// LOAD IMAGES PER SECTION AND ASSIGNS IDS
function addImg(imgName, section){
    var html = '<img src="img/' + section + '/' + imgName + '.png" id="' + imgName+ '" style="max-width: 100%; position: absolute" onclick="showModal(\'' + imgName +'\')">';
    document.getElementById(section).innerHTML += html;
}

// CODE EXAMPLES
function addCodeBox(blockBox, symbol, name, short){
    var html = '<div class="codeBox" onclick="showModal(\''+ short + '\')"><img class="glowIcon" src="img/M4/' + symbol + 'Glow.png">&#160;' + name + '</div>';
    document.getElementById(blockBox).innerHTML += html;               
}
// for code snippets
function copyCode(code){
    var html = '<button class="copyIconOuter" onclick="copyFunction(\'' + code + '\'); copyAlert(\'' + code + '\')"><span class="copyIcon"><span class="copyIcon" id="copyIcon2"></span></span></button><span id = "' + code + 'copied" class="copied">&#10004; Copied!</span>';    
    document.getElementById(code + "Box").innerHTML += html;
} 
function copyFunction(id)
{
    var copySpan = document.getElementById(id);
    var copyText = copySpan.textContent;
    navigator.clipboard.writeText(copyText);
}
function copyAlert(code){
    var copyAlert = document.getElementById( code + 'copied');
    copyAlert.style.animation = "copied 2000ms ease";
    setTimeout(() => {copyAlert.style.animation = '';}, 2000);
}

// SHOW MODAL
function showModal(imgName){
    var modalName = imgName + "Modal";
    document.getElementById(modalName).style.display = "block";
    var mainPage = document.getElementById("mainPage");
    mainPage.classList.add("modal-open");
}

// CLOSE MODAL
function closeModal(modalName){
    var modal = document.getElementById(modalName);
    modal.style.display = "none";
    var mainPage = document.getElementById("mainPage");
    mainPage.classList.remove("modal-open");
}
function closeModalX(modalName){
    var html = '<span class="close" onclick="closeModal(\'' + modalName +'\')">&times;</span>';
    document.getElementById(modalName).innerHTML += html;
}

// GENERATE SOCIAL ICONS
function generateSocialIcons(section){
    const links = ['https://memie.artstation.com','https://instagram.com/memieosuga','https://www.linkedin.com/in/memieosuga/'];
    const socials = ['artstation','instagram','linkedin'];

    for (let n = 0; n < socials.length; n++) {
        var singleLink = '<a href="' + links[n] + '" target="_blank" class="socials"> <img src="img/social/' + socials[n] + '.png"></a>'
        document.getElementById(section).innerHTML += singleLink
    }
    
}


// NOT USED ANYMORE, MAY NEED TO DELETE
function bgImg(imgName){
    var html = '<img class="bg" src="img/bg/' + imgName + '.png">';
    document.getElementById("bgContainer").innerHTML += html;
}