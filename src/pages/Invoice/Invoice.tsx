import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import invoiceData from '../../invoiceData'
import InvoiceMain from '../../components/Invoice/InvoiceMain'
import {PDFViewer} from '@react-pdf/renderer'
import FormInvoice from '../../components/Invoice/FormInvoice'

const Invoice = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    {/* <PDFViewer width="700" height="600" className="app" >
      <InvoiceMain invoice={invoiceData}/>
    </PDFViewer> */}
    <FormInvoice/>
    </>
  )
}

export default Invoice