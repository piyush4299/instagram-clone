import { comments } from "../data-source/comments";
import { users } from "../data-source/users";
import { posts } from "../data-source/posts";
import { getValueByKey, setItemByKeyValue } from "./localStorageOperations";

function populateDataToStorage() {
  const STORE_KEY = process.env.REACT_APP_STORE_KEY;
  const appData = {
    comments,
    users,
    posts,
  };
  if (!getValueByKey(STORE_KEY)) setItemByKeyValue(STORE_KEY, appData);
}

export default populateDataToStorage;
