function networkDelayTime(times, n, k) {
    const distances = Array(n + 1).fill(Infinity);
    distances[k] = 0;

    for (let i = 1; i <= n; i++) {
        for (const [u, v, w] of times) {
            if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
                distances[v] = distances[u] + w;
            }
        }
    }

    let maxDistance = 0;
    for (let i = 1; i <= n; i++) {
        if (distances[i] === Infinity) return -1;
        maxDistance = Math.max(maxDistance, distances[i]);
    }

    return maxDistance;
}

// Example usage
const times = [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
];
const n = 4;
const k = 2;
console.log(networkDelayTime(times, n, k)); // Output: 2
