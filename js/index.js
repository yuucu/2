class Figure {constructor(document, x, y, position='fixed', color='random') {this.x = x;this.y = y;this.figure = document.createElement("div");this.figure.style.top = y + "px";this.figure.style.left = x + "px";this.figure.style.position = position;if(color == 'random') {this.figure.style.backgroundColor = this.createRandomColor();}else {this.color = color;this.figure.style.backgroundColor = color;}}createRandomColor() {var randomColor = "#";for(var i = 0; i < 6; i++) {randomColor += (16*Math.random() | 0).toString(16);}return randomColor;}}class Square extends Figure {constructor(document, x, y, width, height, position, color, border="") {super(document, x, y, position, color);this.width = width;this.height = height;this.border = border;this.figure.style.width = width + "px";this.figure.style.height = height + "px";this.figure.style.border = border;this.created = false;}getFigure() {return this.figure;}squareInSquare(){const span = 2;const border_width = 1;let child_width = ((this.width-border_width*2)-span*3)/2;let child_height = ((this.height-border_width*2)-span*3)/2;this.children = [];this.created = true;let random = Math.floor( Math.random() * (100 + 1));if(random > 30)this.children.push(new Square(document,span, span, child_width,child_height,'absolute', this.color, this.border));random = Math.floor( Math.random() * (100 + 1));if(random > 30)this.children.push(new Square(document,child_width + span*2, span, child_width, child_height,'absolute',this.color, this.border));random = Math.floor( Math.random() * (100 + 1));if(random > 30)this.children.push(new Square(document,child_width + span*2, child_height + span*2,child_width, child_height, 'absolute',this.color, this.border));random = Math.floor( Math.random() * (100 + 1));if(random > 30)this.children.push(new Square(document, span, child_height + span*2, child_width,child_height,'absolute',this.color, this.border));for(let i in this.children) {this.getFigure().appendChild(this.children[i].getFigure());}}}class Cross extends Figure {constructor(document, x, y, line_length, line_weight, position, color) {super(document, x, y, position,  color);this.width = line_weight;this.height = line_length;this.figure.style.width = this.width + "px";this.figure.style.height = this.height + "px";this.figure.className = "cross" + this.height + this.width;let style = document.getElementById('jsStyle');let target = "." + this.figure.className + "::after";let str_split = style.innerHTML.split(' ');for(let s of str_split) {if(s == target) {return;}}let pos = (this.height-this.width) / 2;let rule = 'background-color:' + this.color + ';content: "";position:absolute;height:' + this.width + 'px;width:' + this.height + 'px;left:-' + pos + 'px;top: ' + pos +'px;';style.innerHTML += '<!-- ' + target + " {" + rule + "}" + '-->';}getFigure(figure) {return this.figure;}}class Terminal {constructor(document) {this.elem = document.getElementById('terminal');this.history = [];this.dir = "home";this.prompt = "[~/" + this.dir + "]$ ";this.updateNormal(" - yuucu.github.io");this.theme = 'black';this.message_max = 17;this.init_flag = false;this.init_count = 0;this.init_message = ["yuucu.github.io version 2.0.09-12", "Checking files","Starting home", "Starting terminal","Starting works", "Starting rettiwt", "Starting voxelrun", "Starting soundcloud","Starting about", "Checking profile", "Checking Contact", "Checking skillset","Starting system","sa-g.io login: root"];this.password = "*******";this.pass_flags = [];this.pass_count = 0;this.rand_pass = Math.floor(Math.random() * 10);for(let i=0;i<this.password.length;i++) {this.pass_flags[i] = false;}this.elem.onclick = function() {/* document.getElementById('terminal').style.backgroundColor = 'white';document.getElementById('terminal').style.color = 'black'; */};}clear() {this.history = [];this.updateNormal(" - yuucu.github.io");}test() {let pass_str = "Password: ";for(let i=0;i<this.password.length;i++) {if(this.pass_flags[i]) {pass_str += this.password.charAt(i);} else {if(this.rand_pass < this.pass_count){this.pass_flags[i] = true;this.pass_count = 0;this.rand_pass = Math.floor(Math.random() * 20);break;} else {pass_str += String.fromCharCode(Math.floor(Math.random()*100)+32);break;}}if(i==this.password.length-1) {this.init_flag = true;this.updateNormal2(pass_str);this.updateNormal('welcome');return true;}}this.updateOver(pass_str);this.pass_count += 1;return false;}print_init() {this.init_count += 1;if(this.init_count == this.init_message.length){return true;}this.updateNormal2(this.init_message[this.init_count]);return false;}setDir(dir) {if(this.init_flag == true) {this.prompt = "[~/" + dir + "]$ ";this.updateNormal("[~/" + this.dir + "]$ " + "cd ~/" + dir);this.dir = dir;}}update(str) {this.history.push(this.prompt + str);if(this.history.length > this.message_max) {this.history.shift();}this.elem.innerHTML = "";for(let i=0;i<this.history.length;i++) {this.elem.innerHTML += "<p>" + this.history[i] + "</p>";}this.elem.innerHTML += this.prompt;}updateNormal(str) {this.history.push(str);if(this.history.length > this.message_max) {this.history.shift();}this.elem.innerHTML = "";for(let i=0;i<this.history.length;i++) {this.elem.innerHTML += "<p>" + this.history[i] + "</p>";}this.elem.innerHTML += this.prompt;}updateNormal2(str) {this.history.push(str);if(this.history.length > this.message_max) {this.history.shift();}this.elem.innerHTML = "";for(let i=0;i<this.history.length;i++) {this.elem.innerHTML += "<p>" + this.history[i] + "</p>";}}updateOver(str) {this.history.push(str);this.elem.innerHTML = "";for(let i=0;i<this.history.length;i++) {this.elem.innerHTML += "<p>" + this.history[i] + "</p>";}this.history.pop();}}var mysite = mysite || {};window.onload = function() {pageInit();mysite.screen = document.getElementById('background-screen');mysite.figureInterval = 80;mysite.navHome = document.getElementById('nav-home');mysite.navWorks = document.getElementById('nav-works');mysite.navAbout = document.getElementById('nav-about');mysite.navSystem = document.getElementById('nav-system');mysite.divSquare = document.getElementById('square-screen');mysite.divCross = document.getElementById('cross-screen');mysite.divWhite = document.getElementById('white-screen');mysite.divRandomSquare = document.getElementById('random-square');mysite.divBlackSquare = document.getElementById('black-square');/*mysite.divSquareInSquare = document.getElementById('square-in-square');*/mysite.divSquareInSquare = "";mysite.rettiwtCard = document.getElementById('rettiwt-card');mysite.voxelrunCard = document.getElementById('voxelrun-card');mysite.soundCloudCard = document.getElementById('soundcloud-card');mysite.github = document.getElementById('github');/*works buttons*/mysite.rettiwtCard.onclick = function() {window.open('rettiwt/', '_blank');};mysite.voxelrunCard.onclick = function() {window.open('https://unityroom.com/games/voxelrun', '_blank');};mysite.soundCloudCard.onclick = function() {window.open('https://soundcloud.com/sugar_gt/chiptume', '_blank');};/*about buttons*/mysite.github.onclick = function() {window.open('https://github.com/yuucu', '_blank');};mysite.div_button_flag = false;mysite.theme = '';mysite.randomSquareRunning = false;mysite.squareInSquareRunning = false;mysite.squareInSquareParent = '';mysite.randomSquarePrint = document.getElementById('random-square-print');mysite.randomSquareId = '';mysite.squareInSquareId = '';mysite.randomSquareNum = 0;mysite.randomSquareMaxNum = 2000;mysite.terminal = new Terminal(document);mysite.navHome.onclick = function() {setHomePage();};mysite.navWorks.onclick = function() {setWorksPage();};mysite.navAbout.onclick = function() {setAboutPage();};mysite.navSystem.onclick = function() {setSystemPage();};mysite.divWhite.onclick = function() {mainScreenClear();mysite.terminal.update('set white');};mysite.divSquare.onclick = function(){createSquareBack(mysite.screen, mysite.figureInterval, 4, 'fixed', '#dddddd');mysite.terminal.update('set square');};mysite.divCross.onclick = function(){createCrossBack(mysite.screen, mysite.figureInterval, 'fixed', '#dddddd');mysite.terminal.update('set cross');};mysite.divRandomSquare.onclick = function() {createRandomSquare(mysite.divRandomSquare, Math.floor(Math.random()*1), Math.floor(Math.random()*30), 'absolute', 'random', false);if(mysite.randomSquareRunning) {clearInterval(mysite.randomSquareId);mysite.randomSquareRunning = false;randomSquarePrintStop();mysite.terminal.updateNormal('square_num: ' + mysite.randomSquareNum);mysite.terminal.updateNormal('^C');} else {if(mysite.randomSquareNum > mysite.randomSquareMaxNum-1) {mainScreenClear();}mysite.theme = 'randomSquare';mysite.randomSquareRunning = true;mysite.randomSquareId = setInterval("createRandomSquare(mysite.screen, Math.floor(Math.random()*1), Math.floor(Math.random()*150), 'fixed', 'random')", 4);mysite.terminal.update('start random_square &');}};mysite.divBlackSquare.onclick = function() {mainScreenClear();mysite.theme = 'blackSquare';for( let i=0;i<50;i++) {createRandomSquare(mysite.screen, Math.random()*1, Math.random()*150, 'fixed', 'black', terminal=false);}mysite.terminal.update('set black_square');};mysite.divSquareInSquare.onclick = function() {mysite.theme = 'squareInSquare';const size = mysite.screen.clientHeight / 1.4;const initial_pos_x = mysite.screen.clientWidth/2 - size/2;const initial_pos_y = mysite.screen.clientHeight/2 - size/2;if(mysite.squareInSquareRunning) {clearInterval(mysite.squareInSquareId);mysite.squareInSquareRunning = false;} else {mysite.theme = 'squareInSquare';mysite.squareInSquareRunning = true;mysite.squareInSquareParent = new Square(document, initial_pos_x, initial_pos_y, size,size,'fixed','white', border="1px solid #ccc");mysite.squareInSquareId = setInterval("createSquareInSquare(mysite.squareInSquareParent)", 30);}};mysite.terminalInitId = setInterval("terminalInit()", 100);mainScreenClear();};function randomSquarePrintStop() {mysite.randomSquarePrint.innerHTML = "<p>** create random square **</p>";mysite.randomSquarePrint.innerHTML += "<p>square_num: " + mysite.randomSquareNum + "</p>";mysite.randomSquarePrint.innerHTML += "<p>- stop</p>";}function randomSquarePrintRun() {mysite.randomSquarePrint.innerHTML = "<p>** create random square **</p>";mysite.randomSquarePrint.innerHTML += "<p>square_num: " + mysite.randomSquareNum + "</p>";mysite.randomSquarePrint.innerHTML += "<p>- running...</p>";}anime({targets: '.square',translateX: 250});(function () {var timer = 0;window.onresize = function () {if (timer > 0) {clearTimeout(timer);}timer = setTimeout(function () {pageInit();switch(mysite.theme) {case '':mysite.screen.innerHTML = "";break;case 'square':createSquareBack(mysite.screen, mysite.figureInterval, 4, 'fixed', '#dddddd');break;case 'cross':createCrossBack(mysite.screen, mysite.figureInterval, 'fixed', '#dddddd');break;}}, 200);};}());function createSquareBack(target, interval, size, position, color) {mainScreenClear();mysite.theme = 'square';for( let i=0; i<target.clientWidth / interval; i++) {for( let j=0; j<target.clientHeight / interval; j++) {let square = new Square(document, interval*i+16, interval*j+16, size, size, position, color);target.appendChild(square.getFigure());}}}function createCrossBack(target, interval, position, color) {mainScreenClear();mysite.theme = 'cross';for( let i=0; i<target.clientWidth / interval; i++) {for( let j=0; j<target.clientHeight / interval; j++) {let cross = new Cross(document, interval*i+16, interval*j+16, 7, 1, position, color);target.appendChild(cross.getFigure());}}}function createRandomSquare(target, minSize, maxSize, position, color, terminal=true) {if(mysite.randomSquareNum > mysite.randomSquareMaxNum-1) {if(terminal) {clearInterval(mysite.randomSquareId);mysite.randomSquareRunning = false;mysite.terminal.updateNormal('square_num: ' + mysite.randomSquareNum);mysite.terminal.updateNormal('finished');randomSquarePrintStop();return;}}mysite.randomSquareNum += 1;if(terminal) {randomSquarePrintRun();mysite.terminal.updateOver('square_num: ' + mysite.randomSquareNum);}let size = Math.floor(Math.random() * (maxSize-minSize)) + minSize;let x = Math.floor(Math.random() * target.clientWidth);let y = Math.floor(Math.random() * target.clientHeight);let randSquare = new Square(document, x, y, size, size, position, color);target.appendChild(randSquare.getFigure());}function pageInit() {document.getElementById('header').style.marginBottom = window.innerHeight/100 * 8 + "px";document.getElementById('footer').style.marginTop = window.innerHeight/100 * 8 + "px";document.getElementById('main-home').style.marginTop = window.innerHeight/100 * 6 + "px";document.getElementById('main-about').style.marginTop = window.innerHeight/100 * 6 + "px";document.getElementById('main-works').style.marginTop = window.innerHeight/100 * 6 + "px";document.getElementById('main-system').style.marginTop = window.innerHeight/100 * 6 + "px";}function mainScreenClear() {if(mysite.randomSquareRunning) {clearInterval(mysite.squareInSquareId);clearInterval(mysite.randomSquareId);mysite.randomSquareRunning = false;mysite.squareInSquareRunning = false;}mysite.screen.innerHTML = "";mysite.theme = '';mysite.randomSquareNum = 0;randomSquarePrintStop();}function setHomePage() {document.getElementById('main-home').style.display = 'block';document.getElementById('main-works').style.display = 'none';document.getElementById('main-about').style.display = 'none';document.getElementById('main-system').style.display = 'none';mysite.terminal.setDir('home');}function setWorksPage() {document.getElementById('main-home').style.display = 'none';document.getElementById('main-works').style.display = 'block';document.getElementById('main-about').style.display = 'none';document.getElementById('main-system').style.display = 'none';if(mysite.div_button_flag == false) {createSquareBack(mysite.divSquare, 40, 4, 'absolute' ,'#dddddd');createCrossBack(mysite.divCross, 40, 'absolute' ,'#dddddd');for(let i=0;i<100;i++) {createRandomSquare(mysite.divRandomSquare, Math.floor(Math.random()*1), Math.floor(Math.random()*25), 'absolute', 'random', false);}for(let i=0;i<30;i++) {createRandomSquare(mysite.divBlackSquare, Math.floor(Math.random()*1), Math.floor(Math.random()*25), 'absolute', 'black', false);}mysite.div_button_flag =true;}mysite.terminal.setDir('works');}function setAboutPage() {document.getElementById('main-home').style.display = 'none';document.getElementById('main-works').style.display = 'none';document.getElementById('main-about').style.display = 'block';document.getElementById('main-system').style.display = 'none';mysite.terminal.setDir('about');}function setSystemPage() {document.getElementById('main-home').style.display = 'none';document.getElementById('main-works').style.display = 'none';document.getElementById('main-about').style.display = 'none';document.getElementById('main-system').style.display = 'block';mysite.terminal.setDir('system');}function createSquareInSquare(parent_div) {mysite.screen.innerHTML = "";let finish_flag = false;if(parent_div.created == false) {parent_div.squareInSquare();}else {if(parent_div.children.length == 0)console.log('finish');else{let flag1 = false;let flag4 = false;let flag16 = false;for(let i in parent_div.children) {if(parent_div.children[i].created == false) {parent_div.children[i].squareInSquare();break;}if(i == parent_div.children.length-1) {flag1 = true;}}if(flag1 == true) {for(let i in parent_div.children) {let double_break = false;for(let j in parent_div.children[i].children) {if(parent_div.children[i].children[j].created == false) {parent_div.children[i].children[j].squareInSquare();double_break = true;break;}if(i == parent_div.children.length-1 && j == parent_div.children[i].children.length-1) {flag4 = true;}}if(double_break)break;}}if(flag4 == true) {for(let i in parent_div.children) {let double_break = false;for(let j in parent_div.children[i].children) {for(let m in parent_div.children[i].children[j].children) {if(parent_div.children[i].children[j].children[m].created == false) {parent_div.children[i].children[j].children[m].squareInSquare();double_break = true;break;}if(i == parent_div.children.length-1 && j == parent_div.children[i].children.length-1 && m == parent_div.children[i].children[j].children.length-1) {flag16 = true;}}if(double_break)break;}if(double_break)break;}}if(flag16 == true) {for(let i in parent_div.children) {let double_break = false;for(let j in parent_div.children[i].children) {for(let m in parent_div.children[i].children[j].children) {for(let n in parent_div.children[i].children[j].children[m].children) {if(parent_div.children[i].children[j].children[m].children[n].created == false) {parent_div.children[i].children[j].children[m].children[n].squareInSquare();double_break = true;break;}if(i == parent_div.children.length-1 && j == parent_div.children[i].children.length-1 && m == parent_div.children[i].children[j].children.length-1 && n == parent_div.children[i].children[j].children[m].children.length-1) {finish_flag = true;}}if(double_break)break;}if(double_break)break;}if(double_break)break;}}}}mysite.screen.appendChild(parent_div.getFigure());if(finish_flag == true) {clearInterval(mysite.squareInSquareId);mysite.squareInSquareRunning = false;console.log('finish')}}function terminalInit() {if(mysite.terminal.print_init() == true) {clearInterval(mysite.terminalInitId);mysite.terminalLoginId = setInterval("terminalLogin()", 50);} else {if(Math.floor(Math.random()) == 0) {clearInterval(mysite.terminalInitId);mysite.terminalInitId = setInterval("terminalInit()", Math.floor( Math.random() * 300) + 50);}}}function terminalLogin() {if(mysite.terminal.test() == true) {clearInterval(mysite.terminalLoginId);}}