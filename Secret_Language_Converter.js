function Secret_Language_Converter(){
 let input = document.getElementById("Text").value;
 let words = input.split(" ");
 let conversion = "";
 let  Newalph = {a: "t", b:"h", c:"e", d:"s",
 e:"e",f:"n", g:"v", h:"i", i:"t", j:"z", k:"a", l:"i",
m:"d", n:"e", o:"n", p:"p", q:"q", r:"r", s:"s", t:"b", u:"u",
v:"c", w:"f", x:"o", y:"p", z:"j"} 

 for(let x = 0; x < words.length; x++){
    conversion +=  
 }
 
 document.getElementById("converted").value = conversion;
}