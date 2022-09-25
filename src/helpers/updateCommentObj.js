import getAllComments from "./getAllComments";
import { getValueByKey, setItemByKeyValue } from "./localStorageOperations";

function updateCommentObj(commentId, commentObj) {
  const storeKey = process.env.REACT_APP_STORE_KEY;
  let allComments = getAllComments();
  allComments[commentId] = commentObj;
  const appData = getValueByKey(storeKey);
  setItemByKeyValue(storeKey, { ...appData, comments: allComments });
}

export default updateCommentObj;
