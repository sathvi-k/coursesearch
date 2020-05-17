
## __1. Setup MySQL Database__

- Download the latest versions of MySQL and MySQL Workbench.

- Clone this repo. Open MySQL Workbench and run the coursesearch.sql script. This should create a table that will be the course database! 
    ```bash
    $ git clone https://github.com/sathvi-k/coursesearch.git

    ```

- __Done!__ 

#

## __2. Setup Node.js Backend__

- Go to the  __*backend*__ folder then install all dependencies:

    ```bash
    $ cd coursesearch/backend

    $ npm i
    ```

- Open __*app.js*__ & edit these lines to configure your database:
    
    ```javascript
    const db = mysql.createConnection({
        host : 'localhost',
        user : 'your_database_username (if you''re using localhost, this is probably root)',
        password : 'your_database_password',
        database : 'your_database_name (should be CourseSearch)'
    });
    ```

- Save it, then run your backend project. It will run at __*localhost:3210*__:

    ```bash
    $ cd coursesearch/backend

    $ node app
    ```
- Note: If there is an error fetching data from the database or adding to the database, this server will close. Restart it by running it again.

- __Done!__ 

#

## __3. Setup React Frontend__

- Go to the __*frontend*__ folder, install all the dependencies and then run this project:

    ```bash
    $ cd coursesearch/frontend

    $ npm i

    $ npm start
    ```

- It will run at __*localhost:3000*__ & should open in the browser automatically! __Done!__ 

#

## __4. Use the coursesearch!__
- After running the SQL script, there should be 4 entries in the coursesearch database. Add a few of your own by entering information and clicking the "Submit" button. Then, click the "Search" button to see all the entries, including the ones you've added!