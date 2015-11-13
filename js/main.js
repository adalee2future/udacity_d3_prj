var labels = true; // show the text labels beside individual boxplots?

var margin = {top: 30, right: 50, bottom: 70, left: 50};
var  width = 800 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;
	
var min = Infinity,
    max = -Infinity;
	
// parse in the data	
d3.csv("data/height.csv", function(error, csv) {
	// using an array of arrays with
	// data[n][2] 
	// where n = number of columns in the csv file 
	// data[i][0] = name of the ith column
	// data[i][1] = array of values of ith column

	var data = [];
	data[0] = [];
	data[1] = [];
	data[2] = [];
	// add more rows if your csv file has more columns

	// add here the header of the csv file
	data[0][0] = "Both handed";
	data[1][0] = "Left handed";
	data[2][0] = "Right handed";
	// add more rows if your csv file has more columns

	data[0][1] = [];
	data[1][1] = [];
	data[2][1] = [];
  
	csv.forEach(function(x) {

		var v1 = Math.floor(x["Both handed"]),
			v2 = Math.floor(x["Left handed"]),
			v3 = Math.floor(x["Right handed"]);
			// add more variables if your csv file has more columns
		
		row_values = [];

		if (x["Both handed"] !== "") {
        	data[0][1].push(v1);
        	row_values.push(v1);
        }
		if (x["Left handed"] !== "") {
        	data[1][1].push(v2);
        	row_values.push(v2);
        }
        if (x["Right handed"] !== "") {
        	data[2][1].push(v3);
        	row_values.push(v3);
        }

		var rowMax = Math.max.apply(null, row_values);
		var rowMin = Math.min.apply(null, row_values);
        
        
		
		
		 // add more rows if your csv file has more columns
		
		
		if (rowMax > max) max = rowMax;
		if (rowMin < min) min = rowMin;	
	});

    console.log(min);
	console.log(max);
	//debugger;
	var chart = d3.box()
		.whiskers(iqr(1.5))
		.height(height)	
		.domain([min, max])
		.showLabels(labels);

	var svg = d3.select("body").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.attr("class", "box")    
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	// the x-axis
	var x = d3.scale.ordinal()	   
		.domain( data.map(function(d) { console.log(d); return d[0] } ) )	    
		.rangeRoundBands([0 , width], 0.7, 0.3); 		

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	// the y-axis
	var y = d3.scale.linear()
		.domain([min, max])
		.range([height + margin.top, 0 + margin.top]);
	
	var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

	// draw the boxplots	
	svg.selectAll(".box")	   
      .data(data)
	  .enter().append("g")
		.attr("transform", function(d) { return "translate(" +  x(d[0])  + "," + margin.top + ")"; } )
      .call(chart.width(x.rangeBand())); 
	
	      
	// add a title
	svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 + (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "18px") 
        //.style("text-decoration", "underline")  
        .text("Height of baseball players with different handedness");
 
	 // draw y axis
	svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
		.append("text") // and text1
		  .attr("transform", "rotate(-90)")
		  .attr("y", 6)
		  .attr("dy", ".71em")
		  .style("text-anchor", "end")
		  .style("font-size", "16px") 
		  .text("Height");		
	
	// draw x axis	
	svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height  + margin.top + 10) + ")")
      .call(xAxis)
	  .append("text")             // text label for the x axis
        .attr("x", (width / 2) )
        .attr("y",  19 )
		.attr("dy", ".71em")
        .style("text-anchor", "middle")
		.style("font-size", "16px") 
        .text("Handedness"); 
});

// Returns a function to compute the interquartile range.
function iqr(k) {
  return function(d, i) {
    var q1 = d.quartiles[0],
        q3 = d.quartiles[2],
        iqr = (q3 - q1) * k,
        i = -1,
        j = d.length;
    while (d[++i] < q1 - iqr);
    while (d[--j] > q3 + iqr);
    return [i, j];
  };
}