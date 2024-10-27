// To create a new category, is needed an user.
// So --> create an user, do login, CRUD category, delete user

// Dependencies
const request = require('supertest');

// Internal Requires
const app = require('../../index');

// Start the server and database
beforeAll(() => {
  app.listen(3002, () => console.log("Server running"));
});

// Check all CRUD and login routes
describe('Pizzaria API -- Category test', ()=>{ 
  let userId, categoryId, userToken;

  // CREATE Route --> Check if a new user was created sucessfully
  it('should create an new user', async ()=>{
    const response = await request(app)
    .post('/user/create').send({
      name: "Pedro",
      email: "pedro@gmail.com",
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
      email: "pedro@gmail.com",
      password: "pedro123"
    })
    .set('Authorization', `Bearer ${userToken}`);

    userToken = response.body.token;

    expect(response.statusCode).toEqual(200);
  });


  // CREATE Route --> Check if a new category was created sucessfully
  it('should create an new category', async ()=>{
    const response = await request(app)
    .post('/category/create').send({
      name: "Test"
    })
    .set('Authorization', `Bearer ${userToken}`);

    categoryId = response.body._id;

    expect(response.statusCode).toEqual(201);
  });

  // READ Route --> Check if a category exist 
  it('should find a category', async ()=>{
    const response = await request(app)
    .get(`/category/findById/${categoryId}`)
    .set('Authorization', `Bearer ${userToken}`);
  
    expect(response.statusCode).toEqual(200);
  });

  // UPDATE Route --> Check if a category was updated sucessfully
  it('should update a category', async ()=>{
    const response = await request(app)
    .put(`/category/update/${categoryId}`)
    .send({
      name: 'Test 2'
    })
    .set('Authorization', `Bearer ${userToken}`);
    
    expect(response.statusCode).toEqual(200);
  });

  // DELETE Route --> Check if a category was deleted sucessfully
  it('should delete a category ', async()=>{
    const response = await request(app)
    .delete(`/category/delete/${categoryId}`)
    .set('Authorization', `Bearer ${userToken}`);

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