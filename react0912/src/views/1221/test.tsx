import React from "react";
import { FaStar } from "react-icons/fa";

export default function Rendering012() {
  const score = 1;

  return <>{score > 0 && <FaStar />}</>;
}
