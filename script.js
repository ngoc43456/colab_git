// script.js

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        // Tạo phần tử chứa tên nhóm nếu chưa có
        let memberList = document.getElementById("memberList");

        if (!memberList) {
            memberList = document.createElement("div");
            memberList.id = "memberList";
            memberList.style.marginTop = "20px";
            memberList.style.fontSize = "1.2em";

            const members = ["Tom", "Jerry", "Spike"];
            memberList.innerHTML = `<p><strong>Thành viên nhóm:</strong></p><ul>` +
                members.map(name => `<li>${name}</li>`).join('') +
                `</ul>`;

            // Thêm vào phần main
            document.querySelector("main").appendChild(memberList);
        }
    });
});
