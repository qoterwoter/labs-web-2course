let table = ['Multipliaction Table'];

function MultiplicationTable() {
    for (let i = 1; i < 10; i++) {

        let innerTable = ['line:'];
        for (let j = 1; j < 10; j++) {
            innerTable.push(i * j)
        }
        table.push(innerTable);
    }
    console.log(table);
}

function MultiTableOut(numberX, numberY) {
    if (numberX == 0 || numberY == 0 || numberX > 9 || numberY > 9) {
        return;
    } else {
        console.log(table[numberX][numberY]);
    }
}
MultiplicationTable();
MultiTableOut(5, 5);
MultiTableOut(0, 0);
MultiTableOut(3, 5);
MultiTableOut(8, 5);
MultiTableOut(18, 5);