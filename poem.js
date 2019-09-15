function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>if you can't tell, mine is purple</p>",
"<p onClick=nextLine(2)>Because purple is definetely the best</p>",
"<p onClick=nextLine(3)>it doesnt show up very often naturally</p>",
"<p onClick=nextLine(4)>but I think that just makes it more special</p>",
<Button onClick=nextLine(5)>"index.getElementById('id1').style.color = 'purple'" </button>,
"<p onClick=nextLine(0)>Said the maintainer, 'Welcome to the club!'</p>");

	document.getElementById("line").innerHTML=poem[line];
}
