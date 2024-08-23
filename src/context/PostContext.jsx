import { createContext } from "react";
const PostContext = createContext();
export default function PostContextProvider({ children }) {




  
  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
}
