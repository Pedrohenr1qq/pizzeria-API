// To create a new product, is needed an user and a category.
// So --> create an user, do login, create a category, CRUD product, delete category, delete user

// Dependencies
const request = require('supertest');

// Internal Requires
const app = require('../../index');

let server;

// Start the server and database
beforeAll(() => {
  server = app.listen(3003, () => console.log("Server running"));
});

// Close server
afterAll(() => {
  server.close();
});

// Check all CRUD and login routes
describe('Pizzaria API -- Product test', ()=>{ 
  let userId, categoryId, productId, userToken;

  // CREATE Route --> Check if a new user was created sucessfully
  it('should create an new user', async ()=>{
    const response = await request(app)
    .post('/user/create').send({
      name: "Pedro",
      email: "pedrohenrique@gmail.com",
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
      email: "pedrohenrique@gmail.com",
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
      name: "Test Category"
    })
    .set('Authorization', `Bearer ${userToken}`);

    categoryId = response.body._id;

    expect(response.statusCode).toEqual(201);
  });

  // CREATE Route --> Check if a new product was created sucessfully
  it('should create an new product', async ()=>{
    const response = await request(app)
    .post('/product/create').send({
      name: "Test Product",
      description: "Teste description",
      size: "Test size",
      unitPrice: 1,
      image: "test image",
      category:
        {
          _id: categoryId,
        }
    })
    .set('Authorization', `Bearer ${userToken}`);

    productId = response.body._id;

    expect(response.statusCode).toEqual(201);
  });

  // READ Route --> Check if a product exist 
  it('should find a product', async ()=>{
    const response = await request(app)
    .get(`/product/findById/${productId}`)
    .set('Authorization', `Bearer ${userToken}`);
  
    expect(response.statusCode).toEqual(200);
  });

  // UPDATE Route --> Check if a product was updated sucessfully
  it('should update a product', async ()=>{
    const response = await request(app)
    .put(`/product/update/${productId}`)
    .send({
      name: "Test name 2",
      description: "Teste description 2",
      size: "Test size 2",
      unitPrice: 10,
      image: "test image 2",
      category:
        {
          _id: categoryId,
        }
    })
    .set('Authorization', `Bearer ${userToken}`);
    
    expect(response.statusCode).toEqual(200);
  });

  // DELETE Route --> Check if a product was deleted sucessfully
  it('should delete a product ', async()=>{
    const response = await request(app)
    .delete(`/product/delete/${productId}`)
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