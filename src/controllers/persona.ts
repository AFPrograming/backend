import { Request, Response } from 'express';
import Persona from '../models/persona';

export const getPersons = async (req: Request, res: Response) => {
    const listPersons = await Persona.findAll()
    res.json(listPersons)
}

export const getPerson = async (req: Request, res: Response) => {
    const { id } = req.params;
    const person = await Persona.findByPk(id);

    if (person) {
        res.json(person)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
}

export const deletePerson = async (req: Request, res: Response) => {
    const { id } = req.params;
    const person = await Persona.findByPk(id);

    if (!person) {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    } else {
        await person.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito!'
        })
    }
    
}

export const postPerson = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Persona.create(body);

        res.json({
            msg: `La persona fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un Error`
        })
    }
    
}

export const updatePerson = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const persona = await Persona.findByPk(id);

    if(persona) {
        await persona.update(body);
        res.json({
            msg: 'El usuario fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrio un error`
        })
    }
}


