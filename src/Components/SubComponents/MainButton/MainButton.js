import React from 'react';
import {withRouter} from 'react-router-dom';




const MainButton = ({children, link, history, ...otherProps}) => {

    // console.log(history)

    return (

        <div>

            {
            link ?
            (

                <button onClick={()=> history.push(link)}>
                    {children}
                </button>
            ) : 

                <button type='submit' className='sub-form-button' {...otherProps}>
                
                    {children}

                </button>
                
            }


        </div>
        
    )
}

export default withRouter(MainButton);