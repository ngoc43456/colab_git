document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("actionButton");

    button.addEventListener("click", function () {
        // Tạo phần tử div chứa danh sách tên
        const nameList = document.createElement("ul");

        const names = [
            "Trần Nhựt Thiên",
            "Nguyễn Hoài Thương",
            "Lưu Bích Ngọc",
            "Cô Nhân Quý"
        ];

        names.forEach(function(name) {
            const listItem = document.createElement("li");
            listItem.textContent = name;
            nameList.appendChild(listItem);
        });

        document.body.appendChild(nameList);
    });
});
