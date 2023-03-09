"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "u001",
        email: "caio1801@gmail.com",
        password: "blablablabla"
    },
    {
        id: "u002",
        email: "bahia@gmail.com",
        password: "kaosdsa"
    }
];
exports.products = [
    {
        id: "p001",
        name: "Sabao em pó",
        price: 4.2,
    },
    {
        id: "p001",
        name: "vassoura",
        price: 8
    }
];
exports.purchases = [
    {
        id: "pc001",
        buyerId: "u001",
        productId: "p001",
        quantity: 2,
        totalPrice: 8.4,
    },
    {
        id: "pc002",
        buyerId: "u002",
        productId: "p002",
        quantity: 1,
        totalPrice: 8,
    }
];
//# sourceMappingURL=database.js.map