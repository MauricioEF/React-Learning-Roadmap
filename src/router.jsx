import { createBrowserRouter, redirect } from "react-router-dom";

export default createBrowserRouter([
    {path:"/", lazy:()=>import('./routes/home')}, 
    {
        path:'props-states',
        lazy:()=>import('./routes/props-states'),
        children:[
            {
                path:'examples/:componentKey?',
                lazy:()=>import('./routes/props-states/examples'),

            },
            {path:'challenges',lazy:()=>import('./routes/props-states/challenges')},
            {index:true, loader:()=>redirect('/props-states/examples')},
            {path:'*',loader:()=>redirect('/props-states/examples')}
        ]
    },
    {path:'*',lazy:()=>import('./routes/not-found')}

])