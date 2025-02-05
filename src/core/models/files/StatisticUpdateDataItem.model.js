import { textUtils } from '../../../utils';

class StatisticUpdateDataItemModel {

    constructor(data) {
        const { type, iconName, updateType, valuesPair } = data;
        this.type = type;
        this.iconName = iconName;
        this.updateType = null;
        this.count = null;
        this.countDisplay = null;
        // Set default values.
        this.setDefaultValues(updateType, valuesPair);
    }

    setDefaultValues(updateType, valuesPair) {
        this.updateType = '';
        this.count = '';
        this.countDisplay = '';
        if (valuesPair && valuesPair.length === 2) {
            this.updateType = updateType;
            this.count = valuesPair[0];
            if (textUtils.isInvalidNumber(this.count)) {
                this.updateType = '';
                this.countDisplay = '';
            }
            else {
                this.countDisplay = valuesPair[1];
            }
        }
    }
}

export default StatisticUpdateDataItemModel;