module.exports = async function(db, {proffyValue, classValue, classScheculeValue}) {
    //inserir dados na tabela proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    
    const proffys_id = insertedProffy.lastID

    //inserir dados na tabela classes
    const insertedClasses = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffys_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffys_id}"
        );
    `)

    const class_id = insertedClasses.lastID


    //inserir dados na tablea class_schedule
    const insertedAllClassesScheduleValues = classScheculeValue.map((classScheculeValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheculeValue.weekday}",
                "${classScheculeValue.time_from}",
                "${classScheculeValue.time_to}"
            )
        `)
    })

    //executar todos os db.runs das class_schudeles
    await Promise.all(insertedAllClassesScheduleValues)
}