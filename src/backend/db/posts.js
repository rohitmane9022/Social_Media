import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Nice Weather Today!!",
    mediaUrl:
      "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rohit",
          lastName: "Mane",
          username: "rohitmane9022",
          avatarURL:
            "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
       firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [
           
          ],
          downvotedBy: [],
        },
        createdAt: new Date("January 02 2023 09:09:09"),
      },
    ],
    username: "wesbos",
    firstName: "Wes",
    lastName: "Bos",
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079623/7G9vGTca_400x400_stnhcl.jpg",
    createdAt: new Date("January 01 2023 09:09:09"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Who's up for Pineapple Pastry?",
    mediaUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014828/ecommerce/pineapplemuffin1.webp",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rohit",
          lastName: "Mane",
          username: "rohitmane9022",
          avatarURL:
            "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        text: "Yes! I am also learning from there!.",
        votes: {
          upvotedBy: [
           
          ],
          downvotedBy: [],
        },
        createdAt: new Date("April 02 2022 09:09:09"),
      },
    ],
    username: "wesbos",
    firstName: "Wes",
    lastName: "Bos",
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079623/7G9vGTca_400x400_stnhcl.jpg",
    createdAt: new Date("March 30 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    mediaUrl:
      "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rohit",
          lastName: "Mane",
          username: "rohitmane9022",
          avatarURL:
            "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        },
       
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "Mane",
        username: "rohitmane9022",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        text: "This cat is a walking bundle of cuteness! I'm instantly smitten by its charm.",
        votes: {
          upvotedBy: [
           
          ],
          downvotedBy: [],
        },
        createdAt: new Date("February 05 2023 09:09:09"),
      },
    ],
    username: "wesbos",
    firstName: "Wes",
    lastName: "Bos",
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079623/7G9vGTca_400x400_stnhcl.jpg",
    createdAt: new Date("February 3 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm. Love this quote by Winston Churchill.",
    mediaUrl:
      "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rohit",
          lastName: "Mane",
          username: "rohitmane9022",
          avatarURL:
            "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        },
        {
          _id: uuid(),
          firstName: "Carl",
          lastName: "Smith",
          username: "carlsmith",
          avatarURL:
            "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
        },
  
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Rohit",
        lastName: "Mane",
        username: "rohitmane9022",
        avatarURL:
          "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
        text: "Wow, your makeup skills are goals! Absolutely stunning transformation.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Carl",
              lastName: "Smith",
              username: "carlsmith",
              avatarURL:
                "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("December 13 2022 09:09:09"),
      },
      {
        _id: uuid(),
        firstName: "Carl",
        lastName: "Smith",
        username: "carlsmith",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
        text: "Flawless face, fierce vibes! Makeup game strong, you look amazing.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Rohit",
              lastName: "Mane",
              username: "rohitmane9022",
              avatarURL:
                "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("December 12 2022 09:09:09"),
      },
    ],
    username: "janedoe",
    firstName: "Jane",
    lastName: "Doe",
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079489/jane-doe_il3cvx_bkjgx8.webp",
    createdAt: new Date("December 11 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel",
    mediaUrl:
      "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sophia",
          lastName: "Jones",
          username: "sophiajones",
          avatarURL:
            "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Jones",
        username: "sophiajones",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
        text: "Swish! Your basketball skills are pure fire, amazing shot!",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Carl",
              lastName: "Smith",
              username: "carlsmith",
              avatarURL:
                "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("August 18 2023 09:09:09"),
      },
      
    ],
    username: "carlsmith",
    firstName: "Carl",
    lastName: "Smith",
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
    createdAt: new Date("August 16 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Started my Baking journey! Look what I made.",
    mediaUrl:
      "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "carlsmith",
    firstName: "Carl",
    lastName: "Smith",
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079530/carl-smith_mehw0u_bz1tmg.webp",
    createdAt: new Date("September 16 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "You are never too old to set another goal or to dream a new dream.",
    mediaUrl:
      "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "rohitmane9022",
    firstName: "Rohit",
    lastName: "Mane",
    avatarURL:
      "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
    createdAt: new Date("March 16 2023 09:09:09"),
    updatedAt: formatDate(),
  },
  {
    _id: "GeMUAdi9mh",
    content:
      "No matter what people tell you, words and ideas can change the world.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    firstName: "Rohit",
    lastName: "Mane",
    username: "rohitmane9022",
    createdAt: "2022-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Yayy! Its my Birthday Today. Made this cake for myself!",
    mediaUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1647014336/ecommerce/chocolatecake4.webp",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sophia",
          lastName: "Jones",
          username: "sophiajones",
          avatarURL:
            "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
        },
      ],
      dislikedBy: [],
    },
    comments: [
    ],
    username: "rohitmane9022",
    firstName: "Rohit",
    lastName: "Mane",
    avatarURL:
      "https://res.cloudinary.com/dj1awovlx/image/upload/v1688111476/all%20photos/IMG_20221231_225356_eqzvcy.jpg",
    createdAt: new Date("September 02 2022 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    mediaUrl:
      "",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarURL:
            "https://res.cloudinary.com/avinashprj/image/upload/v1670079489/jane-doe_il3cvx_bkjgx8.webp",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079489/jane-doe_il3cvx_bkjgx8.webp",
        text: "Your yoga practice is inspiring and radiates inner tranquility. Namaste.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Alex",
              lastName: "Maxwell",
              username: "alexmaxwell",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("May 11 2023 09:09:09"),
      },
    ],
    username: "alexmaxwell",
    firstName: "Alex",
    lastName: "Maxwell",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
    createdAt: new Date("May 10 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Check out this amazing video from wesbos.",
    mediaUrl:
      "",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Jane",
          lastName: "Doe",
          username: "janedoe",
          avatarURL:
            "https://res.cloudinary.com/avinashprj/image/upload/v1670079489/jane-doe_il3cvx_bkjgx8.webp",
        },
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079489/jane-doe_il3cvx_bkjgx8.webp",
        text: "Your yoga practice is inspiring and radiates inner tranquility. Namaste.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Alex",
              lastName: "Maxwell",
              username: "alexmaxwell",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("June 11 2023 09:09:09"),
      },

      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Jones",
        username: "sophiajones",
        avatarURL:
          "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
        text: "Yoga vibes on point! Keep rocking those poses.",
        votes: {
          upvotedBy: [
            {
              _id: uuid(),
              firstName: "Alex",
              lastName: "Maxwell",
              username: "alexmaxwell",
              avatarURL:
                "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
            },
          ],
          downvotedBy: [],
        },
        createdAt: new Date("June 11 2023 09:09:09"),
      },
    ],
    username: "alexmaxwell",
    firstName: "Alex",
    lastName: "Maxwell",
    avatarURL:
      "https://res.cloudinary.com/darwtgzlk/image/upload/w_400,f_auto,q_auto/v1686251367/socialMedia/profilePictures/user5_jxwms5.jpg",
    createdAt: new Date("June 10 2023 09:09:09"),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "Believe in yourself! Rest all will fall in place.",
    mediaUrl:
      "",
    likes: {
      likeCount: 2,
      likedBy: [
       
        {
          _id: uuid(),
          firstName: "Wes",
          lastName: "Bos",
          username: "wesbos",
          avatarURL:
            "https://res.cloudinary.com/avinashprj/image/upload/v1670079623/7G9vGTca_400x400_stnhcl.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [
    ],
    username: "sophiajones",
    firstName: "Sophia",
    lastName: "Jones",
    avatarURL:
      "https://res.cloudinary.com/avinashprj/image/upload/v1670079716/sophia-jones_cf9dw0.webp",
    createdAt: new Date("July 10 2022 09:09:09"),
    updatedAt: formatDate(),
  },
];
