import { useState } from 'react'
import Fejlec from './fejlec';
import Lablec from './lablec';

export default function ColorChanger(){
    const [backgroundColor, setBackgroundColor] = useState('#ffffff')
    const letters = '0123456789ABCDEF';
    


    return<>
        <body style={{backgroundColor}}>
            <Fejlec/>
            <br />
            <button onClick={() => {
                let color = '#';
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                setBackgroundColor(color);
            }}>Random Szín</button>
            <Lablec/>
        </body>
    </>;


}