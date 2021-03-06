import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';

const Coins = () => {

    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data=> setCoins(data))
    },[])



    return (
        <div className='mt-20'>
            <h1 className='text-3xl font-bold mb-2'>Available Crypto Currencies</h1>
            <p className='text-xl font-semibold text-gray-500 mb-12'>Total Coin : {coins.length}</p>
            
            <div className='mt-12 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
                {
                    coins.map(coin=> <Coin key={coin.id} coin={coin} />)
                }
            </div>
        </div>
    );
}

export default Coins;
