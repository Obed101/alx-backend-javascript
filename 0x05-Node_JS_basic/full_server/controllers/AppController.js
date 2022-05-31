class AppController {
  static getHomePage(_, res) {
    res.statusCode = 200;
    res.send('Hello Holberton School!');
  }
}

export default AppController;
