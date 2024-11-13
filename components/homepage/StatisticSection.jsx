
import React from 'react'
import { FaMoneyBill,FaTruck, FaPersonBooth, FaBuilding, FaCity} from 'react-icons/fa'
import MovingCompanyState from './CompanyStat'

const StatisticSection = () => {
  
    return (
        <div className='bg-bejj'>
        <div className=' container mx-auto px-4 py-32 flex flex-col '>
        <div className='mb-8 text-xl text-white font-semibold '>Statics</div>
        <div className='mb-20 text-6xl text-white '>Experience You Can Trust</div>
            <div className='flex flex-col w-3/4 mx-auto'>
            <div className='grid  mb-12 grid-cols-3  items-center justify-items-center'>
            <MovingCompanyState state="Point of Sales" icon={<FaMoneyBill/>}
        companyCount={500} />
   <MovingCompanyState state="Vehicles" icon={<FaTruck/>}
        companyCount={50} />
   <MovingCompanyState state="Employee" icon={<FaPersonBooth/>}
        companyCount={300} />

            </div>

            <div className='grid   items-center justify-items-center align-middle  grid-cols-2'>
            <MovingCompanyState state="Local Brands" icon={<FaCity/>}
        companyCount={7} />
   <MovingCompanyState state="Project" icon={<FaTruck/>}
        companyCount={8} />
  
            </div>


            </div>
  
    
        </div>
        </div>
        )
}

export default StatisticSection