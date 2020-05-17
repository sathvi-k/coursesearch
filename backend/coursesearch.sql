DROP DATABASE IF EXISTS CourseSearch;
CREATE DATABASE CourseSearch;

DROP TABLE IF EXISTS CourseSearch.Students;
CREATE TABLE CourseSearch.Students (
    StudentName VARCHAR(100),
	CourseDept VARCHAR(100),
	CourseNum INT
);

USE CourseSearch;

INSERT INTO Students(StudentName, CourseDept, CourseNum) VALUES('Harry Green', 'Government', 5);
INSERT INTO Students(StudentName, CourseDept, CourseNum) VALUES('Sarah Brown', 'English', 41);
INSERT INTO Students(StudentName, CourseDept, CourseNum) VALUES('Annie Black', 'Computer Science', 74);
INSERT INTO Students(StudentName, CourseDept, CourseNum) VALUES('Tom Redford', 'Math', 23);
SELECT * FROM Students;