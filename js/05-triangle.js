var i, j, p = "";

for(i=1;i<=5;i++) {
    for(j=1;j<=i;j++) {
        p += "#"
    }
    p += "\n";
}

window.console.log(p);