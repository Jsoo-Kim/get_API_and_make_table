// 1. 코인 현재가 정보 테이블
function getData(marketName) {
    fetch(`https://api.upbit.com/v1/ticker?markets=${marketName}`)
        .then(response => response.json())
        .then(data => {
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


// 2. market 이름 입력 받아서 데이터(테이블) 호출하기
const marketButton = document.querySelector("#submit-button")
console.log(marketButton)
if (marketButton !== null) {
    marketButton.addEventListener("click", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();  // 폼 제출 기본 동작 중단

    const inputValue = document.querySelector('#input-market-name').value;  // 입력 필드 값 가져오기

    // API 호출
    getData(inputValue);
}

