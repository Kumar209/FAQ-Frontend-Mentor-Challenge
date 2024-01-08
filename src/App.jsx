/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ChangeUp1 from "./changeUp.jsx";

function App() {
  const [openAns1, setOpenAns1] = useState(false);
  const [openAns2, setOpenAns2] = useState(false);
  const [openAns3, setOpenAns3] = useState(false);
  const [openAns4, setOpenAns4] = useState(false);

  useEffect(() => {
    setOpenAns2(false);
    setOpenAns3(false);
    setOpenAns4(false);
  }, [openAns1]);

  useEffect(() => {
    setOpenAns1(false);
    setOpenAns3(false);
    setOpenAns4(false);
  }, [openAns2]);

  useEffect(() => {
    setOpenAns2(false);
    setOpenAns1(false);
    setOpenAns4(false);
  }, [openAns3]);

  useEffect(() => {
    setOpenAns2(false);
    setOpenAns3(false);
    setOpenAns1(false);
  }, [openAns4]);

  return (
    <>
      <div className="w-full h-screen text-center bg-Lightpink relative">
        <div className="w-full h-[30%] bg-backgroundMobile md:bg-backgroundDesktop z-0"></div>
        <div className="bg-White rounded-md z-90 w-[90%] md:w-[500px] h-auto absolute top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex gap-2 pt-5 pl-4">
            <svg
              className="mt-4"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
              viewBox="0 0 40 41"
            >
              <path
                fill="#AD28EB"
                d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
              />
            </svg>

            <p className="font-bold text-[43px]">FAQs</p>
          </div>

          <div className="flex flex-col">
            <div className="mt-4 text-left pl-8">
              <div className="flex mb-3">
                <h2 className="font-semibold w-[90%] hover:text-[#B20AAA] cursor-pointer">
                  What is Frontend Mentor, and how will it help me?
                </h2>

                <ChangeUp1 mode={openAns1} modefunc={setOpenAns1} />
              </div>

              <p
                className={`text-Grayishpurple text-sm pr-10 ${
                  openAns1 ? "block" : "hidden"
                }`}
              >
                Frontend Mentor offers realistic coding challenges to help
                developers improve their frontend coding skills with projects in
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for portfolio building.
              </p>
            </div>

            <div className="mt-4 text-left pl-8">
              <div className="flex mb-3">
                <h2 className="font-semibold w-[90%] hover:text-[#B20AAA] cursor-pointer">
                  Is Frontend Mentor free?
                </h2>

                <ChangeUp1 mode={openAns2} modefunc={setOpenAns2} />
              </div>

              <p
                className={`text-Grayishpurple text-sm pr-10 ${
                  openAns2 ? "block" : "hidden"
                }`}
              >
                Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range of
                projects suitable for all skill levels.
              </p>
            </div>

            <div className="mt-4 text-left pl-8">
              <div className="flex mb-3">
                <h2 className="font-semibold w-[90%] hover:text-[#B20AAA] cursor-pointer">
                  Can I use Frontend Mentor projects in my portfolio?
                </h2>

                <ChangeUp1 mode={openAns3} modefunc={setOpenAns3} />
              </div>

              <p
                className={`text-Grayishpurple text-sm pr-10 ${
                  openAns3 ? "block" : "hidden"
                }`}
              >
                Yes, you can use projects completed on Frontend Mentor in your
                portfolio. It's an excellent way to showcase your skills to
                potential employers!
              </p>
            </div>

            <div className="mt-4 text-left pl-8 mb-5">
              <div className="flex mb-3">
                <h2 className="font-semibold w-[90%] hover:text-[#B20AAA] cursor-pointer">
                  How can I get help if I'm stuck on a Frontend Mentor
                  challenge?
                </h2>

                <ChangeUp1 mode={openAns4} modefunc={setOpenAns4} />
              </div>

              <p
                className={`text-Grayishpurple text-sm pr-10 ${
                  openAns4 ? "block" : "hidden"
                }`}
              >
                The best place to get help is inside Frontend Mentor's Discord
                community. There's a help channel where you can ask questions
                and seek support from other community members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
