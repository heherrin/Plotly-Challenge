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
 console.log(otu_sample_values)
});


