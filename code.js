function dijkstra(graph, sourceNode) {

    let dist = []
    for (i = 0; i < graph.length; i++) {
        dist[i] = Infinity;
    }
    dist[sourceNode] = 0;
    let visited = new Set();

    while (visited.size < graph.length) {
        // Select the unmarked vertex v with the lowest dist
        let minDist = Infinity;
        // Exit condition
        let v = -1;

        for (let i = 0; i < graph.length; i++) {
            if (!visited.has(i) && dist[i] < minDist) {
                minDist = dist[i];
                v = i;
            }
        }

        if (v === -1) break; // No more reachable nodes

        visited.add(v);

        // Update distances to adjacent vertices
        for (let w = 0; w < graph.length; w++) {
            if (graph[v][w] > 0 && !visited.has(w)) {
                dist[w] = Math.min(dist[w], dist[v] + graph[v][w]);
            }
        }
    }

    return dist;
}