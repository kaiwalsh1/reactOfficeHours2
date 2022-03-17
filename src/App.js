import Counter, { number } from './Counter';
import List from './List';
// Functional component
// functions that return HTML
// Can think of components as partials
const App = () => {
    const myFaveFoods = [ 'Oatmeal', 'Chicken', 'Steak' ];
    const myFaveCryptos = [ 'XRP', 'XLM', 'XDC' ];
    const msg1 = 'My fave foods are';
    const msg2 = 'My fave cryptos are';
    return (
        // JSX fragment
        <>
            <Counter/>
            <List
                message={msg1}
                items={myFaveFoods}
            />
            <List
                message={msg2}
                items={myFaveCryptos}
            />
        </>
    );
};


export default App;
