"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = require("../controllers/persona");
const router = (0, express_1.Router)();
router.get('/', persona_1.getPersons);
router.get('/:id', persona_1.getPerson);
router.delete('/:id', persona_1.deletePerson);
router.post('/', persona_1.postPerson);
router.put('/:id', persona_1.updatePerson);
exports.default = router;
