//we are not drawing the center triangle.
//we are drawing 3 side triangles and it looks like we drew the center triangle.
//in recursion we are drawing the top triangles of each triangle and after finishing depthe 5 
//we are starting to draw left triangles 
//then right triangles.

var value = "";

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');


        var sWidth = canvas.width;
        var sHeight = canvas.height;
        points = [[sWidth / 2, 0], [0, sHeight], [sWidth, sHeight]];
        sierpinski(points, 5);
    }
}
    function drawTriangle(points, color) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            

            ctx.beginPath();
            ctx.moveTo(points[0][0], points[0][1]);
            ctx.lineTo(points[1][0], points[1][1]);
            ctx.lineTo(points[2][0], points[2][1]);
            ctx.fillStyle = color;
            ctx.fill();

           

        }
    }


    function getMid(p1, p2) {
        return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
    }

    function sierpinski(points, degree) {

        var divValue = document.getElementById('displayArea');
       
        for (i = 0; i < points.length; i++) {
            for (j = 0; j < points[0].length; j++) { value += points[i][j] + "  "; }
            value += "<br>";
        }
        value += "<br>";
        //divValue.innerHTML=value;

        var colormap = ["blue", "red", "yellow", "green",
            "violet", "orange"];
        
        drawTriangle(points, colormap[degree]);
        
        if (degree > 0) {
            sierpinski(
                [
                    points[0],
                    getMid(points[0], points[1]),
                    getMid(points[0], points[2])
                ],
                degree - 1);
            sierpinski([points[1],
            getMid(points[0], points[1]),
            getMid(points[1], points[2])],
                degree - 1);
            sierpinski([points[2],
            getMid(points[2], points[1]),
            getMid(points[0], points[2])],
                degree - 1);
        }
        else {

            return;
        }
    }



