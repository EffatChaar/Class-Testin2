const StudentStats = require('../lib/student-stats.js')
describe('Student Stats', () => {
    let statsMachine, processedData;
    beforeEach(() => {
        statsMachine = new StudentStats('../lib/data.json')
        processedData = {
            projects: {
                'project1' : {
                    passed: { number: 10, satisfaction: 10 },
                    failed: { number: 10, satisfaction: 10 }
                }
            },
            experience: {
                1: 20 ,
                2: 14 ,
                3: 14 ,
                4: 26 ,
                5: 15 ,
                6: 10
            },
            demographics: {
                averageAge: 32,
                aveSatisfaction: 3
            }
        }
    })
        it('Should load the JSON', () => {
            expect(statsMachine.data).toBeDefined()
            expect(statsMachine.data[0].name).toEqual('Miss Jermain Waters')
    })
    describe('Query project query by name', () => {
        describe('When project name exists', () => {
            it('should return the correct stats', () => {
                expect(statsMachine.getProjectByName('project1')).toEqual(
                    processedData.projects['project1']
                )
            })
        })
        describe('When project name does not exist', () => {
            it('should throw an error', () => {
                expect(() => statsMachine.getProjectByName('aaa')).toThrow(
                    'invalid project provided'
                )
            })
        }) 
    })
})