// To create a new order, is needed an user and, a category and a product.
// So --> create an user, do login, create a category, create a product, CRUD order, delete category, delete a product, delete user

// Dependencies
const request = require('supertest');

// Internal Requires
const app = require('../../index');

let server;

// Start the server and database
beforeAll(() => {
  server = app.listen(3004, () => console.log("Server running"));
});

// Close server
afterAll(() => {
  server.close();
});

// Check all CRUD and login routes
describe('Pizzaria API -- Order test', ()=>{ 
  let userId, categoryId, productId, orderId, userToken;

  // CREATE Route --> Check if a new user was created sucessfully
  it('should create an new user', async ()=>{
    const response = await request(app)
    .post('/user/create').send({
      name: "Pedro",
      email: "pedrosilva@gmail.com",
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
      email: "pedrosilva@gmail.com",
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

  // CREATE Route --> Check if a new product was created sucessfully
  it('should create a new product', async ()=>{
    const response = await request(app)
    .post('/product/create').send({
      name: "Test - product create",
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

  // CREATE Route --> Check if a new order was created sucessfully
  it('should create a new order', async ()=>{
    const response = await request(app)
    .post('/order/create').send({
      products: [
        {
          _id: productId,
          quantity: 2
        }
      ],
      totalPrice: 2,
      freight: 2,
      userId: userId,
      completed:  false
    })
    .set('Authorization', `Bearer ${userToken}`);

    orderId = response.body._id;

    console.log(orderId);

    expect(response.statusCode).toEqual(201);
  });

  // READ Route --> Check if a order exist 
  it('should find an order', async ()=>{
    const response = await request(app)
    .get(`/order/findById/${orderId}`)
    .set('Authorization', `Bearer ${userToken}`);
  
    console.log(response.body);


    expect(response.statusCode).toEqual(200);
  });

  // UPDATE Route --> Check if an order was updated sucessfully
  it('should update an order', async ()=>{
    const response = await request(app)
    .patch(`/order/updateStatus/${orderId}`)
    .send()
    .set('Authorization', `Bearer ${userToken}`);
    
    console.log(response.body);

    expect(response.statusCode).toEqual(200);
  });

  // DELETE Route --> Check if an order was deleted sucessfully
  it('should delete an order ', async()=>{
    const response = await request(app)
    .delete(`/order/delete/${orderId}`)
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

  // DELETE Route --> Check if an user was deleted sucessfully
  it('should delete an user ', async()=>{
    const response = await request(app)
    .delete(`/user/delete/${userId}`)
    .set('Authorization', `Bearer ${userToken}`);

    expect(response.statusCode).toEqual(200);
  });

})