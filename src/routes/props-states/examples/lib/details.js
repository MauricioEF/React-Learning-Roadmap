const exampleDetails = {
    'example-1': {
        title:"Toggle Switch",
        description:()=>import('./example-1/Example1Description'),
        component:()=>import('./example-1')
    },
    'example-2': {
        title:'Props usage',
        description:()=>import('./example-2/Example2Description'),
        component:()=>import('./example-2')
    },
    'example-3':{
        title : 'Form Managment',
        description: ()=> import('./example-3/ExampleDescription'),
        component:()=>import('./example-3/Example3')
    }
}

export default exampleDetails;