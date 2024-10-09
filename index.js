function tinhnamnhuan() {
    let year = parseFloat(document.getElementById("a").value);
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                alert('năm này nhuận')
            } else {
                alert('năm này không nhuận ')
            }

        } else {
            alert('năm nay nhuận')
        }
    } else {
        alert('năm nay không nhuận')
    }
}