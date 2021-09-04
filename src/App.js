import { Details } from "./components/details.component";
import { Couples } from "./components/bride&groom";
import { Quote } from "./components/quote.component";
import { Venue } from "./components/venue.component";
import { Forms } from "./components/forms.component";

function App() {
  return (
    <div className="App">
      <Details />
      <Couples />
      <Quote />
      <Venue />
      <Forms />
    </div>
  );
}

export default App;
