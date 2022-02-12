import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const useDataContext = () => {
  const state = useContext(DataContext);

  return state;
};