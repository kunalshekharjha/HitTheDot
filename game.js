<head>
<SCRIPT LANGUAGE="JavaScript">
gamelength=30;
timerID=null
var playing=false;
var numholes=6*10;
var currentpos=-1;
function clrholes() {
for(var k=0;k<document.dmz.elements.length;k++)
document.dmz.elements[k].checked=false;
}
function stoptimer() {
if(playing)
clearTimeout(timerID);
}
function showtime(remtime) {
document.cpanel.timeleft.value=remtime;
if(playing) {
if(remtime==0) {
stopgame();
return;
}
else {
temp=remtime-1;
timerID=setTimeout("showtime(temp)",1000);
      }
   }
}
function stopgame() {
stoptimer();
playing=false;
document.cpanel.timeleft.value=0;
clrholes();
display("Game Over");
alert('Game Over.\nYour score is:  '+totalhits);
}
function play() {
stoptimer();
if(playing) {
stopgame();
return;
}
playing=true;
clrholes();
totalhits=0;
document.cpanel.score.value=totalhits;
display("Playing");
launch();
showtime(gamelength);
}
function display(msg) {
document.cpanel.state.value=msg;
}
function launch() {
var launched=false;
while(!launched) {
mynum=random();
if(mynum!=currentpos) {
document.dmz.elements[mynum].checked=true;
currentpos=mynum;
launched=true;
      }
   }
}

function hithead(id) {
if(playing==false) {
clrholes();
display("Push Start to Play");
return;
}
if(currentpos!=id) {
totalhits+=-1;
document.cpanel.score.value=totalhits;
document.dmz.elements[id].checked=false;
}
else {
totalhits+=1;
document.cpanel.score.value=totalhits;
launch();
document.dmz.elements[id].checked=false;
   }
}

function random() {
return(Math.floor(Math.random()*100%numholes));
}
// End -->
</script>
</head>

<body>
<center><h2>Hit-the-Dot</h2></center>
<center>Test your skill.  How many boxes can you check in 30 seconds?</center>
<form name="cpanel">
<center>
<table cellspacing=3>
<tr>
<td><input type="button" name="startstop" value=" Start Game | Stop Game " onClick="play()"></td>
<td><pre>    </pre></td>
<td align=right>Time:</td>
<td><input type="text" name="timeleft" size="4" onFocus="this.blur()"></td>
</tr>
<tr>
<td><input type="text" name="state" size="20" value="Push Start to Play" onFocus="this.blur()"></td>
<td><pre>    </pre></td>
<td align=right>Score:</td>
<td><input type="text" name="score" size="4" onFocus="this.blur()"></td>
</tr>
</table>
</center>
</form>
<form name="dmz">
<center>
<table cellspacing=3>
<tr>
<td colspan=10><hr size=1></td>
</tr>
<tr>
<td align="center" valign="center"><input type="radio" onClick="hithead(0)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(1)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(2)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(3)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(4)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(5)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(6)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(7)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(8)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(9)"></td>
</tr>
<tr>
<td align="center" valign="center"><input type="radio" onClick="hithead(10)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(11)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(12)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(13)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(14)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(15)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(16)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(17)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(18)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(19)"></td>
</tr>
<tr>
<td align="center" valign="center"><input type="radio" onClick="hithead(20)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(21)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(22)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(23)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(24)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(25)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(26)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(27)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(28)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(29)"></td>
</tr>
<tr>
<td align="center" valign="center"><input type="radio" onClick="hithead(30)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(31)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(32)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(33)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(34)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(35)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(36)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(37)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(38)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(39)"></td>
</tr>
<tr>
<td align="center" valign="center"><input type="radio" onClick="hithead(40)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(41)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(42)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(43)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(44)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(45)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(46)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(47)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(48)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(49)"></td>
</tr>
<tr>
<td align="center" valign="center"><input type="radio" onClick="hithead(50)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(51)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(52)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(53)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(54)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(55)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(56)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(57)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(58)"></td>
<td align="center" valign="center"><input type="radio" onClick="hithead(59)"></td>
</tr>
<tr><td colspan=10><hr size=1></td>
</tr></table></center></form>

<center><table cellspacing=3><tr><td><code>
<p><strong>Instructions:</strong>
<ol><li>Click on the radio buttons as<BR>
they are selected randomly by the computer.<BR>
<li>1 point per hit, minus 1 point per miss.<BR>
</ol></td></tr></table></center>
</body>