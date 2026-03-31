function Generate_result() {

    calSection("inputMath_attempt", "inputMath_correct", "inputMath_total", "inputMath_time", "resultMath_acc", "resultMath_time")
    calSection("inputPhy_attempt", "inputPhy_correct", "inputPhy_total", "inputPhy_time", "resultPhy_acc", "resultPhy_time")
    calSection("inputGen_attempt", "inputGen_correct", "inputGen_total", "inputGen_time", "resultGen_acc", "resultGen_time")
    calSection("inputApt_attempt", "inputApt_correct", "inputApt_total", "inputApt_time", "resultApt_acc", "resultApt_time")
}

function calSection(idAttempt, idCorrect, idTotal, idTime, idAcc, idTimeResult) {

    let attempt = Number(document.getElementById(idAttempt).value)
    let correct = Number(document.getElementById(idCorrect).value)
    let total = Number(document.getElementById(idTotal).value)
    let time = Number(document.getElementById(idTime).value)

    if (isNaN(attempt) || isNaN(correct) || isNaN(total) || total === 0) {
        document.getElementById(idAcc).innerHTML = "❌ Invalid input"
        document.getElementById(idTimeResult).innerHTML = "-"
        return
    }

    let accuracy = correct / attempt
    let score = correct * accuracy
    let percent = (correct / total) * 100
    let timePerItem = time / attempt

    // 🎯 ระดับ
    let level = "", color = "", emoji = ""
    if (percent >= 80) {
        level = "ดี"; color = "green"; emoji = "🔥"
    } else if (percent >= 60) {
        level = "กลาง"; color = "orange"; emoji = "👍"
    } else {
        level = "ต้องพัฒนา"; color = "red"; emoji = "⚠️"
    }

    // ⏱️ เวลา
    let timeLevel = "", timeColor = "", timeEmoji = ""
    if (timePerItem <= 1) {
        timeLevel = "เร็ว"; timeColor = "green"; timeEmoji = "⚡"
    } else if (timePerItem <= 2) {
        timeLevel = "ปานกลาง"; timeColor = "orange"; timeEmoji = "⏳"
    } else {
        timeLevel = "ช้า"; timeColor = "red"; timeEmoji = "🐢"
    }

    document.getElementById(idAcc).innerHTML =
        `<span style="color:${color}">
        ${emoji} ${score.toFixed(2)} คะแนน (${level})
        </span>`

    document.getElementById(idTimeResult).innerHTML =
        `<span style="color:${timeColor}">
        ${timeEmoji} ${timePerItem.toFixed(2)} นาที/ข้อ (${timeLevel})
        </span>`
}