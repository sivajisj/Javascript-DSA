# JavaScript Data Structures and Algorithms (kunalDSA)

This repository contains JavaScript implementations of various data structures and algorithms.

## Contents

1. [Misc](#misc)
2. [Recursion](#recursion)
3. [Searching](#searching)
4. [Sorting](#sorting)
5. [Data Structures](#data-structure)
6. [Math](#math)

### Misc
- Description or list of miscellaneous algorithms/files.

### Recursion
- Basics of recursion and related algorithms.

### Searching

Searching techniques are used to locate a specific item or set of items from a collection of items. In computer science, especially when discussing algorithms, searching techniques commonly refer to methods used to locate a specific value within a data structure. Below are some of the most commonly used searching techniques:

## Linear Search (Sequential Search)
- **Description**: Iterates over all items in a list sequentially until the desired item is found.
- **Time Complexity**: 
  - **Best Case**: \(O(1)\)
  - **Worst Case**: \(O(n)\)
  - **Average Case**: \(O(n)\)

## Binary Search
- **Description**: Works on a sorted list. It divides the list into halves and compares the middle element with the target value. If they match, the search is successful. Otherwise, the search continues on the half where the target could be present.
- **Time Complexity**: 
  - **Best Case**: \(O(1)\)
  - **Worst Case**: \(O(\log n)\)
  - **Average Case**: \(O(\log n)\)
- **Note**: Requires the list to be sorted.

### Sorting

Sorting techniques are algorithms used to arrange a list of items in a specific order (ascending or descending). Below are some of the commonly used sorting techniques:

## Bubble Sort
- **Description**: Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
- **Time Complexity**: 
  - **Best Case**: \(O(n)\) (when already sorted)
  - **Worst Case**: \(O(n^2)\)
  - **Average Case**: \(O(n^2)\)

## Selection Sort
- **Description**: Divides the input list into two parts: a sorted sublist and an unsorted sublist. Repeatedly selects the smallest (or largest) element from the unsorted sublist and moves it to the end of the sorted sublist.
- **Time Complexity**: 
  - **Best Case**: \(O(n^2)\)
  - **Worst Case**: \(O(n^2)\)
  - **Average Case**: \(O(n^2)\)

## Insertion Sort
- **Description**: Builds the final sorted list one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
- **Time Complexity**: 
  - **Best Case**: \(O(n)\) (when already sorted)
  - **Worst Case**: \(O(n^2)\)
  - **Average Case**: \(O(n^2)\)

## Merge Sort
- **Description**: A divide-and-conquer algorithm that splits the unsorted list into n sublists, each containing one element, and then repeatedly merges sublists to produce new sorted sublists.
- **Time Complexity**: 
  - **Best Case**: \(O(n \log n)\)
  - **Worst Case**: \(O(n \log n)\)
  - **Average Case**: \(O(n \log n)\)

## Quick Sort
- **Description**: Another divide-and-conquer algorithm that works by selecting a 'pivot' element and partitioning the array around the pivot, placing all smaller elements before it and all larger elements after it.
- **Time Complexity**: 
  - **Best Case**: \(O(n \log n)\) (median of three)
  - **Worst Case**: \(O(n^2)\) (rarely happens with good implementations)
  - **Average Case**: \(O(n \log n)\)

## Heap Sort
- **Description**: Transforms the input list into a binary heap data structure and then sorts the list using the properties of the heap.
- **Time Complexity**: 
  - **Best Case**: \(O(n \log n)\)
  - **Worst Case**: \(O(n \log n)\)
  - **Average Case**: \(O(n \log n)\)

Choosing the right sorting technique depends on various factors such as the size of the dataset, whether it's mostly sorted or not, and specific requirements of your application.


### Data Structures
- Linked List
- Stack
- Queue
- ... (add other data structures you've implemented)

### Math
- Basic mathematical algorithms or concepts.

## Contributing

Contributions are welcome! Please read the contributing guidelines before making any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
