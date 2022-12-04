
import './Form.css'


const FormInvoice = () => {
  return (
  <>
     <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sender">
            Your email address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="sender"
            name="sender"
            type="email"
            required
            placeholder="your email"
          />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold my-3" htmlFor="billTo">
            Bill To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="billTo"
            name="billTo"                   
            required
            placeholder="bill to"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shipTo">
            Ship To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="shipTo"
            name="shipTo"
            type="email"
            required
            placeholder="Client's email"           
          />
        </div>
        <div className="flex justify-center items-center" >
            <label className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5" >
              Invoice Item
              <input
                className="shadow appearance-none border rounded w-full mx-3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="itemDescription"
                type="text"
                spellCheck="false"
              />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5">
              Quantity
              <input
                className="shadow appearance-none border rounded w-full mx-3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="qty"
                type="number"
                spellCheck="false"
              />
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2 w-full  mr-5">
              Unit Price
              <input
                className="shadow appearance-none border rounded w-full mx-3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                type="tel"
                spellCheck="false"
              />
            </label>
            <button
              className="btn btn-primary hover:bg-red-700 h-8 px-5 py-3 mx-3 flex items-center justify-center text-white font-bold rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Item
            </button>
            <button
              className="btn btn-danger hover:bg-red-700 h-8 px-5 py-3 flex items-center justify-center text-white font-bold rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Remove
            </button>
            
      </div>
    </form>
  </>
   
    
  )
}

export default FormInvoice