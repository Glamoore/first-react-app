import React from 'react'
import { useParams } from "react-router-dom";
import { getInvoices } from '../data';

function Invoice() {
  let {number} = useParams();
  console.log('number', number);
  let invoices = getInvoices();
  console.log("🚀 ~ file: Invoice.jsx ~ line 9 ~ Invoice ~ invoices", invoices)
  
  const invoice = invoices.find(({number:n}) => {
    return n === Number(number);
  });
  console.log('invoice', invoice);
  if (!invoice) return <p>Invoice number {number} not found!</p>
  const {name, amount, due} = invoice;
  return (
    <div>
      <h1>Invoice: {number}</h1>
      <dl>
        <dt>Client</dt>
        <dd>{name}</dd>
        <dt>Amount</dt>
        <dd>{amount}</dd>
        <dt>Due by</dt>
        <dd>{due}</dd>
      </dl>
    </div>
  )
}

export default Invoice