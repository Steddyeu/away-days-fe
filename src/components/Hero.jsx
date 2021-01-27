import { React } from "react";
import Flags from "./Flags";
import SearchBar from './SearchBar'
export default function Hero() {
  return (
    <div className="hero">
      <h1 className='hero-title'>Away Days</h1>
      <Flags />
      <SearchBar />
      </div>
  );
}
