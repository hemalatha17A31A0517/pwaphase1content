function getfile(file,callback) {
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}
	}
	htp.send(null);
}

getfile("dynamic.json",function(text){
	let data=JSON.parse(text)
	console.log(data);
	profile(data.profile)
	career(data.career)
	education(data.education)
	languages(data.languages)
})

var left=document.querySelector(".left");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);

	var ph3=document.createElement("h3");
	ph3.textContent=p.name;
	left.appendChild(ph3);

	var proll=document.createElement("p");
	proll.textContent=p.roll;
	left.appendChild(proll);

	var pp1=document.createElement("p");
	pp1.textContent=p.institute;
	left.appendChild(pp1);

	var pp2=document.createElement("p");
	pp2.textContent=p.place;
	left.appendChild(pp2);
}


var right=document.querySelector(".right");
function career(q)
{
	var hc=document.createElement("h2");
	hc.innerHTML="RESUME";
	right.appendChild(hc);

	var chr=document.createElement("hr");
	right.appendChild(chr)

	var cc=document.createElement("h3");
	cc.innerHTML="Career Objectives";
	right.appendChild(cc);

	var qinfo = document.createElement("p");
	qinfo.textContent=q.info;
	right.appendChild(qinfo);
}

function education(e)
{
	var ed=document.createElement("h3");
	ed.innerHTML="Educational details";
	right.appendChild(ed);

	 var etable=document.createElement("table");
	 etable.border="1";
	 var tr1="<tr><td>s.no</td><td>degree</td><td>institute</td><td>yop</td></tr>";
	 var tr2="";
	 for(var i=0; i<e.length;i++){
	 	tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td></tr>"; 	

	 }
	 etable.innerHTML=tr1+tr2;
	 right.appendChild(etable);
}
function languages(l)
{
	var la=document.createElement("h3");
	la.innerHTML="Languages known";
	right.appendChild(la);
	var lang1=document.createElement("ul");
	var lan="";
	for(var j=0;j<l.length;j++)
	{
		lan=lan+"<ul><li>"+l[j].lang+"</li></ul>";
	}
	lang1.innerHTML=lan;
	right.appendChild(lang1);
}
