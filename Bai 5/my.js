function diem_trung_binh() {
    let Mark1 = +document.getElementById('mark1').value;
    let Mark2 = +document.getElementById('mark2').value;
    let Mark3 = +document.getElementById('mark3').value;
    let MarkTB = (Mark1 + Mark2 + Mark3) / 3;
    document.getElementById('result').innerHTML = 'Điểm TB của bạn là:' + ' ' + MarkTB
}