import React from 'react'
import { Input } from 'react-native';

const CustomCheckBox = React.createClass({
    displayName: 'Hello World', // here
    render: function () {
        console.log(this.displayName);
        return (
            <li>
                <Input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
            </li>
        );
    }
});

export default CustomCheckBox;