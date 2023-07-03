import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/transaksi">Transaksi</Link>
        <Link to="/category">Category</Link>
        <Link to="/report">Report</Link>
        <Link to="/history">History</Link>
    </div>
  )
}

export default Navbar