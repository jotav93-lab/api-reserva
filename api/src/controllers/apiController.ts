import { Request, Response } from "express";
import { redirect } from "react-router-dom";
import { Sequelize } from "sequelize";
import { Phrase } from '../models/Phrases';

const express = require('express')
const app = express()

export const ping = (req: Request, res:Response) =>{
    res.json({pong:true});
}

export const random = (req:Request, res:Response) =>{
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({number: nRand});
}

export const nome = (req: Request, res:Response) => {
    let nome: string = req.params.nome;
    res.json({nome: `Você enviou o nome ${nome}`});
}

export const createPhrase = async(req: Request, res: Response) => {
    let { author, txt, telefone } = req.body;
    
    let newPhrase = await Phrase.create({ author, txt, telefone });

    res.status(200);    
    res.send(`<h1>RESERVA CONCLUIDA SUCESSO!</h1>`)
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();
    res.json({ list });
}

export const getPhrase = async (req: Request, res: Response) => {
    let {id} = req.params;

    let phrase = await Phrase.findByPk(id);
    if(phrase){
        res.json({ phrase });
    } else {
        res.json({ error: 'Frase não encontrada'})
    }

    res.json({});
}

export const updatePhrase = async(req: Request, res:Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrase.findByPk(id);
    if(phrase){
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save()

        res.json({ phrase });

    } else {
        res.json({ error: 'Frase não encontrada' });
    }
}

export const deletePhrase = async (req: Request, res: Response) => {
    let { id } = req.params;    
    await Phrase.destroy({where: { id }});
    res.json({});
}

export const createTelefone = async (req: Request, res: Response) => {
    let { author, txt, telefone } = req.body;
    let newTelefone = await Phrase.create({ author, txt, telefone });
    
    res.status(200);    
    res.json({});
}

export const randomPhrase = async(req: Request, res:Response) => {
    let phrase = await Phrase.findOne({
        order:[
            Sequelize.fn('RAND')
        ]
    }); 
    if(phrase) {
    res.json({ phrase });
    } else {
        res.json({ error: 'Não há frases cadastradas!' });
    }
}

