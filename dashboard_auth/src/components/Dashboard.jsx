import dashboard2 from '../assets/images/dashboard_img/dashboard_icon2.png'
import dashboardmain from '../assets/images/dashboard_img/dashboardmain_icon.png'
import dashboardProduct from '../assets/images/dashboard_img/product_icon.png'
import dashboardCustomers from '../assets/images/dashboard_img/customer_icon.png'
import dashboardIncome from '../assets/images/dashboard_img/income_icon.png'
import dashboardPromote from '../assets/images/dashboard_img/promote_icon.png'
import dashboardHelp from '../assets/images/dashboard_img/help_icon.png'
import projectManager from '../assets/images/dashboard_img/project_manager.png'
import arrowDown from '../assets/images/dashboard_img/arrow_down.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import totalCustomer from '../assets/images/dashboard_img/totalcustomer_icon.png'
import member from '../assets/images/dashboard_img/members_icon.png'
import activeNow from '../assets/images/dashboard_img/activenow_icon.png'
import dashActiveNow from '../assets/images/dashboard_img/dashboard_activenow.png'







const Dashboard = () => {
  return (
    <div className="container flex min-h-full">

      {/* left Container */}
      <aside className="min-w-64 bg-white shadow-md p-4 flex flex-col">
        <div>
        <div className='flex items-center gap-2 mb-20 mt-5'>
          <img src={dashboardmain} alt="dashboard_icon" />         
          <p className="text-lg font-semibold">Dashboard<span className="text-xs text-gray-500"> v.01</span></p>
        </div>
        <nav className="flex flex-col space-y-4">
          <div className='flex gap-2 items-center'>
            <img src={dashboard2} alt="dashboad_button_icon" className='hover:text-black' />
            <a href="#" className="text-gray-400 hover:text-black text-xs font-bold">Dashboard</a>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={dashboardProduct} alt="dashboad_button_icon" />
            <a href="#" className="text-gray-400 hover:text-black text-xs font-bold">Products</a>
          </div>
          <div className='flex gap-2 items-center bg-[#5932EA] p-2 rounded-xl'>
            <img src={dashboardCustomers} alt="dashboad_button_icon" className='img-icon-customers'/>
            <a href="#" className="text-white hover:text-black text-xs font-bold">Customers</a>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={dashboardIncome} alt="dashboad_button_icon" />
            <a href="#" className="text-gray-400 hover:text-black text-xs font-bold">Income</a>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={dashboardPromote} alt="dashboad_button_icon" />
            <a href="#" className="text-gray-400 hover:text-black text-xs font-bold">Promote</a>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={dashboardHelp} alt="dashboad_button_icon" />
            <a href="#" className="text-gray-400 hover:text-black text-xs font-bold">Help</a>
          </div>
        </nav>
        </div>
        
        <div className='mt-64'>
        <div className="px-4 py-8 bg-gradient-to-l from-[#4623E9] via-[#EAABF0] to-[#EAABF0] rounded-xl">
          <p className='text-[10px] text-white text-center'>Upgrade to PRO to get <br /> access all features</p>
          <button className="w-full bg-white text-[#4623E9] font-bold mb-0 mt-4 text-xs py-2 my-2 rounded-xl hover:text-white hover:bg-purple-700">
            Get Pro now
          </button>
        </div>
        <div className='flex justify-between align-middle items-center mt-4'>
            <div className='flex items-center gap-3'>
              <img src={projectManager} alt="project_managerIcon" />
              <p className='text-sm font-bold'>Evano <br /><span className='font-normal'>Project Manager</span></p>
            </div>
            <div className='cursor-pointer'>
              <img src={arrowDown} alt="arrow_down" />
            </div>
        </div>
        </div>
        
      </aside>


      {/* Right Container */}
      <main className="flex-1 p-6 bg-gray-100">

        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Hello Evano 👋</h1>
          <div className='flex items-center p-2 border rounded-lg bg-white'>
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
           <input type="text" placeholder="Search" className=" border border-none focus:outline-none" />
          </div>
        </header>


        {/* <section className="grid grid-cols-3 mb-6"> */}
          {/* <div className='flex justify-between bg-white mb-6 p-6 rounded-3xl'> */}
          <div className='grid grid-cols-3 divide-x bg-white mb-6 p-8 rounded-3xl'>
              {/* First Column */}
          <div className="flex items-center gap-4 p-4 ">
            <div>
              <img src={totalCustomer} alt="memebers_icon" className='w-20 h-20' />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-400">Total Customers</h2>
              <p className="text-3xl font-bold">5,423</p>
              <p className="text-sm"><span className='text-green-500 mr-2 font-bold'><FontAwesomeIcon icon={faArrowUp} className='mr-2'/>16%</span>this month</p>
            </div>
          </div>
          {/* Second Column */}
          <div className="flex items-center gap-4 p-4">
            <div>
              <img src={member} alt="memebers_icon" className='w-20 h-20' />
            </div>
            <div>
              <span></span>
              <h2 className="text-lg font-semibold text-gray-400">Memebers</h2>
              <p className="text-3xl font-bold">1,893</p>
              <p className="text-sm"><span className='text-red-700 mr-2 font-bold'><FontAwesomeIcon icon={faArrowDown} className='mr-2 ' />1%</span>this month</p>
            </div>
          </div>
          {/* Third Column */}
          <div className="flex items-center gap-4  p-4">
            <div>
              <img src={activeNow} alt="memebers_icon" className='w-20 h-20' />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-400">Active Now</h2>
              <p className="text-3xl font-bold">189</p>
              <img src={dashActiveNow} alt="" />
            </div>
          </div>
          </div>
        {/* </section> */}

          {/* Customers Container */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg mb-4 font-bold">All Customers</h2>
          <div className="mb-4 flex items-center">
          <p className='text-green-500 font-bold text-sm'>Active Members</p>
            <div className='ml-auto flex gap-4'>
            <div className='flex items-center p-2 border rounded-lg bg-gray-200'>
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
           <input type="text" placeholder="Search" className=" border border-none focus:outline-none bg-gray-200" />
          </div>
            <select className="p-2 border rounded-lg bg-gray-200 text-sm font-bold select-custom">
              {/* <option>Sort by: Newest</option> */}
              <option>
            <span className="sort-by">Sort by:</span> <span className="newest">Newest</span>
        </option>
            </select>
            </div>
          </div>
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left">
                <th className="p-2">Customer Name</th>
                <th className="p-2">Company</th>
                <th className="p-2">Phone Number</th>
                <th className="p-2">Email</th>
                <th className="p-2">Country</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Jane Cooper</td>
                <td className="p-2">Microsoft</td>
                <td className="p-2">(225) 555-0118</td>
                <td className="p-2">jane@microsoft.com</td>
                <td className="p-2">United States</td>
                {/* <td className=" text-center text-green-700 bg-[#16C098] opacity-50 font-bold ring-2 ring-green-700 ring-inset">Active</td> */}
                <button className='px-6 py-1 bg-[#16C098]  text-xs font-bold text-green-700 ring-2 ring-green-700 hover:bg-green-400 rounded-sm'>Active</button>
              </tr>
              <tr>
                <td className="p-2">Floyd Miles</td>
                <td className="p-2">Yahoo</td>
                <td className="p-2">(205) 555-0100</td>
                <td className="p-2">floyd@yahoo.com</td>
                <td className="p-2">Kiribati</td>
                <button className='px-6 py-1 bg-red-400 text-xs font-bold text-red-700 ring-2 ring-red-700 hover:bg-red-200 rounded-sm'>Active</button>
              </tr>
              <tr>
                <td className="p-2">Ronald Richards</td>
                <td className="p-2">Adobe</td>
                <td className="p-2">(302) 555-0107</td>
                <td className="p-2">ronald@adobe.com</td>
                <td className="p-2">Israel</td>
                <button className='px-6 py-1 bg-red-400 text-xs font-bold text-red-700 ring-2 ring-red-700 hover:bg-red-200 rounded-sm'>Active</button>
              </tr>
              <tr>
                <td className="p-2">Marvin McKinney</td>
                <td className="p-2">Tesla</td>
                <td className="p-2">(252) 555-0126</td>
                <td className="p-2">marvin@tesla.com</td>
                <td className="p-2">Iran</td>
                <button className='px-6 py-1 bg-[#16C098]  text-xs font-bold text-green-700 ring-2 ring-green-700 hover:bg-green-400 rounded-sm'>Active</button>
              </tr>
              <tr>
                <td className="p-2">Jerome Bell</td>
                <td className="p-2">Google</td>
                <td className="p-2">(629) 555-0129</td>
                <td className="p-2">jerome@google.com</td>
                <td className="p-2">Réunion</td>
                <button className='px-6 py-1 bg-[#16C098]  text-xs font-bold text-green-700 ring-2 ring-green-700 hover:bg-green-400 rounded-sm'>Active</button>
              </tr>
              <tr>
                <td className="p-2">Kathryn Murphy</td>
                <td className="p-2">Microsoft</td>
                <td className="p-2">(406) 555-0120</td>
                <td className="p-2">kathryn@microsoft.com</td>
                <td className="p-2">Curaçao</td>
                <button className='px-6 py-1 bg-[#16C098]  text-xs font-bold text-green-700 ring-2 ring-green-700 hover:bg-green-400 rounded-sm'>Active</button>
              </tr>
              <tr>
                <td className="p-2">Jacob Jones</td>
                <td className="p-2">Yahoo</td>
                <td className="p-2">(208) 555-0112</td>
                <td className="p-2">jacob@yahoo.com</td>
                <td className="p-2">Brazil</td>
                <button className='px-6 py-1 bg-[#16C098]  text-xs font-bold text-green-700 ring-2 ring-green-700 hover:bg-green-400 rounded-sm'>Active</button>
              </tr>
              <tr>
                <td className="p-2">Kristin Watson</td>
                <td className="p-2">Facebook</td>
                <td className="p-2">(704) 555-0127</td>
                <td className="p-2">kristin@facebook.com</td>
                <td className="p-2">Åland Islands</td>
                <button className='px-6 py-1 bg-red-400 text-xs font-bold text-red-700 ring-2 ring-red-700 hover:bg-red-200 rounded-sm'>Active</button>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-500 text-xs font-bold">Showing data 1 to 8 of 256K entries</span>
            <div className="flex space-x-2">
            <button className='px-4 py-2 border rounded-lg'><FontAwesomeIcon icon={faArrowLeft} /></button>
              <button className="px-4 py-2 border rounded-lg bg-purple-700 text-white">1</button>
              <button className="px-4 py-2 border rounded-lg">2</button>
              <button className="px-4 py-2 border rounded-lg">3</button>
              <button className="px-4 py-2 border rounded-lg">4</button>
              <span className="px-4 py-2">...</span>
              <button className="px-4 py-2 border rounded-lg">40</button>
              <button className='px-4 py-2 border rounded-lg'><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
