#! /usr/bin/env node
import inquirer from "inquirer"

const answer:{ 
    sentence:string} = await inquirer.prompt([
        {
            name:'sentence',
            type:'input',
            message:"please enter your sentence"
        }
    ])

    const word=answer.sentence.trim().split(" ")

    console.log(word)
    console.log(`your sentence length is ${word.length}`)