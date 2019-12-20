const Hobbit = require('./hobbitsModel.js');
const db = require("../data/dbconfig.js");

describe("hobbit model", function(){

    
        beforeEach( async ()=>{
           await db('hobbit').truncate();
        })
   

    describe("insert()", function(){

        it('should insert hobbit to the db', async function(){
            // call insert, passing a hobbit object
            await Hobbit.insert({name: 'Sam'});
            await Hobbit.insert({name:"Gaffer"});

            //check the database directly 
            const hobbits = await db('hobbit');
            expect(hobbits).toHaveLength(2);
        })
    })

    describe("delete()", function(){

        it('Should add and delete a resource', async function(){

            //inserting into the database
            await Hobbit.insert({name: "yeet"});

            //deleting from the database
            const hobbits = await db('hobbit');
            expect(hobbits).toHaveLength(1);

            await Hobbit.remove(1);

            const newHobbits = await db('hobbit');
            expect(newHobbits).toHaveLength(0);
        })
    })
})