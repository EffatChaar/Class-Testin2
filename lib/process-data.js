module.exports = data => {

    let ageArray = []
    let satisfactionArray = []
    let reducer = (acc, cur) => acc + cur
    
   
    
    let demographics = {}

    for (let i = 0; i < data.length; i++) {
        let age = data[i].age
        let satisfaction = data[i].satisfaction
        ageArray.push(age)
        satisfactionArray.push(satisfaction)
    }

    let averageAge = ageArray.reduce(reducer) / ageArray.length
    let aveSatisfaction = satisfactionArray.reduce(reducer) / satisfactionArray.length

    demographics.age = Math.round(averageAge)
    demographics.satisfaction = Math.round(aveSatisfaction)


    let experience = {}
    let exp
    for (i = 0; i < data.length; i++) {
        exp = data[i].yearsExperience
        if (experience[exp] === undefined) {
            experience[exp] = { satisfaction : data[i].satisfaction }
        } else {
            current = experience[exp].satisfaction
            experience[exp] = {
                satisfaction: (current + data[i].satisfaction) / 2
            }
        }
    }


    let projects = {}

    projects.project1 = {
        passed: { number: undefined, satisfaction: undefined },
        failed: { number: undefined, satisfaction: undefined }
    }
    projects.project2 = {
        passed: { number: undefined, satisfaction: undefined },
        failed: { number: undefined, satisfaction: undefined }
    }
    projects.project3 = {
        passed: { number: undefined, satisfaction: undefined },
        failed: { number: undefined, satisfaction: undefined }
    }
    projects.project4 = {
        passed: { number: undefined, satisfaction: undefined },
        failed: { number: undefined, satisfaction: undefined }
    }

    const projectVal = projectNum => {
        let p1 = projects[projectNum]
        
        for (i = 0; i < data.length; i++) {
            if ( data[i][projectNum] === 'pass' ) {
                if ( p1.passed.number === undefined ) {
                    p1.passed.number = 1
                }
                if ( p1.passed.satisfaction === undefined ) {
                    p1.passed.satisfaction = data[i].satisfaction
                }
                else {
                    p1.passed.number += 1;
                    passedSatisfaction = p1.passed.satisfaction
                    p1.passed.satisfaction = (data[i].satisfaction + passedSatisfaction) / 2
                }
            }
            else {
                if ( data[i][projectNum] === 'fail') {
                    if ( p1.failed.number === undefined ) {
                        p1.failed.number = 1
                    }
                    if ( p1.failed.satisfaction === undefined ) {
                        p1.failed.satisfaction = data[i].satisfaction
                    }
                    else {
                        p1.failed.number += 1;
                        failedSatisfaction = p1.failed.satisfaction
                        p1.failed.satisfaction = (data[i].satisfaction + failedSatisfaction ) / 2
                    }
                }
            }
        }
    }

    projectVal('project1')
    projectVal('project2')
    projectVal('project3')
    projectVal('project4')

    // console.log(projects)

    return { projects, experience, demographics }

}