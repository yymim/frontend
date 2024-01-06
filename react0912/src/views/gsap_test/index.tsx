import React from 'react'
import { gsap } from "gsap";
import "./style.css";

const tl = gsap.timeline({repeat: 5, repeatDelay: 1});

tl.to(".box", {duration: 1, x: 150})
tl.to(".box", {duration: 1, scale: 0.5})
tl.to(".box", {duration: 1, y: 150, background: "orange"})
tl.to(".box", {duration: 1, scale: 2});

export default function index() {
  return (
    <div>
      <div className="box pink">to</div>
    </div>
  )
}