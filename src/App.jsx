
import React from "react";
import "./App.css";
import "./App.css";
import pink from './assets/strawberry.png';
import blue from './assets/blueberry.png';
import brown from './assets/chocolate.jfif';
import bgpink from './assets/bgpink.png';
import bgblue from './assets/bgblue.png';
import bgchoco from './assets/bgchoco.png';


function App() {
  return (
    <>
      
   
    <main className="bg-black min-h-screen">

      <section id="strawberry" className="donut-page bg-[#ffdce8]">

        <nav className="max-w-6xl mx-auto flex items-center justify-between py-8 px-5">
          <h2 className="text-xl font-medium logo">Delightful Donuts</h2>
          <a
            href="#contact"
            className="bg-pink-500 text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Contact
          </a>
        </nav>

        <div className="max-w-6xl mx-auto min-h-[calc(100vh-100px)] grid md:grid-cols-2 items-center px-5">

          <div className="content">
            <p className="text-pink-500 text-sm font-semibold">
              FRESH • SWEET • DELICIOUS
            </p>
            <h1 className="text-5xl md:text-7xl leading-none mt-4 head">
              Strawberry
              <br />
              Donut
            </h1>

            <p className="max-w-md text-lg mt-6">
              Raised ring donut with strawberry frosting and colorful round
              sprinkles
            </p>

            <div className="flex gap-5 mt-10">
              <a
                href="#order"
                className="bg-pink-500 text-white px-9 py-4 rounded-full font-bold hover:-translate-y-1 transition shadow-lg"
              >
                Order Now
              </a>

              <a
                href="#menu"
                className="bg-white border border-black px-9 py-4 rounded-full font-bold hover:-translate-y-1 transition"
              >
                View Menu
              </a>
            </div>

            <div className="flex gap-7 mt-10">
              <a href="#strawberry" className="donut-thumb">
                <img src={pink} alt="Strawberry Donut" />
              </a>

              <a href="#chocolate" className="donut-thumb">
                <img src={brown} alt="Chocolate Donut" />
              </a>

              <a href="#blueberry" className=" w-{-700} donut-thumb">
                <img src={blue} alt="Blueberry Donut" />
              </a>
            </div>
          </div>

          <div className="donut-image-area">
            <div className="pink-glow"></div>

            <img
              src={bgpink}
              alt="Strawberry Donut"
              className="main-donut"
            />
          </div>

        </div>
      </section>


      <section id="chocolate" className="donut-page bg-[#e5c2b3]">

        <nav className="max-w-6xl mx-auto flex items-center justify-between py-8 px-5">
          <h2 className="text-xl font-medium logo">Delightful Donuts</h2>
          <a
            href="#contact"
            className="bg-[#9b6244] text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Contact
          </a>
        </nav>

        <div className="max-w-6xl mx-auto min-h-[calc(100vh-100px)] grid md:grid-cols-2 items-center px-5">

          <div className="content">
            <p className="text-[#9b6244] text-sm font-semibold">
              FRESH • SWEET • DELICIOUS
            </p>

            <h1 className="text-5xl md:text-7xl leading-none mt-4 head">
              Chocolate
              <br />
              Donut
            </h1>

            <p className="max-w-md text-lg mt-6">
              Raised ring donut with chocolate frosting and colorful round
              sprinkles
            </p>

            <div className="flex gap-5 mt-10">
              <a
                href="#order"
                className="bg-[#9b6244] text-white px-9 py-4 rounded-full font-bold hover:-translate-y-1 transition shadow-lg"
              >
                Order Now
              </a>

              <a
                href="#menu"
                className="bg-white border border-black px-9 py-4 rounded-full font-bold hover:-translate-y-1 transition"
              >
                View Menu
              </a>
            </div>

            <div className="flex gap-7 mt-10">
              <a href="#strawberry" className="donut-thumb">
                <img src={pink} alt="Strawberry Donut" />
              </a>

              <a href="#chocolate" className="donut-thumb">
                <img src={brown} alt="Chocolate Donut" />
              </a>

              <a href="#blueberry" className=" w-{-700} donut-thumb">
                <img src={blue} alt="Blueberry Donut" />
              </a>
            </div>
          </div>

          <div className="donut-image-area">
            <div className="chocolate-glow"></div>

            <img
  src={bgchoco}
                alt="Chocolate Donut"
              className="main-donut"
            />
          </div>

        </div>
      </section>


      <section id="blueberry" className="donut-page bg-[#a9e5f8]">

        <nav className="max-w-6xl mx-auto flex items-center justify-between py-8 px-5">
          <h2 className="text-xl font-medium logo">Delightful Donuts</h2>

          <a
            href="#contact"
            className="bg-sky-500 text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            Contact
          </a>
        </nav>

        <div className="max-w-6xl mx-auto min-h-[calc(100vh-100px)] grid md:grid-cols-2 items-center px-5">

          <div className="content">
            <p className="text-sky-500 text-sm font-semibold">
              FRESH • SWEET • DELICIOUS
            </p>

            <h1 className="text-5xl md:text-7xl leading-none mt-4 head">
              Blueberry
              <br />
              Donut
            </h1>

            <p className="max-w-md text-lg mt-6">
              Raised ring donut with blueberry frosting and colorful round
              sprinkles
            </p>

            <div className="flex gap-5 mt-10">
              <a
                href="#order"
                className="bg-sky-500 text-white px-9 py-4 rounded-full font-bold hover:-translate-y-1 transition shadow-lg"
              >
                Order Now
              </a>

              <a
                href="#menu"
                className="bg-white border border-black px-9 py-4 rounded-full font-bold hover:-translate-y-1 transition"
              >
                View Menu
              </a>
            </div>

           <div className="flex gap-7 mt-10">
              <a href="#strawberry" className="donut-thumb">
                <img src={pink} alt="Strawberry Donut" />
              </a>

              <a href="#chocolate" className="donut-thumb">
                <img src={brown} alt="Chocolate Donut" />
              </a>

              <a href="#blueberry" className=" w-{-700} donut-thumb">
                <img src={blue} alt="Blueberry Donut" />
              </a>
            </div>
          </div>

          <div className="donut-image-area">
            <div className="blue-glow"></div>

            <img
              src={bgblue}
              alt="Blueberry Donut"
              className="main-donut"
            />
          </div>

        </div>
      </section>

    </main>
    </>
  );
}

export default App;