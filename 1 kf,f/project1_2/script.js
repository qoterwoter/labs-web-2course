function tableMultiplication() {
    let str = '';
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            str += `${i*j} `;
        }
        console.log(str);
        str = '';
    }
}
tableMultiplication();