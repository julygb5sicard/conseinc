function axisTitle(spec, config, userEncode, dataRef) {
    // Create a base title object with default properties
    let title = {
        text: spec.text || 'Default Title',
        fontSize: config.fontSize || 12,
        fontFamily: config.fontFamily || 'Arial',
        align: spec.align || 'center',
        color: config.color || 'black'
    };

    // If userEncode contains additional styling, merge it with the base title object
    if (userEncode && typeof userEncode === 'object') {
        Object.assign(title, userEncode);
    }

    // Optional: use dataRef to dynamically generate title text based on data
    if (dataRef && typeof dataRef.getTitleText === 'function') {
        title.text = dataRef.getTitleText();
    }

    // Return the constructed title object
    return title;
}

// Example usage:
const spec = { text: 'Sales Over Time', align: 'left' };
const config = { fontSize: 14, fontFamily: 'Helvetica', color: 'blue' };
const userEncode = { fontWeight: 'bold' };
const dataRef = {
    getTitleText: function() {
        return 'Dynamic Title from Data';
    }
};

const titleConfig = axisTitle(spec, config, userEncode, dataRef);
console.log(titleConfig);
// Output: { text: 'Dynamic Title from Data', fontSize: 14, fontFamily: 'Helvetica', align: 'left', color: 'blue', fontWeight: 'bold' }
