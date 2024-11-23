import express from "express";
import { Book } from "../models/bookModel.js";

const router=express.Router();


//route for saving a new book
router.post("/",async (req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:"send all required fields: title,author,publishYear"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

//route to get all books from database
router.get("/",async (req,res)=>{
    try {
        const books=await Book.find();
        return res.status(200).json({
            count:books.length,
            data:books,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

//route to get one book by it's id
router.get("/:_id",async (req,res)=>{
    try {
        const {_id} = req.params;
        const book=await Book.findById(_id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

//update a book in a database
router.put("/:id",async (req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({message:"send all required fields: title,author,publishYear"})
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).send({message:"book not found"})
        }
        return res.status(200).send({ message: "book updated successfully "});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

//route for deleting a book
router.delete("/:id",async (req,res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).send({message:"book not found"})
        }
        return res.status(200).send({ message: "book deleted successfully "});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
})

export default router;
