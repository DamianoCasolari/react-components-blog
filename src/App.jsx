import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/index.css";

// Import components
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";

function App() {
  return (
    <>
      <div className="WebPage">
        <AppHeader />
        <main className="vh100-header-footer flex items-center justify-center p-40">
          <div className="card py-10 px-10 w-6/12 min-h-[300] h-full bg-black rounded-2xl text-slate-50">
            <div>
              <img src="img1.jpg" className="h-full" alt="" />
            </div>
            <h3 className="text-[30px] font-bold text-center mt-4">
              Ciao Mamma
            </h3>
            <div>
              <p className="overflow-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo ipsum at, optio ex ullam, alias id, aperiam nihil
                fugit esse tenetur natus! Optio impedit accusamus saepe aliquid
                nulla veniam voluptatum. Autem nisi optio nemo corporis? Rem
                temporibus quae quisquam amet assumenda perferendis nesciunt
                magnam reprehenderit atque praesentium sint maiores earum
                veritatis explicabo doloremque, mollitia similique culpa? Dolor
                cumque harum tempore.
              </p>
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    </>
  );
}

export default App;
