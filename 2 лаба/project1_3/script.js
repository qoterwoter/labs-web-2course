let lettersRusEng = [
    ['а', 'a'],
    ['б', 'b'],
    ['в', 'v'],
    ['г', 'g'],
    ['д', 'd'],
    ['е', 'e'],
    ['ё', 'yo'],
    ['ж', 'zh'],
    ['з', 'z'],
    ['и', 'i'],
    ['й', 'j'],
    ['к', 'k'],
    ['л', 'l'],
    ['м', 'm'],
    ['н', 'n'],
    ['о', 'o'],
    ['п', 'p'],
    ['р', 'r'],
    ['с', 's'],
    ['т', 't'],
    ['у', 'u'],
    ['ф', 'f'],
    ['х', 'kh'],
    ['ц', 'c'],
    ['ч', 'ch'],
    ['ш', 'sh'],
    ['щ', 'shh'],
    ['ъ', '``'],
    ['ы', 'y'],
    ['ь', '`'],
    ['э', 'e`'],
    ['ю', 'yu'],
    ['я', 'ya'],
    ['А', 'A'],
    ['Б', 'B'],
    ['В', 'V'],
    ['Г', 'G'],
    ['Д', 'D'],
    ['Е', 'E'],
    ['Ё', 'YO'],
    ['Ж', 'ZH'],
    ['З', 'Z'],
    ['И', 'I'],
    ['Й', 'J'],
    ['К', 'K'],
    ['Л', 'L'],
    ['М', 'M'],
    ['Н', 'N'],
    ['О', 'O'],
    ['П', 'P'],
    ['Р', 'R'],
    ['С', 'S'],
    ['Т', 'T'],
    ['У', 'U'],
    ['Ф', 'F'],
    ['Х', 'KH'],
    ['Ц', 'C'],
    ['Ч', 'CH'],
    ['Ш', 'SH'],
    ['Щ', 'SHH'],
    ['Ъ', '``'],
    ['Ы', 'Y'],
    ['Ь', '`'],
    ['Э', 'E`'],
    ['Ю', 'YU'],
    ['Я', 'YA'],
]

function toTranslit() {
    let str = prompt('Введите строку:');
    let translitStr = '';
    if (str != '' && str != null) {
        let spltStr = str.split('');
        for (let i in spltStr) {
            let count = 0;
            for (let j in lettersRusEng) {
                if (spltStr[i] == lettersRusEng[j][0]) {
                    translitStr += lettersRusEng[j][1];
                } else if (!spltStr[i].includes(lettersRusEng[j][0]) && count == lettersRusEng.length - 1) {
                    translitStr += str[i];
                } else {
                    count++;
                }
            }
        }
        console.log(translitStr);
    }
}
toTranslit();