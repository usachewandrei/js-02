//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
let year = +prompt('Укажите год')
let yearTall = year % 4;
if (yearTall === 0) {
    alert('Высокосный')
} else
    alert('Не высокосный')