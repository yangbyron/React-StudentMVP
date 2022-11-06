import {COLORS} from './Colors';
import { PieChart } from 'react-minimal-pie-chart';

const DisplayChart = () => {

    return (
        <PieChart
            data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 0, color: '#6A2135' },
            ]}
            label={(data)=>data.dataEntry.value!==0?data.dataEntry.title:''}
            viewBoxSize={[1000,1000]}
            />
    )
}
export default DisplayChart;