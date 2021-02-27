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

 // Slice arrays for plotting
 sliced_OTU_IDs = otu_ids.slice(0,10);
 sliced_OTU_Labels = otu_labels.slice(0,10);
 sliced_OTU_Sample_Values = otu_sample_values.slice(0,10);
 console.log(sliced_OTU_IDs);
 console.log(sliced_OTU_Labels);
 console.log(sliced_OTU_Sample_Values);

 // trace
 var trace1 = {
    x: sliced_OTU_Sample_Values,
    y: sliced_OTU_IDs,
    text: sliced_OTU_Sample_Values,
    type: "bar",
    orientation: "h"
    };
    //data
    var barData = [trace1];
    //layout
    var layout = {
        margin: {
            l:100,
            r:100,
            t:100,
            b:100
        }
    };
   Plotly.newPlot("bar", barData, layout) 

})
