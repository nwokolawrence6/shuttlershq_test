import mysql from 'mysql2/promise'
import bluebird from 'bluebird'
const { DB_HOST, DATABASE, username, password } = process.env
interface dbConnectionObject {
  host: string,
  user: string,
  database: string,
  password?:string
  Promise: any
}
class Db {
  private readonly dbConnectionObject:dbConnectionObject
  constructor () {
    this.dbConnectionObject = {
      host: DB_HOST,
      user: username,
      database: DATABASE,
      Promise: bluebird
    }
    if (password) {
      this.dbConnectionObject.password = password
    }
  }

  async connect () {
    return await mysql.createConnection(this.dbConnectionObject)
  }
}
export default Db
