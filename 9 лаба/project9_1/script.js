const userInfo = new Object();

async function sendInfo() {
    getVisa();
    getTicket();
    getHotel();
    setTimeout(() => {
        console.log('Ticket info:')
        console.log(userInfo)
    }, 5500);
}



async function getVisa(email) {
    console.log('Получение визы');
    setTimeout(() => {
        console.log('Виза получена');
        userInfo.brirthday_date = document.getElementsByName("brirthday_date")[0].value;
        userInfo.name = document.getElementsByName('name')[0].value;
        userInfo.pass = document.getElementsByName('pass')[0].value;
    }, 1000);
}


async function getTicket(customer_id) {
    console.log('Покупка билета');
    setTimeout(() => {
        console.log('Билет куплен');
        userInfo.flight_date = document.getElementsByName('flight_date')[0].value;
        userInfo.current_city = document.getElementsByName('city')[0].value;
    }, 3000)
}


async function getHotel(id) {
    console.log('Бронирование отеля');
    setTimeout(() => {
        console.log('Отель забронирован');
        userInfo.hotel_date = document.getElementsByName('hotel_date')[0].value;
        userInfo.hotel_days = document.getElementsByName('hotel_days')[0].value;
    }, 5000);
}