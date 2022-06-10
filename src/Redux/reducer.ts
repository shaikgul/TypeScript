

const initial = {
    service: [],
    count: 9,
    cartService:[]
}


function reducer(state = initial, action: any) {

    switch (action.type) {
        case 'CASE1':
            return {
                ...state,
                service: action.payload
            }
        case 'CASE2':
            console.log(action, "hul")
            const data = state.service
            data.map((value: any, index: number) => {
                if (value.id == action.payload.id) {
                    return (data.splice(index, 1))
                }

            })
            return {
                ...state,
                service: [...data]
            }

            case 'CASE3':
                console.log(action.payload,"ll")
            const result:any =state.cartService
              result.push(action.payload)  
            return {
                ...state,
                 cartService: result
            }

            case 'CASE4':
                const dummy = state.cartService
                dummy.map((value: any, index: number) => {
                    if (value.id == action.payload.id) {
                        return (dummy.splice(index, 1))
                    }
                    })
                
            return {
                ...state,
                cartService: [...dummy]
            }
        default:
            return state
    }
}

export default reducer