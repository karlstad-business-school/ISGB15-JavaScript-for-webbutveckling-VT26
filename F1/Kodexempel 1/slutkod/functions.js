window.onload = function(){
    //console.log(document.getElementById("content"));

    let name = "Alexander";
    console.log(name);
    
    function write(name, text){
        document.write("<b>" + name + " wrote: </b>" + text + "<br>");
    }

    write("Pierre", "Hej på er!");
    write(name, "Hej");

    
}


