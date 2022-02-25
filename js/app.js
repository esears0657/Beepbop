for(var a=1;a<=25;a++) {
    if(a%3==0)
        console.log("beep");
    else if(a%5==0)
        console.log("bop");
    else if(a%3==0 && i%5==0)
        console.log("beepbop");
    else
        console.log(a);
}
//runs 25 times, if a eqauls a certain value, display either beep, bop, or beepbop, otherwise just display a