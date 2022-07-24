
import {enablePromise, openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';
//Gerar type para consumo da tabela.

import {ITypesProps} from '../types/index';

//const dbName = './task1.db';
const dbName = 'sqlite_puro.db';
const tableName = 'table_sqlite';

enablePromise(true);

export async function getDbConnection() {
  return openDatabase({name: dbName, location: 'default'});
}

export async function createTable(db:SQLiteDatabase) {
  const query = `CREATE TABLE IF NOT EXISTS 
      ${tableName}(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(512), type VARCHAR(512))`;

  await db.executeSql(query);
}

export async function initDatabase() {
  const db = await getDbConnection();
  createTable(db);
}

export async function getTasks() {
  const tasks: ITypesProps[] = [];
  const db = await getDbConnection();
  const results = await db.executeSql(`SELECT id, title, type FROM ${tableName}`);
  results.forEach(function (result) {
    for (let index = 0; index < result.rows.length; index++) {
      tasks.push(result.rows.item(index));
    }
  });

  return tasks;
}

export async function getTask(id:string) {
  let task: never[] = [];
  //var task: ITypesProps[] = [];
  const db = await getDbConnection();
  const results = await db.executeSql(
    `SELECT id, title, type FROM ${tableName} WHERE id = ${id}`,
  );
  results.forEach(function (result) {
    for (let index = 0; index < result.rows.length; index++) {
      task = result.rows.item(index);
    }
  });
  return task;
}

export async function insertTask(title:string, type:string) {
  const insertQuery = `INSERT INTO ${tableName} (title, type) values ('${title}','${type}')`;
  const db = await getDbConnection();
  return db.executeSql(insertQuery);
}

export async function updateTask({id, title, type}:ITypesProps) {
  const insertQuery = `UPDATE ${tableName} SET title = '${title}', type = '${type}' WHERE id = ${id}`;
  const db = await getDbConnection();
  return db.executeSql(insertQuery);
}

export async function deleteTask(id:string) {
  const db = await getDbConnection();
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  await db.executeSql(deleteQuery);
}

export async function deleteTable() {
  const db = await getDbConnection();
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
}
