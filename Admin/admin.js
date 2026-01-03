document.getElementById('addBtn').addEventListener('click', function() {
    // Get values from inputs
    const name = document.getElementById('empName').value;
    const salary = document.getElementById('empSalary').value;
    const team = document.getElementById('empTeam').value;
    const role = document.getElementById('empRole').value;
    const company = document.getElementById('companyName').value;
    
    // Simple Validation
    if(!name || !salary || !company) {
        alert("Please fill in all fields");
        return;
    }

    // Create a unique ID (starting from 1001)
    const tableBody = document.getElementById('tableBody');
    const empId = 1001 + tableBody.rows.length;

    // Create Table Row
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${empId}</td>
        <td>${salary}</td>
        <td>${role}</td>
        <td>${team}</td>
        <td>${company}</td>
        <td class="options-btns">
            <i class="fas fa-pen"></i>
            <i class="fas fa-trash delete-btn"></i>
        </td>
    `;

    // Add to table
    tableBody.appendChild(row);

    // Clear inputs
    clearInputs();
});

// Delete Functionality
document.getElementById('tableBody').addEventListener('click', function(e) {
    if(e.target.classList.contains('delete-btn')) {
        if(confirm('Are you sure you want to delete this employee?')) {
            e.target.closest('tr').remove();
        }
    }
});

function clearInputs() {
    document.getElementById('empName').value = '';
    document.getElementById('empSalary').value = '';
    document.getElementById('empTeam').value = '';
    document.getElementById('companyName').value = '';
}