import { useContext, useState } from "react";
import { serviceContext } from "../Context/ServiceContext/ServiceContext";


export default function BookService() {
  const { bookServiceAction } = useContext(serviceContext);
  const [formData, setFormData] = useState({
    name: "",
    serviceType: "",
    schedule: "",
    notes: "",
  });

  //handle form change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //handle form submit
  const handleSubmit = e => {
    e.preventDefault();
    bookServiceAction(formData);
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
           Book Service
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    value={formData.title}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            
              <div>
              <label className="block text-sm font-medium text-gray-700">
              Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="mt-1 block w-full border-2 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option value="SaviSpace Planningngs">Space Planning</option>
                  <option value="Concept Development">Concept Development</option>
                  <option value="Furniture and Fixture Selection">Furniture and Fixture Selection</option>
                  <option value="Customization and Millwork">Customization and Millwork</option>
                  <option value="Lighting Design">Lighting Design</option>
                  <option value="Renovation and Remodeling">Renovation and Remodeling</option>
                  <option value="Styling and Decorative Accessories">Styling and Decorative Accessories</option>
                </select>
              </div>
              <div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                Schedule
                </label>
                <div className="mt-1">
                  <input
                    value={formData.title}
                    onChange={handleChange}
                    name="schedule"
                    type="text"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
                <label className="block text-sm font-medium text-gray-700">
                  Add Note
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="notes"
                    type="text"
                    value={formData.notes}
                    onChange={handleChange}
                    className="block w-full border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full  justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                 Book Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
