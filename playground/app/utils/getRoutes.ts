import fs from 'fs';
import path from 'path';

export function getAllRoutes(dir: any, folder = '', routes: any = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const isDirectory = fs.statSync(filePath).isDirectory();

    if (isDirectory) {
      const newFolder = path.join(folder, file);
      getAllRoutes(filePath, newFolder, routes);
    } else if (file.endsWith('.js') && !file.startsWith('_')) {
      const routePath = path.join(folder, path.basename(file, '.js'));
      const route = routePath === 'index' ? '/' : `/${routePath}`;
      routes.push(route);
    }
  });

  return routes;
}
