import React from 'react';


const Navigation = ({handleChange, activePage }) => { 
  const pageOptions = ['home',' about'];

  const pageButtons = pageOptions.map((item,index) => { 
    const active = activePage === item;
    return ( 
      <div>{item}</div>
    )
  })

  return ( 
    <div> 
      {pageButtons}
    </div>
  );
};

export default Navigation;