function stringOut() {
    let stringByUser = prompt('Введите массив, разделяя элементы ";":', '');
    if (stringByUser == '' || stringByUser == null) {
        stringOut();
    }
    let array = stringByUser.split(';');
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '') delete array[i];
        document.write(array[i] + "<br>")
    }
}
stringOut();