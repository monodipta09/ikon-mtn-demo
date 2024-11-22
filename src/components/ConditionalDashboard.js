import React from 'react';
import { View } from 'react-native';

const ConditionalDashboard = ({ children, matchProp, matchValue }) => {
    // Ensure children is an array for consistent handling
    const childArray = React.Children.toArray(children);

    // Find the first child where the specified prop matches the provided value
    const childToRender = childArray.find(
        (child) => child.props[matchProp] === matchValue
    );

    return <View>{childToRender || null}</View>;
};

export default ConditionalDashboard;
