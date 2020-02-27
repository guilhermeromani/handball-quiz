import React, { Component } from 'react'
import CustomCheckBox from './CustomCheckBox';

class CheckboxContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkboxes: [
                {
                    id: 'check-box-1',
                    value: 'Check Box 1',
                    isChecked: false
                },
                {
                    id: 'check-box-2',
                    value: 'Check Box 2',
                    isChecked: false
                },
                {
                    id: 'check-box-3',
                    value: 'Check Box 3',
                    isChecked: false
                },
                {
                    id: 'check-box-4',
                    value: 'Check Box 4',
                    isChecked: false
                },
              ]
        }
    }

    handleCheckChieldElement = (event) => {
        let checkboxes = this.state.checkboxes
        checkboxes.forEach(item => {
           if (item.value === event.target.value)
              item.isChecked =  event.target.checked
        })
        this.setState({checkboxes: checkboxes})
      }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.checkboxes.map((item) => {
                            return (<CustomCheckBox handleCheckChieldElement={this.handleCheckChieldElement} {...item} />)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default CheckboxContainer;