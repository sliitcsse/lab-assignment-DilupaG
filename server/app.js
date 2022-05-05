const Koa = require("koa");
const app = new Koa();

const KoaRouter = require("koa-router");
const router = new KoaRouter();
const bodyParser = require("koa-bodyparser");

const port = 5000;

app.use(bodyParser());

//arrays
var users = [
  { id:"0", name: "Dilupa", email: "dilupa@gmail.com", phone: "0767008955", type: "Customer" },
  { id:"1011", name: "Poorna", email: "poorna@gmail.com", phone: "0767032955", type: "Trader" }
];

var items = [
  { id:"0", name: "T-shirt", count: 5, price:2000, category: "Clothing", promotion:'no promotion' },
  { id:"0101", name: "Iphone", count: 10, price:30000, category: "Electronics", promotion:'50%' }
];

var wishList = [

];

var cart = [
 
];



//users middleware
const getUser = async (ctx) => {
  ctx.body = users;
};

const addUser = async (ctx) => {
  var uin = ctx.request.body;
  const id = new Date().getTime().toString()
  users.push({...uin,id});
  ctx.body = { users: users };
};



//items middleware
const getItems = async (ctx) => {
  ctx.body = items;
};

const addItems = async (ctx) => {
  var uin = ctx.request.body;
  const id = new Date().getTime().toString()
  items.push({...uin,id});
  ctx.body = { items: items };
};

const editItems = async (ctx) => {
  let uin = ctx.request.body;
  const newItem = items.filter((item)=>{
    if(item.id!=uin.id){
      return item
    }
  })
  items = [...newItem,uin]
  ctx.body = { items: items };
};



// wishList middleware
const addToWishList = async (ctx) => {
  var uin = ctx.request.body;
  var id = wishList.find((item)=>item.id==uin.id)

  if(id){
    console.log('already exists in wishlist');
    ctx.body = 'Added to wishList'
  }else{
    wishList.push({...uin});
    ctx.body = 'Added to wishList'
  }
  
  
};

const getWishList = async (ctx) => {
  ctx.body = wishList;
};



// cart middleware
const addToCart = async (ctx) => {
  var uin = ctx.request.body;
  const cid = new Date().getTime().toString()
  var id = cart.find((item)=>item.id==uin.id)

  if(id){
    console.log('already exists in wishlist');
    ctx.body = 'Added'
  }else{
    cart.push({...uin,cid});
    ctx.body = 'Added to cart'
  }
     
};
const getCart = async (ctx) => {
  ctx.body = cart;
};




//userRoutes
router.get("/getUsers", getUser);
router.post("/addUser", addUser);


//itemRoutes
router.get("/getItems", getItems);
router.post("/addItems", addItems);
router.post("/editItems",editItems)


//wishListRoutes
router.get("/getWishList", getWishList);
router.post("/addToWishList", addToWishList);


//CartRoutes
router.get("/getCart", getCart);
router.post("/addToCart", addToCart);



app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});