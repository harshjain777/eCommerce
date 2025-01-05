import { ClockArrowUp,  LayoutDashboard, ShoppingBasket } from "lucide-react"

export const registerFormControl = [
    {
        name: 'userName',
        label:'User Name',
        placeholder:'enter your name',
        type:'text',
        componentType:'input'
    },
    {
        name: 'email',
        label:'Email',
        placeholder:'enter your email',
        type:'email',
        componentType:'input'
    },
    {
        name: 'password',
        label:'Password',
        placeholder:'enter your password',
        type:'password',
        componentType:'input'
    },
]

export const loginFormControl = [
    {
        name: 'email',
        label:'Email',
        placeholder:'enter your email',
        type:'email',
        componentType:'input'
    },
    {
        name: 'password',
        label:'Password',
        placeholder:'enter your password',
        type:'password',
        componentType:'input'
    },
]

export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "men", label: "Men" },
        { id: "women", label: "Women" },
        { id: "kids", label: "Kids" },
        { id: "accessories", label: "Accessories" },
        { id: "footwear", label: "Footwear" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "levi", label: "Levi's" },
        { id: "zara", label: "Zara" },
        { id: "h&m", label: "H&M" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];

  export const shoppingViewHeader = [
    {
      id:'home',
      lable:'Home',
      path:'/shop/home'
    },
    {
      id:'men',
      lable:'Men',
      path:'/shop/listing'
    },
    {
      id:'women',
      lable:'Women',
      path:'/shop/listing'
    },
    {
      id:'kids',
      lable:'Kids',
      path:'/shop/listing'
    },
    {
      id:'footwear',
      lable:'Footwear',
      path:'/shop/listing'
    },
    {
      id:'accessories',
      lable:'Accessories',
      path:'/shop/listing'
    }
  ]

  export const categoryOptionsMap = {
    men: "Men",
    women: "Women",
    kids: "Kids",
    accessories: "Accessories",
    footwear: "Footwear",
  };
  
  export const brandOptionsMap = {
    nike: "Nike",
    adidas: "Adidas",
    puma: "Puma",
    levi: "Levi",
    zara: "Zara",
    "h&m": "H&M",
  };

  export const filterOptions = {
    category: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
    brand: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  };  

  export const sortOptions = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "title-atoz", label: "Title: A to Z" },
    { id: "title-ztoa", label: "Title: Z to A" },
  ];