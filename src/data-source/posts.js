import getRandomTimeStamp from "../helpers/getRandomTimeStamp";

export const posts = {
  pid_111: {
    imageUrl: "/images/jungle.jpg",
    caption:
      "Mollit anim in cupidatat culpa irure sit officia aliqua qui elit adipisicing occaecat voluptate.",
    timeStamp: getRandomTimeStamp(new Date(2013, 0, 1), new Date()),
    comments: ["cid_111", "cid_112", "cid_113"],
    likes: 23,
    userWhoPosted: "matrix_victor",
  },
  pid_112: {
    imageUrl: "/images/lakeView.jpg",
    caption:
      "Mollit anim in cupidatat culpa irure sit officia aliqua qui elit adipisicing occaecat voluptate.",
    timeStamp: getRandomTimeStamp(new Date(2013, 0, 1), new Date()),
    comments: ["cid_211", "cid_212", "cid_213"],
    likes: 23,
    userWhoPosted: "matrix_victor",
  },
  pid_211: {
    imageUrl: "/images/Tokyo.jpg",
    caption:
      "Mollit anim in cupidatat culpa irure sit officia aliqua qui elit adipisicing occaecat voluptate.",
    timeStamp: getRandomTimeStamp(new Date(2013, 0, 1), new Date()),
    comments: ["cid_311", "cid_312", "cid_313"],
    likes: 23,
    userWhoPosted: "vk_76",
  },
  pid_212: {
    imageUrl: "/images/lakeView.jpg",
    caption:
      "Mollit anim in cupidatat culpa irure sit officia aliqua qui elit adipisicing occaecat voluptate.",
    timeStamp: getRandomTimeStamp(new Date(2013, 0, 1), new Date()),
    comments: [],
    likes: 23,
    userWhoPosted: "vk_76",
  },
  pid_311: {
    imageUrl: "/images/jungle.jpg",
    caption:
      "Mollit anim in cupidatat culpa irure sit officia aliqua qui elit adipisicing occaecat voluptate.",
    timeStamp: getRandomTimeStamp(new Date(2013, 0, 1), new Date()),
    comments: [],
    likes: 23,
    userWhoPosted: "gojo_kun",
  },
  pid_312: {
    imageUrl: "/images/cat.jpg",
    caption:
      "Mollit anim in cupidatat culpa irure sit officia aliqua qui elit adipisicing occaecat voluptate.",
    timeStamp: getRandomTimeStamp(new Date(2013, 0, 1), new Date()),
    comments: [],
    likes: 23,
    userWhoPosted: "gojo_kun",
  },
};
