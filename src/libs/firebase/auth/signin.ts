import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseApp from "..";

const auth = getAuth(firebaseApp);

export const signInEmail = async (email, password) => {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};
