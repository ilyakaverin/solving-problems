import fs from 'fs';
import path from 'path';

class DatabaseConfigLoader {

  constructor(path) {
    this.path = path;
  }

  load(env) {
    const file = `database.${env}.json`;
    let filepath = path.join(this.path, file);
    const readFile = fs.readFileSync(filepath,'utf-8');

    const converted = JSON.parse(readFile);

    const iter = (extended)  => {

      if(!extended.hasOwnProperty('extend')) {
        return extended
      } else {
        const newFilepath = path.join(this.path, `database.${extended.extend}.json`);
        const newPath = fs.readFileSync(newFilepath, 'utf-8');
        const newConfig = JSON.parse(newPath);
        const { extend, ...rest } = extended;
        const merged = {...newConfig, ...rest}

        return iter(merged)
      }

    }
    return iter(converted)
  }
}
export default DatabaseConfigLoader

