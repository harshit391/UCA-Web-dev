import {header as Header} from './header';
import ProductList from './productList';

export function app()
{
    return (<>
        <Header />
        <header></header>
        <main>
            <ProductList />
        </main>
        <footer></footer>
    </>);
}

// export default App;