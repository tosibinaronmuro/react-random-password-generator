import React, { useState } from "react";
import RandomFunction from "./pages/RandomFunction";

function Random() {
  const [randomm, setRandom] = useState([1234]);
  const [copied, setopied] = useState(true);
  const [number, setnumber] = useState(4);

  // copy to clip board
  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomm.join(""));

    setopied(false);
  };


  // generating the random password
  let hello = [];
  const gene = (num) => {
    for (var i = 0; i < num; i++) {
      hello.push(Math.floor(Math.random() * 10));
       
    }
  };

  // getting number from select input
  const setNumber = (e) => {
    const numberr = e.target.value;
    setnumber(numberr);
  };

  // password generating onclick event
  const displayRandom = (e) => {
    const gene = (num) => {
      for (var i = 0; i < num; i++) {
        hello.push(Math.floor(Math.random() * 10));
        
      }
    };
    gene(number);
    setRandom(hello);
    setopied(true);
  };

  return (
    <div>
      {/* select input */}
      <div>
        <fieldset onChange={setNumber}>
          <label
            htmlFor="number"
            className="block mb-2   text-gray-900 dark:text-gray-400 text-mono font-extralight text-lg"
          >
            Select password length
          </label>
          <select
            id="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultChecked>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
        </fieldset>
      </div>
      {/* end of select input */}


      <h1 className="my-5">
        <p>your password is</p>
      </h1>

{/* password display */}
      <div className="px-4 flex relative  py-2 m-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300">
        {randomm}

        <svg
          onClick={copyToClipboard}
          className="w-5 h-5 absolute right-0 ml-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM272 224h-160C103.2 224 96 216.8 96 208C96 199.2 103.2 192 112 192h160C280.8 192 288 199.2 288 208S280.8 224 272 224z" />
        </svg>
      </div>

      {/* clipboard div */}
      {!copied && (
        <div className="flex justify-center items-center m-2 bg-gray-200 rounded text-sm font-extralight p-2 ">
          <p>password copied to clip board</p>
        </div>
      )}

{/* button */}
      <button
        onClick={displayRandom}
        type="button"
        className="text-white flex justify-center items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        click to generate password
      </button>
    </div>
  );
}

export default Random;
