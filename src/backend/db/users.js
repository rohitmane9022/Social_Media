import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // ------1st user---------
  {
    _id: uuid(),
    firstName: "Wes",
    lastName: "Bos",
    username: "wesbos",
    password: "wesBos123@",
    createdAt: new Date("January 02 2021 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079623/7G9vGTca_400x400_stnhcl.jpg",
    bio: "Aspiring Frontend Engineer.",
    bookmarks: [],
    website: "https://wesbos.com/",
    following: [
      
      
    ],

    followers: [
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "Mane",
        username: "Rohit",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
      },
    ],
  },

  //--------2nd user------
  {
    _id: uuid(),
    firstName: "Rohit",
    lastName: "Mane",
    username: "Rohit",
    password: "Rohit",
    createdAt: new Date("November 04 2016 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
    bio: "Belive in the lord with your heart ❤️",
    bookmarks: [],
    website: "https://ecommerce-ob2s.vercel.app/",
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: "Carl",
        lastName: "Smith",
        username: "carlsmith",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
      },
    ],
  },
  //-----------3rd user--------------
  {
    _id: uuid(),
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    password: "janedoe123",
    createdAt: new Date("January 07 2019 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079489/jane-doe_il3cvx_bkjgx8.webp",
    bio: "Whats in bio?",
    bookmarks: [],
    website: "https://ecommerce-ob2s.vercel.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Carl",
        lastName: "Smith",
        username: "carlsmith",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
      },
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "Mane",
        username: "Rohit",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Carl",
        lastName: "Smith",
        username: "carlsmith",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
      },
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "Mane",
        username: "Rohit",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
      },
    ],
  },

  //-----------4th user--------------
  {
    _id: uuid(),
    firstName: "Carl",
    lastName: "Smith",
    username: "carlsmith",
    password: "carlsmith123",
    createdAt: new Date("September 10 2018 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
    bio: "Whats in bio?",
    bookmarks: [],
    website: "https://ecommerce-ob2s.vercel.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Jones",
        username: "sophiajones",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
      },
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "Mane",
        username: "Rohit",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Jones",
        username: "sophiajones",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
      },
      
    ],
  },

  
  
  //-----------5th user--------------
  {
    _id: uuid(),
    firstName: "Alex",
    lastName: "Maxwell",
    username: "alexmaxwell",
    password: "alexmaxwell123",
    createdAt: new Date("July 04 2017 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079687/alex-maxwell_ghtzkg.webp",
    bio: "What's up?",
    bookmarks: [],
    website: "https://ecommerce-ob2s.vercel.app/",
    following: [],
    followers: [
      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Jones",
        username: "sophiajones",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
      },
      
    ],
  },
  //-----------6th user--------------
  {
    _id: uuid(),
    firstName: "Sophia",
    lastName: "Jones",
    username: "sophiajones",
    password: "sophiajones123",
    createdAt: new Date("August 22 2020 09:09:09"),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
    bio: "Frontend Engineer",
    bookmarks: [],
    website: "https://ecommerce-ob2s.vercel.app/",
    following: [
    ],
    followers: [
    ],
  },
  
];
