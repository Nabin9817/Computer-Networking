const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

class Solution {
    // Implementation for Dijkstra's shortest path algorithm
    shortestPath(n, edges, src) {
        const adj = {};
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }

        // s = src, d = dst, w = weight
        for (const [s, d, w] of edges) {
            adj[s].push([d, w]);
        }

        // Compute shortest paths
        const shortest = {};
        const minHeap = new MinPriorityQueue((a) => a.priority);
        minHeap.enqueue({ priority: 0, node: src });

        while (!minHeap.isEmpty()) {
            const { priority: w1, node: n1 } = minHeap.dequeue();
            if (shortest.hasOwnProperty(n1)) {
                continue;
            }
            shortest[n1] = w1;

            for (const [n2, w2] of adj[n1]) {
                if (!shortest.hasOwnProperty(n2)) {
                    minHeap.enqueue({ priority: w1 + w2, node: n2 });
                }
            }
        }

        // Fill in missing nodes
        for (let i = 0; i < n; i++) {
            if (!shortest.hasOwnProperty(i)) {
                shortest[i] = -1;
            }
        }

        return shortest;
    }
}

// Example usage:
const solution = new Solution();
const edges = [
    [0, 1, 10],
    [0, 2, 3],
    [1, 3, 2],
    [2, 1, 4],
    [2, 3, 8],
    [2, 4, 2],
    [3, 4, 5],
];
const n = 5;
const src = 0;
console.log(solution.shortestPath(n, edges, src));
