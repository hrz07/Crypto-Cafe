import React from 'react';

const Coin = ({coin}) => {
    return (
        <div className='gap-4 bg-white p-4 w-[250px] rounded-xl drop-shadow-md flex justify-between items-center'>
            <img src={coin.image} className='w-[60px] rounded-full' alt="" />
            <div className='flex flex-col text-right'>
                <h1 className='text-xl'>{coin.name}</h1>
                <h1 className='text-gray-500'>{ coin.symbol }</h1>
            </div>
        </div>
    );
}

export default Coin;
