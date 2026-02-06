import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Listing = () => {
    return (
        <section>
            <div className='container mx-auto '>
                <div className='px-4 py-10 grid grid-cols-4'>
                    <div className='col-span-1'><Sidebar></Sidebar></div>
                    <div className='col-span-3'>rigth main section</div>
                </div>
            </div>
        </section>
    );
};

export default Listing;