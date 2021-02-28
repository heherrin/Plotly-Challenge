//Bring in json data using D3
d3.json("data/samples.json").then((bbdata) => {
    console.log(bbdata)

    // Create arrays for plots
    var bbsamples = bbdata.samples;
    var otu_ids = bbsamples.map(bbsamples => {
        return bbsamples.otu_ids;
    });
    var otu_labels = bbsamples.map(bbsamples => {
        return bbsamples.otu_labels;
    });
    var otu_sample_values = bbsamples.map(bbsamples => {
        return bbsamples.sample_values;
    });
    console.log(otu_ids);
    console.log(otu_labels);
    console.log(otu_sample_values);

    // bring otus into drop down menu using d3 select
    var names = bbdata.names;
    var dropdownMenu = d3.select("#selDataset");
    names.forEach(name => {
        dropdownMenu.append("option").text(name);
    });


    //create data points & slice data for top 10
    var xvalues = [];
    var yvalues = [];
    var labelvalues = [];

    otu_ids.forEach(array => {
        var slice = array.slice(0, 10);
        var OTU_id = slice.map(d => "OTU " + d) 
        yvalues.push(OTU_id);
    });

    otu_sample_values.forEach(array => {
        var slice = array.slice(0, 10);
        xvalues.push(slice);
    });

    otu_labels.forEach(array => {
        var slice = array.slice(0, 10);
        labelvalues.push(slice);

           
    });

    //console log to check
    console.log(xvalues);
    console.log(yvalues);
    console.log(labelvalues);


    //write trace for plot

    function init() {
        var trace1 = {
            x: xvalues[0].reverse(),
            y: yvalues[0].reverse(),
            text: labelvalues[0].reverse(),
            type: "bar",
            orientation: "h"
        };
        //data
        var barData = [trace1];
        //layout
        var layout = {
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100
            }
        };
        Plotly.newPlot("bar", barData, layout)
    };
    init()
})
