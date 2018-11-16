DROP DATABASE IF EXISTS CarsDB;
CREATE DATABASE CarsDB;

/* Showing results for CarDB.xlsx */

/* CREATE TABLE */
USE CarsDB;
CREATE TABLE CarsDB
(
id  int(10)
    not null
    auto_increment,

Year DOUBLE,
Make VARCHAR(100),
Model VARCHAR(100),
Engine_size_L_ DOUBLE,
Vehicle_Type VARCHAR(100),
Horsepower DOUBLE,
_of_Cylinders DOUBLE,
Transmission VARCHAR(100),
_of_Gears DOUBLE,
Drive_System_Description VARCHAR(100),
Equivalent_Test_Weight_lbs VARCHAR(100),
Test_Fuel_Type_Cd DOUBLE,
Test_Fuel_Type_Description DOUBLE,
MPG VARCHAR(100),

primary key (id)
);
    
USE CarsDB;
SELECT * FROM CarsDB;