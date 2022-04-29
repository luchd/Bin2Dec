window.onload = () => {
    document.querySelector("button").addEventListener("click", () => {
        const binInp = document.querySelector("#bin").value;
        let p = 0;
        let ans = 0;
        let flag = true;
        for (var i = binInp.length - 1; i >= 0; i--) {
            if (binInp[i] != '0' && binInp[i] != '1') {
                flag = false;
                break;
            }
        }
        if (flag) {
            for (var i = binInp.length - 1; i >= 0; i--) {
                ans = ans + parseInt(binInp[i]) * Math.pow(2, p);
                p = p + 1;
            }
            document.querySelector("#dec").value = ans;
        }
        else {
            document.querySelector("#bin").value = "";
            alert("Your number is not a binary one. Please try again!");
        }
    });
}
