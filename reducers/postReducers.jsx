const funva = (values) => {

    fetch('http://localhost:2010/get/reducers',
                    {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
            
                        body: JSON.stringify(values)
            
                    })
   
                    .then((response) => {
                             console.log(response);
                             return response.json();
                        })
                        .then((test) => {
                            console.log(test);
                            return test;
                      
                          })

}

const postReducer = (state = null, action) => {
  
// console.log("state",state)
//     console.log("passVal", action.values)

    switch (action.type) {
        case 'SEND_URL':
            funva(action.values)
        default:
            return state ;
    }




}
export default postReducer;