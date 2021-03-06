
export default function Walls(map) {
    switch (map) {
        case 1: return []
        case 2: return [
            [1, 1],  [1, 2],  [1, 3],  [1, 4],  [1, 5],  [1, 6],  [1, 7], 
            [1, 8],  [1, 9],  [1, 10], [1, 11], [1, 12], [1, 13], [1, 14],
            [1, 15], [1, 16], [1, 17], [1, 18], [1, 19], [1, 20], [1, 21], 
            [1, 22], [1, 23], [1, 24], [1, 25],

            [25, 1],  [25, 2],  [25, 3],  [25, 4],  [25, 5],  [25, 6],  [25, 7], 
            [25, 8],  [25, 9],  [25, 10], [25, 11], [25, 12], [25, 13], [25, 14],
            [25, 15], [25, 16], [25, 17], [25, 18], [25, 19], [25, 20], [25, 21], 
            [25, 22], [25, 23], [25, 24], [25, 25],

            [2, 1],  [3, 1],  [4, 1],  [5, 1],  [6, 1],  [7, 1],  [8, 1], [9, 1], 
            [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1],
            [18, 1], [19, 1], [20, 1], [21, 1], [22, 1], [23, 1], [24, 1], [25, 1], 

            [1, 25],  [2, 25],  [3, 25],  [4, 25],  [5, 25],  [6, 25],  [7, 25],  [8, 25], [9, 25], 
            [10, 25], [11, 25], [12, 25], [13, 25], [14, 25], [15, 25], [16, 25], [17, 25],
            [18, 25], [19, 25], [20, 25], [21, 25], [22, 25], [23, 25], [24, 25], [25, 25], 

        ]
        case 3: return [
            [13, 1],  [13, 2],  [13, 3],  [13, 4],  [13, 5],
            [13, 6],  [13, 7],  [13, 8],  [13, 9],  [13, 10],
            [13, 11], [13, 12], [13, 13], [13, 14], [13, 15],
            [13, 16], [13, 17], [13, 18], [13, 19], [13, 20], 
            [13, 21], [13, 22], [13, 23], [13, 24], [13, 25],
            [1, 13],  [2, 13],  [3, 13],  [4, 13],  [5, 13],
            [6, 13],  [7, 13],  [8, 13],  [9, 13],  [10, 13],
            [11, 13], [12, 13], [13, 13], [14, 13], [15, 13],
            [16, 13], [17, 13], [18, 13], [19, 13], [20, 13], 
            [21, 13], [22, 13], [23, 13], [24, 13], [25, 13]
            
        ]
        case 4: return [
            [5, 6], [6, 6], [7, 6],
            [6, 5], [6, 6], [6, 7],
            
            [19, 6], [20, 6], [21, 6], 
            [20, 5], [20, 6], [20, 7],

            [5, 20], [6, 20], [7, 20],
            [6, 19], [6, 20], [6, 21],

            [19, 20], [20, 20], [21, 20],
            [20, 19], [20, 20], [20, 21]
            
        ]
        case 5: return [
            [13, 1],  [13, 2],  [13, 3],  [13, 4],  [13, 5],
            [13, 6],  [13, 7],  [13, 8],  [13, 9],  [13, 10],
            [13, 11], [13, 12], [13, 13], [13, 14], [13, 15],
            [13, 16], [13, 17], [13, 18], [13, 19], [13, 20], 
            [13, 21], [13, 22], [13, 23], [13, 24], [13, 25],
            [1, 13],  [2, 13],  [3, 13],  [4, 13],  [5, 13],
            [6, 13],  [7, 13],  [8, 13],  [9, 13],  [10, 13],
            [11, 13], [12, 13], [13, 13], [14, 13], [15, 13],
            [16, 13], [17, 13], [18, 13], [19, 13], [20, 13], 
            [21, 13], [22, 13], [23, 13], [24, 13], [25, 13],

            [5, 6], [6, 6], [7, 6],
            [6, 5], [6, 6], [6, 7],
            
            [19, 6], [20, 6], [21, 6], 
            [20, 5], [20, 6], [20, 7],

            [5, 20], [6, 20], [7, 20],
            [6, 19], [6, 20], [6, 21],

            [19, 20], [20, 20], [21, 20],
            [20, 19], [20, 20], [20, 21]

        ]
        case 6: return [
            [1, 1],  [1, 2],  [1, 3],  [1, 4],  [1, 5],  [1, 6],  [1, 7], 
            [1, 8],  [1, 9],  [1, 10], [1, 11], [1, 12], [1, 13], [1, 14],
            [1, 15], [1, 16], [1, 17], [1, 18], [1, 19], [1, 20], [1, 21], 
            [1, 22], [1, 23], [1, 24], [1, 25],

            [25, 1],  [25, 2],  [25, 3],  [25, 4],  [25, 5],  [25, 6],  [25, 7], 
            [25, 8],  [25, 9],  [25, 10], [25, 11], [25, 12], [25, 13], [25, 14],
            [25, 15], [25, 16], [25, 17], [25, 18], [25, 19], [25, 20], [25, 21], 
            [25, 22], [25, 23], [25, 24], [25, 25],

            [2, 1],  [3, 1],  [4, 1],  [5, 1],  [6, 1],  [7, 1],  [8, 1], [9, 1], 
            [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1],
            [18, 1], [19, 1], [20, 1], [21, 1], [22, 1], [23, 1], [24, 1], [25, 1], 

            [1, 25],  [2, 25],  [3, 25],  [4, 25],  [5, 25],  [6, 25],  [7, 25],  [8, 25], [9, 25], 
            [10, 25], [11, 25], [12, 25], [13, 25], [14, 25], [15, 25], [16, 25], [17, 25],
            [18, 25], [19, 25], [20, 25], [21, 25], [22, 25], [23, 25], [24, 25], [25, 25], 

            [5, 6], [6, 6], [7, 6],
            [6, 5], [6, 6], [6, 7],
            
            [19, 6], [20, 6], [21, 6], 
            [20, 5], [20, 6], [20, 7],

            [5, 20], [6, 20], [7, 20],
            [6, 19], [6, 20], [6, 21],

            [19, 20], [20, 20], [21, 20],
            [20, 19], [20, 20], [20, 21]

        ]
        default: return []
    }
}