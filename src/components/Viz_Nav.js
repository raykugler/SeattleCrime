import React, {Component} from 'react';
import table from '../table.png';
import pie from '../pie.png';
import bar from '../bar.png';
class Viz_Nav extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
<nav className='viz_nav'>
        <img src={table} alt='chart' className='table_button' onClick={e => this.props.viz_change('table')}/>
        <img src={pie} alt='chart' className='pie_button' onClick={e => this.props.viz_change('donut')}/>
        <img src={bar} alt='chart' className='bar_button'
        onClick={e => this.props.viz_change('chart')}/>
        </nav>
        )
    }
    }

    export default Viz_Nav;