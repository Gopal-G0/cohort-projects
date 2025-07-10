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

app.use(express.json());

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
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg : "Done"
    })
})

app.put('/',function(req,res) {
    const gopalKidneys = users[0].kidneys;
    const numberOfKidneys = gopalKidneys.length;
    for(let i = 0;i < numberOfKidneys;i++) {
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        Message: 'All Kidneys were transplanted successfully.'
    })
})

app.delete('/',function(req,res) {
    const gopalKidneys = users[0].kidneys;
    const numberOfKidneys = gopalKidneys.length;
    let healthyKidneyCount = 0;
    for(let i = 0;i < numberOfKidneys;i++) {
        if(users[0].kidneys[i].healthy) {
            healthyKidneyCount++;
        }
    }

    let unhealthyKidneyCount = numberOfKidneys - healthyKidneyCount;
    if(!unhealthyKidneyCount) {
        res.status(411).json({
            msg: "There are no unhealthy kidneys"
        })
    }

    const newKidneys = [];
    for(let i = 0;i < numberOfKidneys;i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.json({
        msg: 'All Unhealthy Kidneys Removed'
    })

})

app.listen(3000);