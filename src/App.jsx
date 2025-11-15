import { Suspense } from "react";
import Plants from "./components/Plants";
import Loader from "./components/Loader";

const plantsPromise = fetch(
  "https://openapi.programming-hero.com/api/plants"
).then((res) => res.json());

const App = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Suspense fallback={<Loader />}>
        <Plants plantsPromise={plantsPromise} />
      </Suspense>
    </div>
  );
};

export default App;
