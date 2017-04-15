function jsfile()
{
	document.getElementById("handle").innerHTML="";
	var i = document.getElementById("username");
   AElistner("http://codeforces.com/api/user.info?handles="+i.value);
    var error=document.getElementById("error");
	error.innerHTML="";
	
}
function AElistner(i)
{
	var obj = new XMLHttpRequest();
obj.addEventListener("load", RL);
obj.addEventListener("error", ED);
obj.open("GET", i);
obj.send();
}


function RL() {
  console.log(JSON.parse(this.responseText));
  var a = JSON.parse(this.responseText);
  document.getElementById("handle").src=a.result[0].avatar;
  var c=document.getElementById("un");
  c.innerHTML="Handle : "+ a.result[0].handle;
  var name =document.getElementById("name");
  name.innerHTML="Name: "+a.result[0].firstName+" "+a.result[0].lastName;

  var email=document.getElementById("email");
  email.innerHTML="E-mail : "+ a.result[0].email;
  var organisation=document.getElementById("organisation");
  organisation.innerHTML="Organisation : "+ a.result[0].organization;
  var con=document.getElementById("con");
  con.innerHTML="Contribution : "+ a.result[0].contribution;
  var FOC=document.getElementById("FOC");
  FOC.innerHTML="Friend of count : "+ a.result[0].friendOfCount;
  var city=document.getElementById("city");
  city.innerHTML="City : "+ a.result[0].city;
  var maxrating=document.getElementById("maxrating");
  maxrating.innerHTML="Max Rating : "+ a.result[0].maxRating;
  var maxrank=document.getElementById("maxrank");
  maxrank.innerHTML="Max Rank : "+ a.result[0].maxRank;
  var rank=document.getElementById("rank");
  rank.innerHTML="Rank : "+ a.result[0].rank;
  var rating=document.getElementById("rating");
  rating.innerHTML="Rating : "+ a.result[0].rating;
  var LO=document.getElementById("LO");
  LO.innerHTML="Time since last login : "+ a.result[0].lastOnline;
  var regtime=document.getElementById("regtime");
  regtime.innerHTML="Time since registered : "+ a.result[0].regTime;
  
  document.getElementById("table").style="";
}


function ED(){
	var error=document.getElementById("error");
	error.innerHTML="USERNAME DOES NOT EXIST";
	var c=document.getElementById("un");
    c.innerHTML="";
    
	var name =document.getElementById("name");
    name.innerHTML="";
    document.getElementById("handle").src="";
    var email=document.getElementById("email");
    email.innerHTML="";
    var organisation=document.getElementById("organisation");
    organisation.innerHTML="";
    var con=document.getElementById("con");
    con.innerHTML="";
    var FOC=document.getElementById("FOC");
    FOC.innerHTML="";
    var city=document.getElementById("city");
    city.innerHTML="";
    var maxrating=document.getElementById("maxrating");
    maxrating.innerHTML="";
    var maxrank=document.getElementById("maxrank");
    maxrank.innerHTML="";
    var rank=document.getElementById("rank");
    rank.innerHTML="";
    var rating=document.getElementById("rating");
    rating.innerHTML="";
    var LO=document.getElementById("LO");
    LO.innerHTML="";
    var regtime=document.getElementById("regtime");
    regtime.innerHTML="";
	
	document.getElementById("table").style="";
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	