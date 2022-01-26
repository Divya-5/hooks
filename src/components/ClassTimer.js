import React, { Component } from 'react'

class ClassTimer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             timer:0
        }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState(prevState =>({
timer:prevState.timer + 1
            }))
        }, 1000)
    }
    componentWillMount(){
       clearInterval(this.interval) 
    }
    
    render() {
        return (
            <>
                Class Timer - {this.state.timer}
                <button onClick={()=> clearInterval(this.interval) }>Stop Timer</button>
            </>
        )
    }
}
export default ClassTimer 
