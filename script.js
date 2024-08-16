function game(){
    var kh = Number(document.getElementById("khmer").value);
    var ma = Number(document.getElementById("math").value);
    var his = Number(document.getElementById("history").value);
    var bio = Number(document.getElementById("biology").value);
    var chem = Number(document.getElementById("chemistry").value);
    var phy = Number(document.getElementById("physice").value);
    var eng = Number(document.getElementById("english").value);
    var w = document.getElementById("wish");
    var total = (kh+ma+his+bio+chem+phy+eng);
    var avg = total/7;
    var showtotal = document.getElementById("total-score");
    var avg1 = document.getElementById("average");
    var grade = document.getElementById("result1");
    showtotal.innerHTML = "ពិន្ទុសរុប: "+total;
    avg1.innerHTML = "មធ្យមភាគ: "+avg;
    if(total >= 427){
        grade.innerHTML = "លទ្ធផល: A";
        w.innerHTML = "ចូលរួមត្រេកអរផង";
    }else if(total >= 380 ){
        grade.innerHTML = "លទ្ធផល: B";
        w.innerHTML = "ចូលរួមត្រេកអរផង";
    }else if(total >= 332){
        grade.innerHTML = "លទ្ធផល: C";
        w.innerHTML = "ចូលរួមត្រេកអរផង";
    }else if(total >= 285){
        grade.innerHTML = "លទ្ធផល: D";
        w.innerHTML = "ចូលរួមត្រេកអរផង";
    }else if(total >= 237){
        grade.innerHTML = "លទ្ធផល: E";
        w.innerHTML = "ចូលរួមត្រេកអរផង";
    }else{
        grade.innerHTML = "លទ្ធផល: F";
        w.innerHTML = "ចូលរួមសោកស្ដាយផង"
    }
}