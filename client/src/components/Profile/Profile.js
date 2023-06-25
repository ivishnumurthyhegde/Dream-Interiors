import { useContext, useEffect } from "react";
import { authContext } from "../Context/AuthContext/AuthContext";

import { serviceContext } from "../Context/ServiceContext/ServiceContext";
import { Link } from "react-router-dom";

const Profile=()=>{
    const {fetchProfileAction, profile, error} =useContext(authContext);
    
    useEffect(()=>{
   fetchProfileAction()
    }, [])
    console.log(profile);
     return (
        <>
    {error? <> <div
        className="bg-red-100 border text-center border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>{" "}
        <span className="block sm:inline ">{error}</span>
      </div> </>:<>  


      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
       {/* {No services message} */}
          <div className="max-w-3xl mx-auto">

          {profile?.servicesBooked?.length <= 0 ?  ( <>
              <p className="mb-4 text-xl font-medium text-coolGray-500">
                No Services Booked
              </p>
              <p className="mb-4 text-lg text-coolGray-500">
                You have not not booked any of the services till now, click the button to book the service
              </p>
              <a
                href="/services/book"
                className="px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Book Services
              </a>
            </>) : ( <>
              <div className="max-w-4xl mx-auto mb-12 text-center">
            <h3 className="mb-4 text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold tracking-tighter">
              List Of Booked Services
            </h3>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              A list of all services which are booked till now will be displayed here
            </p>
            <Link
              to="/services/book"
              className="inline-flex m-8 items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 m-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            Book new Services
            </Link>
          </div>
          {profile?.servicesBooked?.map(acc=>{
            return (
              <a className="group block mb-6" >
                <div className="flex items-center justify-between flex-wrap p-10 bg-coolGray-50 group-hover:bg-coolGray-100 rounded-md shadow-md transition duration-200">
                  <div className="w-full md:w-1/2 mb-2 md:mb-0">
                    <h3 className="text-lg md:text-xl text-coolGray-800 group-hover:text-coolGray-900 font-semibold">
                      {acc?.name}
                    </h3>
                  </div>
                    <div className="w-full md:w-1/2 md:text-right">
                      <div className="inline-flex items-center leading-6 text-green-500 group-hover:text-green-600 font-medium transition duration-200">
                      {acc?.serviceType}
                      </div>
                    </div>
               
                </div>
              </a>
            )
          })}
            
            </>)}
         {/* {account list} */}
    
          </div>
        </div>
      </section>



      </> }
     
      
    </>
     )
}

export default Profile;