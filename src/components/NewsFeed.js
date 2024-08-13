import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "./navbar/Navbar";
import { Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";

const NewsFeed = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [emoji, setEmoji] = useState(false);
  const navigate = useNavigate();
  const emojiPickerRef = useRef(null); 

  const handleEmojiClick = (event) => {
    setInputValue((prev) => prev + event.emoji);
    setIsDialogOpen(true);

  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
        setEmoji(false);
        setIsDialogOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-gray-100 w-full flex justify-center mt-10 h-screen">
      <NavigationBar />
      {isDialogOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsDialogOpen(false)}
        ></div> // Background overlay
      )}
      <div className="container">
        <div
          className={`rounded-2xl bg-white my-5 w-fit mx-auto ${
            isDialogOpen ? "z-50 relative" : ""
          }`}
        >
          <div className="flex items-center px-5 py-4 gap-x-5">
            <Image
              className="size-12"
              src="https://bit.ly/dan-abramov"
              roundedCircle
            />
            <div className="relative w-[37rem]">
              <Form.Control
                className={`p-2 pr-12 ${
                  isDialogOpen ? "h-20" : "h-10"
                } bg-gray-100 border-none`}
                style={{
                  backgroundColor: "#F5F5F5", // Use Tailwind class if you prefer
                }}
                type="text"
                placeholder="What's going on? #Hashtag.. @Mention.."
                size="sm"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onClick={() => setIsDialogOpen(true)}
              />
              {isDialogOpen && (
                <i
                  className="bi bi-emoji-smile absolute right-3 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer text-gray-600"
                  onClick={() => setEmoji(true)}
                ></i>
              )}
              
                {emoji && (<div  ref={emojiPickerRef}  className="absolute right-0 top-full mt-2 z-10">
                  <EmojiPicker
                    skinTonesDisabled
                    searchDisabled
                    onEmojiClick={handleEmojiClick}
                  />
                </div>)}

            </div>
          </div>
          <div
            className={`flex pt-2  ${
              isDialogOpen ? "gap-x-7 pb-4" : "gap-x-12 pb-5"
            } items-center justify-center px-4`}
          >
            <button
              className={`flex items-center ${
                isDialogOpen ? "flex-initial" : "flex-auto"
              } leading-10 px-2 w-fit gap-x-2 text-base font-["Poppins"] text-center`}
            >
              <i className="bi bi-image"></i>

              <span>upload image</span>
            </button>
            <button
              className={`flex items-center ${
                isDialogOpen ? "flex-initial" : "flex-auto"
              } leading-10 px-2 w-fit gap-x-2 text-base font-["Poppins"] text-center`}
            >
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 462.54"
              >
                <path
                  fillRule="nonzero"
                  d="M49.68 0h337.29c13.65 0 26.06 5.64 35.03 14.61l.83.91c8.53 8.94 13.81 21.05 13.81 34.17V192.3c-13.83-3.96-28.43-6.1-43.53-6.1-7.25 0-14.38.5-21.37 1.45l38.17-35.52V49.69c0-5.95-2.36-11.49-6.2-15.62l-.6-.56c-4.16-4.16-9.89-6.79-16.14-6.79H49.68c-6.05 0-11.55 2.35-15.62 6.14l-.58.62c-4.16 4.16-6.76 9.91-6.76 16.21v177.93c29.58-26.67 76.93-63.95 106.82-89.08 4.88-4.22 12.14-4.13 16.93-.04.97.81 1.69 1.79 2.5 2.75l69.64 105.62 24.89-75.76c1.99-10.58 14.49-14.09 22.06-7.06l45.01 43.1c-7.78 4.48-15.12 9.62-21.99 15.32l-23.17-22.24-25.4 78.78c-1.6 11.15-15.44 15.38-22.92 6.78l-80.27-118.34-114.1 95.68v79.68c0 6.26 2.63 11.99 6.79 16.15 4.19 4.2 9.96 6.82 16.17 6.82h187.54c1.29 9.18 3.37 18.11 6.18 26.72H49.68c-13.58 0-26.04-5.62-35.07-14.64C5.64 368.88 0 356.46 0 342.81V49.69c0-13.67 5.59-26.11 14.58-35.11l.92-.83C24.45 5.25 36.49 0 49.68 0zm343.43 224.75c32.83 0 62.56 13.31 84.06 34.82 21.52 21.52 34.83 51.24 34.83 84.07 0 32.83-13.31 62.57-34.82 84.07-21.51 21.52-51.24 34.83-84.07 34.83-32.82 0-62.55-13.31-84.07-34.83-21.51-21.5-34.82-51.24-34.82-84.07 0-32.8 13.31-62.5 34.82-84.02 21.57-21.56 51.27-34.87 84.07-34.87zm-8.57 66.1h17.16c4.06 0 7.39 3.37 7.39 7.38v29.46h29.44c4.06 0 7.39 3.4 7.39 7.39v17.15c0 4.02-3.37 7.4-7.39 7.4h-29.44v29.44c0 4.02-3.37 7.39-7.39 7.39h-17.16c-4.02 0-7.39-3.32-7.39-7.39v-29.44h-29.47c-4.02 0-7.39-3.33-7.39-7.4v-17.15c0-4.07 3.32-7.39 7.39-7.39h29.47v-29.46c0-4.06 3.32-7.38 7.39-7.38zm76.4-15.05c-17.34-17.34-41.34-28.09-67.83-28.09-26.5 0-50.5 10.73-67.86 28.07-17.34 17.35-28.07 41.36-28.07 67.86 0 26.49 10.75 50.5 28.09 67.84 17.36 17.36 41.36 28.1 67.84 28.1 26.49 0 50.49-10.74 67.84-28.1 17.35-17.34 28.09-41.35 28.09-67.84 0-26.48-10.74-50.48-28.1-67.84zM267.9 61.14c11.04 0 21.06 4.48 28.31 11.73s11.73 17.26 11.73 28.31c0 11.03-4.48 21.06-11.73 28.31s-17.27 11.73-28.31 11.73c-11.05 0-21.06-4.48-28.31-11.73s-11.73-17.28-11.73-28.31c0-11.05 4.48-21.06 11.73-28.31s17.26-11.73 28.31-11.73zm12.22 27.82a17.281 17.281 0 0 0-12.22-5.05c-4.77 0-9.1 1.94-12.22 5.05a17.272 17.272 0 0 0-5.04 12.22c0 4.77 1.93 9.1 5.04 12.22 3.12 3.11 7.45 5.05 12.22 5.05 4.77 0 9.1-1.94 12.22-5.05 3.11-3.12 5.05-7.45 5.05-12.22 0-4.77-1.94-9.1-5.05-12.22z"
                />
              </svg>

              <span>generate image</span>
            </button>
            <button
              className={`flex items-center ${
                isDialogOpen ? "flex-initial" : "flex-auto"
              } leading-10 px-2 w-fit gap-x-2 text-base font-["Poppins"] text-center`}
            >
              <i className="bi bi-calendar-plus"></i>

              <span>generate post</span>
            </button>
            {!isDialogOpen && (
              <button
                className='flex items-center flex-auto leading-10 px-2 w-fit gap-x-2 text-base font-["Poppins"] text-center'
                onClick={() => {
                  setIsDialogOpen(true);
                }}
              >
                <i className="bi bi-plus-circle"></i>
                <span>more</span>
              </button>
            )}
          </div>
          {isDialogOpen && (
            <>
              <div className="flex pb-4 gap-x-10 items-center justify-center px-4">
                {/* <button className='flex items-center gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-instagram"></i>
                  <span>gif</span>
                </button> */}
                <button className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-mic"></i>
                  <span>record voice</span>
                </button>
                <button className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-heart"></i>
                  <span>feelings</span>
                </button>
                <button className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-cloud-arrow-up"></i>
                  <span>upload files</span>
                </button>
                <button
                  className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'
                  onClick={() => navigate("/home")}
                >
                  <i class="bi bi-book"></i>
                  <span>Create Curriculum</span>
                </button>
              </div>
              <div className="flex pb-4 gap-x-10 items-center justify-center px-4">
                <button className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-music-note-beamed"></i>
                  <span>audio upload</span>
                </button>
                <button className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-card-checklist"></i>
                  <span>create poll</span>
                </button>
                <button className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-file-play"></i>
                  <span>upload reels</span>
                </button>
                <button className='flex items-center leading-10 gap-x-2 text-base font-["Poppins"] text-center'>
                  <i className="bi bi-play"></i>
                  <span>upload video</span>
                </button>
              </div>
              <footer>
                <div className="flex justify-end">
                  <button className="bg-[#DD6A70] rounded-md  mb-4 mr-6 text-white font-bold w-[100px] h-[40px]">
                    Share
                  </button>
                </div>
              </footer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
