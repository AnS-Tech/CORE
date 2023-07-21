import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "..";

const auth = getAuth(firebaseApp);

export const signOutFirebase = async () => {
  let result = null,
    error = null;
  try {
    result = await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { result, error };
};
