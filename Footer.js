import React from 'react'


const Footer = (props) => {
const year = new Date().getFullYear();//automatically adjust year

  return(
    <>
    <footer className="footer">
       <p>Copyright © {year} </p>
    </footer>
    </>
   )

 }

export default Footer