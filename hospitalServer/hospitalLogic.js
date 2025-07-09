const express = require('express');
const app = express();

const users = [{
    name: 'Gopal',
    kidneys: [{
        healthy: true
    }, {
        healthy: false
    }]
}]

app.get('/',function(req,res) {
    const gopalKidneys = users[0].kidneys;
    const numberOfKidneys = gopalKidneys.length;
    let healthyKidneyCount = 0;
    for(let i = 0;i < numberOfKidneys;i++) {
        if(gopalKidneys[i].healthy) {
            healthyKidneyCount++;
        }
    }
    let unhealthyKidneyCount = numberOfKidneys - healthyKidneyCount;

    res.json({
        numberOfKidneys,
        healthyKidneyCount,
        unhealthyKidneyCount
    })
})

app.post('/',function(req,res) {
    const isHealthy = res.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
})

app.put('/',function(req,res) {
    
})

app.delete('/',function(req,res) {
    
})

app.listen(3000);