"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePerson = exports.postPerson = exports.deletePerson = exports.getPerson = exports.getPersons = void 0;
const persona_1 = __importDefault(require("../models/persona"));
const getPersons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listPersons = yield persona_1.default.findAll();
    res.json(listPersons);
});
exports.getPersons = getPersons;
const getPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const person = yield persona_1.default.findByPk(id);
    if (person) {
        res.json(person);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getPerson = getPerson;
const deletePerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const person = yield persona_1.default.findByPk(id);
    if (!person) {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
    else {
        yield person.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito!'
        });
    }
});
exports.deletePerson = deletePerson;
const postPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield persona_1.default.create(body);
        res.json({
            msg: `La persona fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un Error`
        });
    }
});
exports.postPerson = postPerson;
const updatePerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const persona = yield persona_1.default.findByPk(id);
        if (persona) {
            yield persona.update(body);
            res.json({
                msg: 'El usuario fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error`
        });
    }
});
exports.updatePerson = updatePerson;
