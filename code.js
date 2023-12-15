//I'm sorry for the late update, but I had an idea for a last minute wildcard project while working on notes for a final, I had some issues earlier in the
//week that stopped me from making pushes and I didn't want to leave this off by making it seem like I just blew off the final week. 
//This project is a Monte Carlo approximation of the integral of a function f(x) over an interval [a, b].
//I got this from my scientific computing class, it was something we had to do in MATLAB and decided to try 
//it out in JavaScript.
//Monte Carlo integration is a method of approximating an integral by generating random points in a rectangle
//and checking if they are under the graph of the function. The ratio of points under the graph to total points
//is approximately equal to the ratio of the area under the graph to the area of the rectangle. The area of the
//rectangle is (b - a) * M, where M is the maximum value of the function over the interval [a, b]

function montecarlo2d(f, a, b, M, iterations) {
    let underGraph = 0;

    for (let i = 0; i < iterations; i++) {
        // Generate a random point in the rectangle
        let x = a + Math.random() * (b - a);
        let y = Math.random() * M;

        // Check if the point is under the graph of f(x)
        if (y <= f(x)) {
            underGraph++;
        }
    }

    return underGraph / iterations * (b - a) * M;
}

console.log(montecarlo2d(Math.sin, 0, Math.PI, 1, 1000000)); // approximatley 1.999 changes on run due to there being a random assortment of points each time
