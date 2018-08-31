const schedule = require('node-schedule')
                                   // começa as 13 horas e executa de 5 em 5 segundos
const task1 = schedule.scheduleJob('*/5 * 13 * * 2', function() {
    console.log('executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    task1.cancel()
    console.log('Cancelando Task 1')
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)] // onde 0: domingo, 1: segunda ... 5: sexta
rule.hour = 12
rule.second = 30

const task2 = schedule.scheduleJob(rule, function() {
    console.log('Executando tarefa 2!', new Date().getSeconds)
})