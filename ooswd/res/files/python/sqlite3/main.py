# import the sqlite3 package
# this comes with Python when it is installed
import sqlite3

# connect to the database
# this opens an existing database file or
# creates a new database if it does not exist
conn = sqlite3.connect('test2.db')

# this creates an object that represents a
# 'virtual CLI cursor', through which the
# SQL commands will be executed
c = conn.cursor()

# this executes an SQL command
# the example drops the table
# if it exists, so that we start from scratch
c.execute('''DROP TABLE IF EXISTS person;''')

# create the table
c.execute('''CREATE TABLE person (
 	id INTEGER NOT NULL UNIQUE,
 	name TEXT,
 	town TEXT,
 	PRIMARY KEY("id" AUTOINCREMENT)
 );''')

def print_db_contents(cursor, tab_name):
    '''
    Prints out the contents of an entire table in an sqlite3 database.
    :param cursor: An sqlite3 cursor object
    :param tab_name: str
        The name of the table to print out
    :return: iter[tuple]
        An iterable containing the rows from the table.
    '''
    result = cursor.execute('''SELECT * FROM ''' + tab_name + ''';''')
    print("-------------------------------")
    for row in result:
        print(row)
    print("-------------------------------\n")

# more sql commands
c.execute('''INSERT INTO person (name, town) VALUES ('Annie', 'Rathmines')''')
c.execute('''INSERT INTO person (name, town) VALUES ('Ben', 'Crumlin')''')
c.execute('''INSERT INTO person (name, town) VALUES ('Con', 'Dublin')''')
c.execute('''INSERT INTO person (name, town) VALUES ('Dana', 'Phibsboro')''')

print_db_contents(c, 'person')

# at the end, we must commit our changes and close the database
conn.commit()
conn.close()















