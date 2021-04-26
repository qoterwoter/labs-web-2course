function countOfDays() {
    let daysCount = +prompt('Ведите количество дней (меньше 100):', '');
    if (daysCount >= 100) {
        countOfDays();
    } else {
        alert(`Осталось ${100 - daysCount} дней!`);
    }
}

countOfDays();