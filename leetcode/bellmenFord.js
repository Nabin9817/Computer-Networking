class Solution {
    // Implementation for Bellman-Ford shortest path algorithm
    shortestPath(n, edges, src) {
        // Step 1: Initialize distances from src to all other vertices as INFINITE
        const dist = Array(n).fill(Infinity);
        dist[src] = 0;

        // Step 2: Relax all edges |V| - 1 times
        for (let i = 0; i < n - 1; i++) {
            for (const [u, v, w] of edges) {
                if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }

        // Step 3: Check for negative-weight cycles
        for (const [u, v, w] of edges) {
            if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
                // If we get here, then there is a negative weight cycle
                console.log("Graph contains negative weight cycle");
                return {};
            }
        }

        // Convert distances array to shortest path map
        const shortest = {};
        for (let i = 0; i < n; i++) {
            shortest[i] = dist[i] === Infinity ? -1 : dist[i];
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
