import { getValueByKey, setItemByKeyValue } from "./localStorageOperations";

function addCommentObj(commentId, commentObjToAdd) {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  const appData = getValueByKey(storeKey);
  setItemByKeyValue(storeKey, {
    ...appData,
    comments: { ...appData.comments, [commentId]: commentObjToAdd },
  });
}

export default addCommentObj;
