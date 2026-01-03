let leaves = JSON.parse(localStorage.getItem("leaves")) || [];

window.onload = function () {
    loadLeaves();
};

function applyLeave() {
    const leaveType = document.getElementById("leaveType").value;
    const fromDate = document.getElementById("fromDate").value;
    const toDate = document.getElementById("toDate").value;
    const remarks = document.getElementById("remarks").value;

    if (!fromDate || !toDate) {
        alert("Please select date range");
        return;
    }

    const leave = {
        leaveType,
        fromDate,
        toDate,
        remarks,
        status: "Pending"
    };

    leaves.push(leave);
    localStorage.setItem("leaves", JSON.stringify(leaves));

    document.getElementById("remarks").value = "";
    loadLeaves();
}

function loadLeaves() {
    const table = document.getElementById("leaveTable");
    table.innerHTML = "";

    let pending = 0, approved = 0, rejected = 0;

    leaves.forEach(leave => {
        const row = `
            <tr>
                <td>${leave.leaveType}</td>
                <td>${leave.fromDate}</td>
                <td>${leave.toDate}</td>
                <td>${leave.remarks}</td>
                <td>${leave.status}</td>
            </tr>
        `;
        table.innerHTML += row;

        if (leave.status === "Pending") pending++;
        if (leave.status === "Approved") approved++;
        if (leave.status === "Rejected") rejected++;
    });

    document.getElementById("pendingCount").innerText = pending;
    document.getElementById("approvedCount").innerText = approved;
    document.getElementById("rejectedCount").innerText = rejected;
}
