import React from "react";

function App() {
  // state ---------------------------------------
  const [city, setCity] = useState("");

  return (
    <div>
      <main>
        <section>
          <input
            type="text"
            placeholder="EnterCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </section>
        <section>Weather detailes</section>
      </main>
    </div>
  );
}

export default App;
