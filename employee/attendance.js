let records = JSON.parse(localStorage.getItem("attendance")) || [];
let viewMode = "all";

window.onload = loadAttendance;

function todayDate() {
    return new Date().toISOString().split("T")[0];
}

function checkIn() {
    const date = todayDate();
    const time = new Date().toLocaleTimeString();
    const status = document.getElementById("status").value;

    let record = records.find(r => r.date === date);

    if (!record) {
        records.push({
            date,
            checkIn: time,
            checkOut: "-",
            status
        });
    } else {
        alert("Already checked in today");
    }

    save();
}

function checkOut() {
    const date = todayDate();
    const time = new Date().toLocaleTimeString();

    let record = records.find(r => r.date === date);

    if (!record) {
        alert("Please check in first");
        return;
    }

    record.checkOut = time;
    save();
}

function filterView(mode) {
    viewMode = mode;
    loadAttendance();
}

function loadAttendance() {
    const body = document.getElementById("tableBody");
    body.innerHTML = "";

    let present = 0, halfday = 0, leave = 0, absent = 0;
    const today = new Date();

    records.forEach(r => {
        const recordDate = new Date(r.date);
        const diff = (today - recordDate) / (1000 * 60 * 60 * 24);

        if (viewMode === "week" && diff > 6) return;

        body.innerHTML += `
            <tr>
                <td>${r.date}</td>
                <td>${r.checkIn}</td>
                <td>${r.checkOut}</td>
                <td>${r.status}</td>
            </tr>
        `;

        if (r.status === "Present") present++;
        if (r.status === "Half-day") halfday++;
        if (r.status === "Leave") leave++;
        if (r.status === "Absent") absent++;
    });

    document.getElementById("present").innerText = present;
    document.getElementById("halfday").innerText = halfday;
    document.getElementById("leave").innerText = leave;
    document.getElementById("absent").innerText = absent;
}

function save() {
    localStorage.setItem("attendance", JSON.stringify(records));
    loadAttendance();
}
