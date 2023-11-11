CREATE TABLE Users (
    name VARCHAR(20) PRIMARY KEY,
    password VARCHAR(20)
);

CREATE TABLE Docs (
    name VARCHAR(20) PRIMARY KEY,
    userName VARCHAR(20),
    docData LONGBLOB
);