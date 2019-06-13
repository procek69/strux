/**
 * @author      procek69
 * @description Allows to manipulate array, which comes from REST api in a functional ways
 */

(function() {

    if (!Array.prototype.uniqueValuesInColumns) {

        /**
         * @function         uniqueValuesInColumns
         * @param    {any}   Column key
         * @returns  {Array} Array of unique values in column of each element of array.
         */
        Array.prototype.uniqueValuesInColumns = function (column) {
            let uniques = [];
            for (let i = 0; i < this.length; ++i) {
                let item = this[i];
                if (uniques.indexOf(item[column]) == -1) {
                    uniques.push(item[column]);
                }
            }
            return uniques;
        };
    }

    if (!Array.prototype.groupByColumn) {

        /**
         * @function         groupByColumn
         * @param    {any}   Column key
         * @returns  {Array} Array of arrays grouped by common value of a column 
         */
        Array.prototype.groupByColumn = function (column) {
            let uniques = this.uniqueValuesInColumns(column);
            let data = [];
            for (let i = 0; i < uniques.length; ++i) {
                let x = [];
                for (let j = 0; j < this.length; ++j) {
                    if (this[uniques[i]][column] === this[j][column])
                        x.push(this[j]);
                }
                data.push(x);
            }
            return data;
        };
    }

    if (!Array.prototype.uniques) {

        /**
         * @function         uniques
         * @returns  {Array} Unique values in array
         */
        Array.prototype.uniques = function () {
            let array = this.sort();
            let results = [];
            if (array[0]) {
                results.push(array[0]);
            }
            for (let i = 1; i < array.length; i++)
                if (array[i] != array[i-1])
                    results.push(array[i]);
            
            return results;
        };
    }

})();