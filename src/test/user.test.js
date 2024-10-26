// Dependencies
const request = require('supertest');

// Internal Requires
const app = require('../../index');

// Start the server and database
beforeAll(() => {
  app.listen(3001, () => console.log("Server running"));
});

// Check all CRUD and login routes
describe('Pizzaria API -- USER test', ()=>{ 
  let userId, userToken, addressId;

  // CREATE Route --> Check if a new user was created sucessfully
  it('should create an new user', async ()=>{
    const response = await request(app)
    .post('/user/create').send({
      name: "Pedro",
      email: "pedrinho@gmail.com",
      password: "pedro123",
      admin: true
    })

    userId = response.body._id;

    expect(response.statusCode).toEqual(201);
  });

  // Login Route --> Check if a user LOGIN is valid
  it('should be a valid login', async ()=>{
    const response = await request(app)
    .post('/auth/login').send({
      email: "pedrinho@gmail.com",
      password: "pedro123"
    })
    .set('Authorization', `Bearer ${userToken}`);

    userToken = response.body.token;

    expect(response.statusCode).toEqual(200);
  });

  // addAddress Route --> Check if a user was updated sucessfully
  it('should add address an user', async ()=>{
    const response = await request(app)
    .post(`/user/addAddress/${userId}`)
    .send([{
      street: "Rua 1",
      number: 10,
      CEP: "666111-1"
    }]).set('Authorization', `Bearer ${userToken}`);
    
    expect(response.statusCode).toEqual(200);
  });

  // READ Route --> Check if a user exist 
  it('should find an user', async ()=>{
    const response = await request(app)
    .get(`/user/findById/${userId}`)
    .set('Authorization', `Bearer ${userToken}`);

    addressId = response.body.addresses[0]._id;
  
    expect(response.statusCode).toEqual(200);
  });

  // UPDATE Route --> Check if a user was updated sucessfully
  it('should update an user', async ()=>{
    const response = await request(app)
    .put(`/user/update/${userId}`)
    .send({
      name: 'Pedro Henrique',
      email: "pedrinho@gmail.com",
      password: "pedro123",
      admin: false
    }).set('Authorization', `Bearer ${userToken}`);
    
    expect(response.statusCode).toEqual(200);
  });

  // removeAddress Route --> Check if a user exist 
  it('should remove a address from a user', async ()=>{
    const response = await request(app)
    .delete(`/user/removeAddress/${userId}`)
    .send({
      addressId: addressId
    })
    .set('Authorization', `Bearer ${userToken}`)

    expect(response.statusCode).toEqual(200);
  });

  // DELETE Route --> Check if a user was deleted sucessfully
  it('should delete an user ', async()=>{
    const response = await request(app)
    .delete(`/user/delete/${userId}`)
    .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
  });

})