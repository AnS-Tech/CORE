import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseApp from "..";

const auth = getAuth(firebaseApp);

export const signUpEmail = async (email: string, password: string) => {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};
