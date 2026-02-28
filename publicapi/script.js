const fetchBtn = document.getElementById("fetchBtn");
const loader = document.getElementById("loader");
const tableContainer = document.getElementById("tableContainer");
const tableBody = document.getElementById("tableBody");
const errorMessage = document.getElementById("errorMessage");

fetchBtn.addEventListener("click", fetchUsers);

async function fetchUsers() {

    loader.style.display = "block";
    tableContainer.classList.add("d-none");
    errorMessage.classList.add("d-none");
    tableBody.innerHTML = "";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data. Server error.");
        }

        const users = await response.json();

        users.forEach(user => {
            const row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.company.name}</td>
                    <td>${user.address.city}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });

        tableContainer.classList.remove("d-none");

    } catch (error) {
        errorMessage.textContent = "❌ Error: " + error.message;
        errorMessage.classList.remove("d-none");
    } finally {
        loader.style.display = "none";
    }
}