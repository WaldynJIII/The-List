CREATE TABLE "Do-them-loser" (
    "id" SERIAL PRIMARY KEY,
    "description" varchar(200) not null,
    "motivation" varchar(400) not null,
    "done" varchar(5) Default 'no'
    );