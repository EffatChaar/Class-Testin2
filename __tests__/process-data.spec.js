const processData = require('../lib/process-data.js')
describe('Process Data', () => {
    let processedData

    let MockData = [
        {
            "name": "Miss Jermain Waters",
            "age": 31,
            "yearsExperience": 3,
            "satisfaction": 2,
            "project1": "pass",
            "project2": "fail",
            "project3": "fail",
            "project4": "pass"
          },
          {
            "name": "Juliana Runte",
            "age": 42,
            "yearsExperience": 3,
            "satisfaction": 2,
            "project1": "fail",
            "project2": "fail",
            "project3": "fail",
            "project4": "pass"
          },
          {
            "name": "Emmalee Daugherty",
            "age": 25,
            "yearsExperience": 2,
            "satisfaction": 4,
            "project1": "fail",
            "project2": "pass",
            "project3": "pass",
            "project4": "fail"
          }
    ]
    beforeEach(() => {
        processedData = processData(MockData)
    })
    describe('Shape of processed data', () => {
        it('Should generate an object with 3 keys', () => {
            expect(Object.keys(processedData)).toEqual([
                'projects', 
                'experience',
                'demographics'
            ])
        })
    })
    describe('Projects', () => {
        it('Should create an object for each project', () => {
            expect(Object.keys(processedData.projects)).toEqual([
                'project1',
                'project2',
                'project3',
                'project4'
            ])
        })
        it('Should calculate the average satisfaction for passed students', () => {
            expect(processedData.projects['project1'].passed.satisfaction).toEqual(2)
        })
        it('Should calculate the average satisfaction for failed students', () => {
            expect(processedData.projects['project1'].failed.satisfaction).toEqual(3)
        })
    })
    describe('Experience', () => {
        it('Should return average satisfaction for all years of experience given in the data set', () => {
            expect(processedData.experience[2].satisfaction).toEqual(4)
            expect(processedData.experience[3].satisfaction).toEqual(2)
        })
    })
    describe('Demographics', () => {
        it('Should return average age and average satisfaction for the cohort', () => {
            expect(processedData.demographics.age).toEqual(33)
            expect(processedData.demographics.satisfaction).toEqual(3)
        })
    })
})