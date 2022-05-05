const Koa = require("koa");
const app = new Koa();

const KoaRouter = require("koa-router");
const router = new KoaRouter();
const bodyParser = require("koa-bodyparser");

const port = 5000;

app.use(bodyParser());

//arrays
var users = [
  { id:"0", name: "Dilupa", email: "dilupa@gmail.com", phone: "0767008955", type: "Customer" }
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


//userRoutes
router.get("/getUsers", getUser);
router.post("/addUser", addUser);



//itemRoutes
router.get("/getItems", getItems);
router.post("/addItems", addItems);
router.post("/editItems",editItems)







app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});