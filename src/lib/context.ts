import { User } from "firebase/auth";
import { createContext } from "react";

export type firebaseUser = User | null;

export const userContext = createContext<firebaseUser>(null);
