CREATE TABLE Employee (
	EmployeeID INT PRIMARY KEY IDENTITY(1,1),
    FullName varchar(255),
    Address varchar(255),
    PhoneNumber NUMERIC,
    Position varchar(255)
);

INSERT INTO [blueprintsys].[dbo].[Employee]([FullName],[Address] ,[PhoneNumber],[Position])VALUES ('John Doe', '4100 Ponytrail Dr, Mississauga L4W2Y1', 6477890909,'Project Manager');
INSERT INTO [blueprintsys].[dbo].[Employee]([FullName],[Address] ,[PhoneNumber],[Position])VALUES ('Roger Flynn', '100 Galt Avenue, Mississauga L4W2Y1', 6477900808,'Production Manager');
INSERT INTO [blueprintsys].[dbo].[Employee]([FullName],[Address] ,[PhoneNumber],[Position])VALUES ('Alex Virasamy', '400 Pensfield Dr, Mississauga L4W2Y1', 6478180349,'General Manager');
INSERT INTO [blueprintsys].[dbo].[Employee]([FullName],[Address] ,[PhoneNumber],[Position])VALUES ('Kyle Pitt', '200 Guy Street, Mississauga L4W2Y1', 6472341213,'HR Director');
INSERT INTO [blueprintsys].[dbo].[Employee]([FullName],[Address] ,[PhoneNumber],[Position])VALUES ('Elizabeth James', '4134 Newman Street, Mississauga L4W2Y1', 6475671132,'Senior Editor');
INSERT INTO [blueprintsys].[dbo].[Employee]([FullName],[Address] ,[PhoneNumber],[Position])VALUES ('Shelly Bell', '2020 Cresant Street, Mississauga L4W2Y1', 6475009900,'Editor');
INSERT INTO [blueprintsys].[dbo].[Employee]([FullName],[Address] ,[PhoneNumber],[Position])VALUES ('Martin Ziberman', '4432 Fort Street, Mississauga L4W2Y1', 6474321515,'Editor');
GO

