import React from 'react'
import { View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'

export default function Dropdown(props) {
    return (
        <View>
            <SelectDropdown
                            data={props.data}
                            onSelect={(selectedItem, index) => {
                                props.setValue(selectedItem)
                            }}
                            defaultValue={props.defaultValue}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            buttonTextStyle={{
                                fontSize: 15,
                                color: props.color ? props.color : null
                            }}
                            buttonStyle={{
                                width: props.width,
                                height: props.height,
                                backgroundColor: 'white',
                                borderColor: '#EEEFF0',
                                borderWidth: 1,
                            }}
                        />
        </View>
    )
}
