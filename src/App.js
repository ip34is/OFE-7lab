import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import GoodsCard from './components/GoodsCard';

const products = [
    { id: 1, name: 'Ноутбук Lenovo Legion Pro 5 16AFR10 (83F2002RRA) Eclipse Black', price: 87999, image: '/images/Ноутбук.webp' },
    { id: 2, name: 'Apple iPhone 13 128GB (Midnight)', price: 21199, image: '/images/Смартфон.webp' },
    { id: 3, name: 'Навушники RAZER Blackshark V2 X (RZ04-03240700-R3M1) White\n', price: 2999, image: '/images/Навушники.webp' },
    { id: 4, name: 'Монітор 25" Samsung Odyssey G4 S25BG40', price: 9499, image: '/images/Монітор.webp' },
    { id: 5, name: 'HATOR Skyfall TKL PRO Wireless Yellow (HTK-668)', price: 3999, image: '/images/Клавіатура.jpg' },
    { id: 6, name: 'Миша дротова ігрова Razer Basilisk V3 (RZ01-04000100-R3M1)', price: 3499, image: '/images/Миша.jpg' },
];

function App() {
    return (
        <div className="App">
            <Header />
            <Content />

            <hr style={{ margin: '30px 0' }} />

            <section>
                <h2>Галерея товарів</h2>
                <div className="gallery-container">
                    {products.map(product => (
                        <GoodsCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;