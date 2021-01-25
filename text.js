var n=new Array();
n[0]="jyo";
n[1]="kowshi";
n[2]="janu";
n[3]="nandy";
n[4]="harshi";
n[5]="Jaswanth";
n[6]="bunny";
n[7]="yashu";
n[8]="bro";
n[9]="jethin";

for(var i=0;i<n.length;i++){
	if(n[i].charAt(0)==='j'||n[i].charAt(0)==='J'){
		console.log("Goodbye  "+n[i])
	}
	else{
		console.log("Hello  "+n[i])
	}
}