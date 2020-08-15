const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "7823787328",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "40",
       
    }

    classScheculeValue = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 780,
            time_to: 1220
        },

    ]

    //cria
    //await createProffy(db, { proffyValue, classValue, classScheculeValue })
    
    //consultar

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar classes de um determinado professor e trazer os dados junto do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffys_id = proffys.id)
        WHERE classes.proffys_id = 8;
    
    `)

    //console.log(selectedClassesAndProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "720"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectedClassesSchedules)
})