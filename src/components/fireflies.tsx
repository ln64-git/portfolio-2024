"use client";
import "../utils/background.scss";
export default function Fireflies() {
  const fireflies = Array.from({ length: 25 }, (_, index) => (
    <div key={index} className="firefly"></div>
  ));
  return <>{fireflies}</>; // Return JSX directly
}
