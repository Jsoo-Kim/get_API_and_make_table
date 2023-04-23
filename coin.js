function getData() {
    fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC')
        .then(response => response.json())
        .then(data => {
            // document.getElementById("coinData").innerHTML = JSON.stringify(data);
            data = data[0];
            const rowCnt = data.length;

            document.write('<table border="1">');
            for (let field in data) {
                document.write('<tr>');
                document.write('<td>' + field + '</td>')
                document.write('<td>' + data[field] + '</td>')
                document.write('</tr>')
            }
            document.write('</table>');
        })
        .catch(error => console.error(error));
}

