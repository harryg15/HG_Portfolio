import React from 'react'

const NavigationDots = ({ active }) => {  //tells us on which section are we currently
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (  //when closing menu icon (reverts everything back)
            <a href={`#${item}`} 
            key={item + index}  //to make it unique
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#313BAC'} : { }} //if active is equal to current item, then background color =
            />
        ))}
        </div>
  )
}

export default NavigationDots