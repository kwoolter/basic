// My first js function
function myFunction() {

    /* this is going to be
    a big comment
     */

    var x = 1;
    var y = 2;
    var z = x + y;

    document.getElementById("intro").innerHTML = "Paragraph changed.";
    document.write("<p>...and some more...!</p>");
    document.write(z);

    return z;

}