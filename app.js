function getPass() {

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


    const upp = document.getElementById("upperCase").checked
    const lowe = document.getElementById("lowerCase").checked
    const numbe = document.getElementById("numbers").checked
    const chara = document.getElementById("characters").checked

    const getChrs = () => {
        let chras

        if (lowe && numbe && chara && upp) { chras = upper + lower + number + special }

        // triple
        else if (upp && lowe && numbe) { chras = upper + lower + number }
        else if (upp && lowe && chara) { chras = upper + lower + special }
        else if (upp && numbe && chara) { chras = upper + number + special }

        else if (lowe && numbe && chara) { chras = lower + number + special }

        // Double

        else if (upp && lowe) { chras = upper + lower }
        else if (upp && chara) { chras = upper + special }
        else if (upp && numbe) { chras = upper + number }

        else if (lowe && chara) { chras = special + lower }
        else if (lowe && numbe) { chras = number + lower }

        else if (chara && numbe) { chras = number + special }

        // Single

        else if (chara) { chras = special }
        else if (numbe) { chras = number }
        else if (lowe) { chras = lower }
        else if (upp) { chras = upper }
        else { chras = "" }

        return chras
    }

    const chrs = getChrs()

    const leng = document.getElementById("lengthPass").value
    let pass = ""

    if (leng > 50) {
        document.getElementById("password").value = "Maximum Limit is 50!!!"
    }

    else if (chrs === "") {
        document.getElementById("password").value = "Select Atleat One Option Below!!"
    }
    else {
        for (let i = 0; i < leng; i++) {
            let rand = Math.floor(Math.random() * chrs.length)
            pass += chrs.substring(rand, rand + 1)
        }
        document.getElementById("password").value = pass
    }
}