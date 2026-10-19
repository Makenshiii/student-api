const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


let students = [
    {
        id: 1,
        name: "Juan Dela Cruz",
        course: "BSIT",
        year: 3
    },
    {
        id: 2,
        name: "Maria Santos",
        course: "BSCS",
        year: 2
    }
];


let nextId = 3;


app.get("/", (req, res) => {
    res.json({
        message: "Student Records API is running"
    });
});


app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});


app.get("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json(student);
});


app.post("/api/students", (req, res) => {
    const { name, course, year } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        typeof course !== "string" ||
        !course.trim() ||
        !Number.isInteger(year) ||
        year < 1 ||
        year > 6
    ) {
        return res.status(400).json({
            message:
                "Name, course, and a valid year (1-6) are required"
        });
    }

    const newStudent = {
        id: nextId++,
        name: name.trim(),
        course: course.trim(),
        year
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        student: newStudent
    });
});


app.put("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(
        student => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, course, year } = req.body;

    if (
        typeof name !== "string" ||
        !name.trim() ||
        typeof course !== "string" ||
        !course.trim() ||
        !Number.isInteger(year) ||
        year < 1 ||
        year > 6
    ) {
        return res.status(400).json({
            message:
                "Name, course, and a valid year (1-6) are required"
        });
    }

    student.name = name.trim();
    student.course = course.trim();
    student.year = year;

    res.status(200).json({
        message: "Student updated successfully",
        student
    });
});


app.delete("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(
        student => student.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});