class SearchingAlgorithms
{
    linearSearch(array,target)
    {
        const select=[];
                for (let i = 0; i < array.length; i++) {
                    // Check if the current element is equal to the target
                    select.push(i);
                    if (array[i] == target) {
                        break; // Return the index if found
                    }
                }
                console.log(select);
                return select;
                 
    }
    
    binarySearch(array,target)
    {
        const select=[];
        let left = 0; // Start index
        let right = array.length - 1; // End index

        // Continue searching while left index is less than or equal to right index
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2); // Calculate mid index
            select.push(mid);
            // Check if the target is present at mid
            if (array[mid] == target) {
                break; // Target found
            }

            // If target is greater, ignore the left half
            if (array[mid] < target) {
                left = mid + 1;
            } else { // If target is smaller, ignore the right half
                right = mid - 1;
            }
        }
        console.log(select);
        return select; 
    }
        
        
    }
export
{
    SearchingAlgorithms
}