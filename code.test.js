// Setup Code to copy and paste
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// Manually create tests. Not ideal but I can't figure out prooperty based testing

// Single Node
graph = [[1]];
assert.deepStrictEqual(dijkstra(graph, 0), [0]);
graph = [[5]];
assert.deepStrictEqual(dijkstra(graph, 0), [0]);

// Double Nodes
graph = [
    [0, 5],
    [1, 0]
];
assert.deepStrictEqual(dijkstra(graph, 0), [0, 5]);
assert.deepStrictEqual(dijkstra(graph, 1), [1, 0]);

// Triple Node - Unweighted
graph = [
    [0, 1, 1],
    [0, 0, 1],
    [0, 1, 0]
];
assert.deepStrictEqual(dijkstra(graph, 0), [0, 1, 1]);
assert.deepStrictEqual(dijkstra(graph, 1), [Infinity, 0, 1]);
assert.deepStrictEqual(dijkstra(graph, 2), [Infinity, 1, 0]);

// Triple Node - Weighted
graph = [
    [0, 5, 1],
    [0, 0, 1],
    [0, 2, 0]
];
assert.deepStrictEqual(dijkstra(graph, 0), [0, 3, 1]);
assert.deepStrictEqual(dijkstra(graph, 1), [Infinity, 0, 1]);
assert.deepStrictEqual(dijkstra(graph, 2), [Infinity, 2, 0]);

// Quad Node - Unweighted
graph = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 0]
];
assert.deepStrictEqual(dijkstra(graph, 0), [0, 1, 3, 2]);
assert.deepStrictEqual(dijkstra(graph, 1), [Infinity, 0, 2, 1]);
assert.deepStrictEqual(dijkstra(graph, 2), [Infinity, 1, 0, 1]);
assert.deepStrictEqual(dijkstra(graph, 3), [Infinity, 1, 1, 0]);

// Quad Node - Weighted
graph = [
    [0, 2, 0, 0],
    [0, 0, 0, 3],
    [0, 4, 0, 1],
    [0, 1, 2, 0]
];
assert.deepStrictEqual(dijkstra(graph, 0), [0, 2, 7, 5]);
assert.deepStrictEqual(dijkstra(graph, 1), [Infinity, 0, 5, 3]);
assert.deepStrictEqual(dijkstra(graph, 2), [Infinity, 2, 0, 1]);
assert.deepStrictEqual(dijkstra(graph, 3), [Infinity, 1, 2, 0]);

// Sept Node - Unweighted
graph = [
    [0, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
];
assert.deepStrictEqual(dijkstra(graph, 0), [0, 1, 1, 2, 2, 1, 2]);
assert.deepStrictEqual(dijkstra(graph, 1), [Infinity, 0, Infinity, Infinity, 1, Infinity, Infinity]);
assert.deepStrictEqual(dijkstra(graph, 2), [Infinity, Infinity, 0, 1, 2, 1, 2]);
assert.deepStrictEqual(dijkstra(graph, 3), [Infinity, Infinity, Infinity, 0, 1, Infinity, Infinity]);
assert.deepStrictEqual(dijkstra(graph, 4), [Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity]);
assert.deepStrictEqual(dijkstra(graph, 5), [Infinity, Infinity, Infinity, Infinity, Infinity, 0, 1]);
assert.deepStrictEqual(dijkstra(graph, 6), [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0]);

// Sept Node - Weighted
graph = [
    [0, 1, 2, 0, 0, 7, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 3, 0],
    [0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 0],
];
assert.deepStrictEqual(dijkstra(graph, 0), [0, 1, 2, 3, 2, 5, 9]);
assert.deepStrictEqual(dijkstra(graph, 1), [Infinity, 0, Infinity, Infinity, 1, Infinity, Infinity]);
assert.deepStrictEqual(dijkstra(graph, 2), [Infinity, Infinity, 0, 1, 5, 3, 7]);
assert.deepStrictEqual(dijkstra(graph, 3), [Infinity, Infinity, Infinity, 0, 4, Infinity, Infinity]);
assert.deepStrictEqual(dijkstra(graph, 4), [Infinity, Infinity, Infinity, Infinity, 0, Infinity, Infinity]);
assert.deepStrictEqual(dijkstra(graph, 5), [Infinity, Infinity, Infinity, Infinity, Infinity, 0, 4]);
assert.deepStrictEqual(dijkstra(graph, 6), [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 0]);