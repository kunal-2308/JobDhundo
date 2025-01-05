import React from 'react'

function EsteemedPartners() {
    return (
        <>
            <div className="div-main-container flex flex-col gap-y-10 mt-14 mb-14">
                <div className="div-title flex justify-center items-center">
                    <span className='text-4xl font-semibold text-slate-700'>Our Esteemed Partner's</span>
                </div>
                <div className='partner-div-main-flex flex justify-evenly items-center '>
                    <div className='flex justify-center items-center text-3xl font-semibold text-gray-500'>
                        <img src="../../brands/Google-company-official-logo-partners.png" alt="Google logo" className='bg-white h-16' />
                        <span>Google</span>
                    </div>
                    <div className='flex justify-center items-center text-3xl font-semibold text-gray-500'>
                        <img src="../../brands/Adobe-company-official-logo-partners.png" alt="Google logo" className='bg-white h-20' />
                        <span>Adobe</span>
                    </div>
                    <div className='flex justify-center items-center text-3xl font-semibold text-gray-500'>
                        <img src="../../brands/Meta-company-official-logo-partners.png" alt="Google logo" className='bg-white h-12' />
                        <span>Meta</span>
                    </div>
                    <div className='flex justify-center items-center text-3xl font-semibold text-gray-500 gap-x-2'>
                        <img src="../../brands/mircosoft-company-official-logo-partners.png" alt="Google logo" className='bg-white h-12' />
                        <span>Microsoft</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EsteemedPartners
