//Поиск в ширину в графе

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue =[]
//добавляем стартовую вершину
    queue.push(start)
    while(queue.length > 0) {
        const current = queue.shift()
    }
}