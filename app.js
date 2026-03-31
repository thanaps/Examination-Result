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

    // ❌ กรอกไม่ครบ หรือเป็น 0
    if (!attempt || !correct || !total || !time || attempt === 0 || total === 0) {
        document.getElementById(idAcc).innerHTML = "❌ Invalid"
        document.getElementById(idTimeResult).innerHTML = "-"
        return
    }

    let accuracy = correct / attempt
    let score = correct * accuracy
    let percent = (score / total) * 100
    let timePerItem = time / attempt
    let timeLevel = "", timeColor = "", timeEmoji = ""

    // 🎯 คะแนน
    let level = "", color = "", emoji = ""
    if (percent >= 80) {
        level = "ดี"; color = "green"; emoji = "🔥"
    } else if (percent >= 60) {
        level = "กลาง"; color = "orange"; emoji = "👍"
    } else {
        level = "ต้องพัฒนา"; color = "red"; emoji = "⚠️"
    }

    // ⏱️ เวลา
    // 👇 ถ้าเป็น Aptitude ใช้หน่วยวินาที
    if (idTime.includes("Apt")) {
    
        let timePerItemSec = (time * 60) / attempt  // แปลงนาที → วินาที
    
        if (timePerItemSec < 15) {
            timeLevel = "ดี"; timeColor = "green"; timeEmoji = "⚡"
        } else if (timePerItemSec < 30) {
            timeLevel = "ปานกลาง"; timeColor = "orange"; timeEmoji = "⏳"
        } else {
            timeLevel = "ช้า"; timeColor = "red"; timeEmoji = "🐢"
        }
    
        document.getElementById(idTimeResult).innerHTML =
            `<span style="color:${timeColor}">
            ${timeEmoji} ${timePerItemSec.toFixed(2)} วินาที/ข้อ (${timeLevel})
            </span>`
    
    } else {
    
        // วิชาอื่น (นาที)
        if (timePerItem <= 1) {
            timeLevel = "เร็ว"; timeColor = "green"; timeEmoji = "⚡"
        } else if (timePerItem <= 2) {
            timeLevel = "ปานกลาง"; timeColor = "orange"; timeEmoji = "⏳"
        } else {
            timeLevel = "ช้า"; timeColor = "red"; timeEmoji = "🐢"
        }
    
        document.getElementById(idTimeResult).innerHTML =
            `<span style="color:${timeColor}">
            ${timeEmoji} ${timePerItem.toFixed(2)} นาที/ข้อ (${timeLevel})
            </span>`
    }

    document.getElementById(idAcc).innerHTML =
        `<span style="color:${color}">
        ${emoji} ${percent.toFixed(2)}% (${level})
        </span>`
}