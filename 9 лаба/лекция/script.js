const myCostumers = [
    { id: 1, name: 'Ivan Ivanov', email: 'ivanov@mail.ru' },
    { id: 2, name: 'Pter Petrov', email: 'petrov@mail.ru' },
    { id: 3, name: 'Sidr Sidorov', email: 'sidorov@mail.ru' }
]

const myGoods = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Orange' },
    { id: 3, name: 'Rice' },
    { id: 4, name: 'Buckweet' }
]

const myOrders = [
    { id: 1, customer_id: 1, good_id: 1 },
    { id: 2, customer_id: 1, good_id: 2 },
    { id: 3, customer_id: 3, good_id: 3 },
    { id: 4, customer_id: 3, good_id: 4 },
]

// function getCustomerByEmail(email, callback) {
//     console.log('start getting customer');

//     let customer;

//     setTimeout(() => {
//         console.log('finish getting customers');
//         customer = myCostumers.find(item => item.email === email);
//         callback(customer.id);
//     }, 1000)

//     return customer;
// }

// function getOrdersByCustomerId(customer_id) {
//     console.log('start gettind orders');
//     let orders;

//     setTimeout(() => {
//         console.log('finish getting orders');
//         orders = myOrders.filter(item => item.customer_id === customer_id);
//     }, 1000)

//     return orders;
// }

// function getGoodById(id) {
//     console.log('start getting good');
//     let good;
//     setTimeout(() => {
//         good = myGoods.find(item => item.id === id);
//     }, 1000);
//     return good;
// }

// (function() {
//     let str = 'sidorov@mail.ru';
//     let customer = getCustomerByEmail(str, getOrdersByCustomerId);
//     console.log(customer);
// })()

// PROMISE

function getCustomerByEmail(email) {
    return new Promise((resolve, reject) => {
        console.log('start getting customer');
        setTimeout(() => {
            console.log('finish getting customer');
            let succes = true;
            if (succes) {
                let customer = myCostumers.find(item => item.email === email);
                resolve(customer);
            } else {
                reject('error while getting customer');
            }
        }, 1000);
    })
}

function getOrdersByCustomerId(customer_id) {
    return new Promise((resolve, reject) => {
        console.log('start gettind orders');
        setTimeout(() => {
            console.log('finish gettind order');
            let succes = true;
            if (succes) {
                let orders = myOrders.filter(item => item.customer_id === customer_id);
                resolve(orders);
            } else {
                reject('error while getting orders');
            }
        }, 1000);
    })
}

function getGoodById(id) {
    return new Promise((resolve, reject) => {
        console.log('start gettind good');
        setTimeout(() => {
            console.log('finish gettind good');
            let succes = true;
            if (succes) {
                let good = myGoods.find(item => item.id === id);
                resolve(good);
            } else {
                reject('error while getting good')
            }
        }, 1000);
    })
}

(function() {
    let str = 'sidorov@mail.ru';
    // let customer = getCustomerByEmail(str);
    // console.log(customer)

    getCustomerByEmail(str)
        .then(customer => getOrdersByCustomerId(customer.id))
        .then(orders => getGoodById(orders.id))
        .catch(err => console.error(err))
})()