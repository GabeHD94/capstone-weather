import React from 'react';

// import React, { Spring } from 'react-spring';



function dateBuild() {
    const dateBuilder = (currentDate) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const days = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"]

        const day = days[currentDate.getDay()];
        const month = months[currentDate.getMonth()];
        const date = currentDate.getDate();
        const year = currentDate.getFullYear();

        return `${day} ${month} ${date} ${year}`
            
        
    }


    return(

        <div className="date-container">
            <div className='date'>{dateBuilder(new Date())}</div>
        </div>
    )

}


export default dateBuild;
