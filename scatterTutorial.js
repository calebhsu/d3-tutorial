// First, we will create some constants to define non-data-related parts of the visualization
var w = 700; // Width of our visualization
var h = 500; // Height of our visualization
var xOffset = 40; // Space for x-axis labels
var yOffset = 100; // Space for y-axis labels
var margin = 10; // Margin around visualization
var vals = ['Rank', 'Frequency', 'TFIDF', 'Document Frequency']; // List of data attributes
var xVal = vals[0]; // Value to plot on x-axis
var yVal = vals[1]; // Value to plot on y-axis

// Next, we will load in our CSV of data
d3.csv( 'shakespeare_top100.csv', function( csvData ){
  data = csvData;

  // Define scales that convert from the data domain to screen coordinates
  xScale = d3.scale.linear()
             .domain([d3.min( data, function( d ){
                      return parseFloat( d[xVal] );
                    })-1, d3.max( data, function( d ){
                      return parseFloat( d[xVal] );
                    })+1])
             .range([xOffset + margin, w - margin]);

  yScale = d3.scale.linear()
            .domain([d3.min( data, function( d ){
                     return parseFloat( d[yVal] );
                   })-1, d3.max( data, function( d ){
                     return parseFloat( d[yVal] );
                   })+1])
            .range([h - yOffset - margin, margin]);

  var svg = d3.select("#pointsSVG").append("svg:svg")
                                   .attr("width", w)
                                   .attr("height", h);

	// This will define scales that convert values
	// from our data domain into screen coordinates.


	// Next, we will create an SVG element to contain our visualization.


	// Build axes! (These are kind of annoying, actually...)

	// Now, we will start actually building our scatterplot!
		// Select elements
		// Bind data to elements

		// Create new elements if needed

		// Update our selection
			// Give it a class
			// x-coordinate
			// y-coordinate
			// radius
			// tooltip

    // Now, let's select all of our points and change their color
});

// A function to retrieve the next value in the vals list
function getNextVal(val) {
	return vals[(vals.indexOf(val) + 1) % vals.length];
};

// A function to change what values we plot on the x-axis
function setXval(val) {
	// Update xVal
	xVal = val;
	// Update the axis
	xScale.domain([d3.min(data, function(d) { return parseFloat(d[xVal]); })-1,
				   d3.max(data, function(d) { return parseFloat(d[xVal]); })+1])
	xAxis.scale(xScale);
	xAxisG.call(xAxis);
	xLabel.text(xVal);
	// Update the points

};

// A function to change what values we plot on the y-axis
function setYval(val) {
	// Update yVal
	yVal = val;
	// Update the axis
	yScale.domain([d3.min(data, function(d) { return parseFloat(d[yVal]); })-1,
				   d3.max(data, function(d) { return parseFloat(d[yVal]); })+1])
	yAxis.scale(yScale);
	yAxisG.call(yAxis);
	yLabel.text(yVal);
	// Update the points

};
