"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var registries = [
    {
        id: 1,
        categoryId: 10,
        company: 'Stefna Ehf',
        date: new Date(),
        description: 'Laun fyrir mánuðinn',
        isIncome: true,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    },
    {
        id: 4,
        categoryId: 10,
        company: 'Stefna Ehf',
        date: new Date(),
        description: 'Laun fyrir mánuðinn',
        isIncome: true,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    },
    {
        id: 6,
        categoryId: 2,
        company: 'Bónus',
        date: new Date(),
        description: 'Matur',
        isIncome: false,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    },
    {
        id: 7,
        categoryId: 10,
        company: 'Stefna Ehf',
        date: new Date(),
        description: 'Laun fyrir mánuðinn',
        isIncome: true,
        isTemplate: false,
        repetitionId: undefined,
        value: 180000
    }
];
router.get('/', function (req, res) {
    res.send(registries);
});
router.get('/:id', function (req, res) {
    var id = req.params.id;
    if (isNaN(id)) {
        res.status(400);
        return res.send({
            message: "'" + id + "' is not a valid id",
            code: 400
        });
    }
    var current = registries.filter(function (x) { return x.id == id; })[0];
    if (current === undefined) {
        res.status(404);
        return res.send({
            message: "no registry found with id: " + id,
            code: 404
        });
    }
    res.send(current);
});
exports.RegisterController = router;
