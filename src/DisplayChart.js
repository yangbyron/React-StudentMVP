import {COLORS} from './Colors';
import { PieChart } from 'react-minimal-pie-chart';
const DisplayChart = (props) => {
    const data = props.sumOfData;
    const dataArray = data.map(obj=>{
        let category = obj.category.replace(/\s/g, '');
        return {title:category, value:Number(obj.amount), color:COLORS[category]}
    })
    return (
        <PieChart
            data={dataArray}
            label={(data)=>data.dataEntry.value!==0?data.dataEntry.title:''}
            viewBoxSize={[500,500]}
            center={[300,50]}
            labelStyle={{
                fontSize:'9px',
            }}
            radius={42}
            labelPosition={112}
            />
    )
}
export default DisplayChart;