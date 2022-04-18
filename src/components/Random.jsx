import React, { useState } from "react";
 
// import useLocalStorage from 'react-localstorage-hook'

function Random() {
  var newChar = "0123456789";
  let hello = [];
  // const [values, setValue] = useLocalStorage(key, initialValue)
  const [randomm, setRandom] = useState([1234]);
  const [copied, setopied] = useState(true);
  const [number, setnumber] = useState(4);
  const [characters, setcharacters] = useState(newChar);

  // copy to clip board
  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomm.join(""));

    setopied(false);
  };

  // getting selected characters

  const setCharacters = (e) => {
    newChar = e.target.value;
    setcharacters(newChar);
  };

  // getting number from select input
  const setNumber = (e) => {
    const numberr = e.target.value;
    setnumber(numberr);
  };

  // password generating onclick event
  const displayRandom = (e) => {
 

    setopied(true);

    if (characters === "0-9") {
      const gene = (num) => {
        for (var i = 0; i < num; i++) {
          hello.push(Math.floor(Math.random() * 10));
        }
      };
      gene(number);
    } 
    
    else if (characters === "a-z") {
      hello.push(randd(number, "abcdefghijklmnopqrstuvwxyz"));
    }
    
    else if (characters === "a-z and 0-9") {
      hello.push(randd(number, "abcdefghijklmnopqrstuvwxyz0123456789"));
    }
    else if (characters === "include special characters") {
      hello.push(randd(number, "abcdefghijklmnopqrstuvwxyz0123456789,./';<>?!@#$%^&*()_+-="));
       
    }

    setRandom(hello);
  };

  function randd(len, arr) {
    var ans = "";
    for (var i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  }
  

  return (
    <div>
      
      <div>
        {characters === "0123456789" && (
          <div className="flex justify-center items-center m-2 bg-red-200 rounded text-sm font-extralight p-2 ">
            <p>select a password range of characters</p>
          </div>
        )}
        <fieldset onChange={setCharacters}>
          <div>
            <div className="flex items-center mb-4">
              <input
                id="option-1"
                type="radio"
                name="countries"
                value="0-9"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                aria-labelledby="option-1"
                aria-describedby="option-1"
              ></input>
              <label
                htmlFor="option-1"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                0-9
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="option-2"
                type="radio"
                name="countries"
                value="a-z"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                aria-labelledby="option-2"
                aria-describedby="option-2"
              ></input>
              <label
                htmlFor="option-2"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                a-z
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="option-3"
                type="radio"
                name="countries"
                value="a-z and 0-9"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                aria-labelledby="option-3"
                aria-describedby="option-3"
              ></input>
              <label
                htmlFor="option-3"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                a-z and 0-9
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="option-4"
                type="radio"
                name="countries"
                value="include special characters"
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                aria-labelledby="option-4"
                aria-describedby="option-4"
              ></input>
              <label
                htmlFor="option-4"
                className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >include special characters
              </label>
            </div>
          </div>
        </fieldset>
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
        className="text-white flex justify-center m-auto items-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center   mb-2"
      >
        click to generate password
      </button>
    </div>
  );
}

export default Random;
