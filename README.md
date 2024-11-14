# JavaScript REPL

A project providing a basic JavaScript REPL (Read-Eval-Print Loop) for local development.

## One-Time Setup

1. Ensure that node has been installed as outlined in JavaScript, Cont., Writing JavaScript Locally.
   
   ```bash
   $ brew install node
   ```

2. Fork and clone this project.

3. In your terminal, navigate to the project directory.

4. Install the project dependencies.

   ```bash
   $ npm install
   ```

## Running the REPL

1. In your terminal, navigate to the project directory.

2. Open the project in VS Code

   ```bash
   $ code .
   ```

3. Make edits to the `src/index.js` file.

4. Run the REPL.

  - In the terminal from the project directory, run the following command:

    ```bash
    $ node src/index.js
    ```

  - Or from VS Code, install the **Code Runner** extension and run the file by clicking the play button in the top right corner of the editor.

5. Repeat steps 3-4 as needed.

## Tests

A simple example test is provided in the `src/math.test.js` file, which tests a function defined in `src/math.js`. To run the test, use the following command:

```bash
$ npm test
```

Tests can be discovered by VS Code by installing the **Jest** extension.

Tests will be covered in more detail in Unit 3, Tests

## Additional files

Additional files can be added to the `src` directory and then run from the poroject directory as

```bash
$ node src/<filename>.js
```