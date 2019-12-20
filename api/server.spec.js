const request = require('supertest');
const db = require("../data/dbconfig.js");
const model = require("../hobbits/hobbitsModel.js");
const server = require('./server.js');

describe("get all hobbits", function(){

    beforeEach( async ()=>{
        await db('hobbit').truncate();
     })

    describe('get /hobbit',  function(){

        it('should be 200 status', async function(){

            await model.insert({name: "Yeet"})
            await model.insert({name: "Yate"})
    
            return request(server)
    
            .get('/hobbits')
    
            .then(res=>{
                expect(res.status).toBe(200);
            })
        })

        it('should return json', async function(){
            return request(server)
            .get('/hobbits')
            .then(res=>{
                expect(res.type).toMatch(/json/i)
            })
        })

    })

    describe('post /hobbit',  function(){

        it('responds with json', function(done) {
            request(server)
              .post('/hobbits')
              .send({name: 'john'})
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200)
              .end(function(err, res) {
                if (err) return done(err);
                done();
              });
        });


    })
})