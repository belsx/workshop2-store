import CardsView from "./CardsView";
import { products } from "../data/products";
import ListView from "./ListView";
import IconSwitch from "./IconSwitch";
import { useState } from "react";

export default function Store() {
  const [view, setView] = useState("view_list");
  return (
    <>
      <div className="toolbar">
        <IconSwitch icon={view} onSwitch={setView} />
      </div>
      {view === "view_list" ? (
        <div>
          <ListView cards={products} />
        </div>
      ) : (
        <div>
          <CardsView cards={products} />
        </div>
      )}
    </>
  );
}
