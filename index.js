// This line should target the form by its ID "user", not "uesr".
let usform = document.getElementById("user");

const entries = () => {
    // Parsing the sessionStorage value for "users" if it exists, otherwise initializing it as an empty array.
    let e = JSON.parse(sessionStorage.getItem("users")) || [];
    return e;
};

let ue = entries();

const display = () => {
    const e = entries();
    const te = e
        .map((item) => {
            // Use item instead of e inside map function
            const name = `<td class='border px-4 py-2'>${item.name}</td>`;
            const email = `<td class='border px-4 py-2'>${item.email}</td>`;
            const password = `<td class='border px-4 py-2'>${item.password}</td>`;
            const dob = `<td class='border px-4 py-2'>${item.dob}</td>`;
            const accept = `<td class='border px-4 py-2'>${item.accept}</td>`;
            const row = `<tr>${name}${email}${password}${dob}${accept}</tr>`;
            return row;
        })
        .join("\n");

    const table = `<table class="table-auto w-full">
                    <thead>
                        <tr>
                            <th class="px-5 py-3">Name</th>
                            <th class="px-5 py-3">Email</th>
                            <th class="px-5 py-3">Password</th>
                            <th class="px-5 py-3">DOB</th>
                            <th class="px-5 py-3">Accepted?</th>
                        </tr>
                    </thead>
                    <tbody>${te}</tbody>
                </table>`;

    let details = document.getElementById('entriesTable');
    details.innerHTML = table;
};

const save = (item) => {
    item.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const accept = document.getElementById('accept').checked; // Use checked for checkboxes

    const entry = {
        name,
        email,
        password,
        dob,
        accept
    };
    ue.push(entry);
    sessionStorage.setItem("users", JSON.stringify(ue));
    display();
};

usform.addEventListener("submit", save);
display();
